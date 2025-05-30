// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetSchemaOptions,
  GetSchemaPropertiesOptions,
  RegisterSchemaOptions,
  Schema,
  SchemaDescription,
  SchemaProperties,
  SchemaRegistry,
} from "@azure/schema-registry";
import { SchemaRegistryClient } from "@azure/schema-registry";
import { createTestCredential } from "@azure-tools/test-credential";
import { testGroup, testSchemaIds } from "./dummies.js";
import { randomUUID } from "@azure/core-util";
import type { Recorder } from "@azure-tools/test-recorder";
import { assertEnvironmentVariable, env, isLiveMode } from "@azure-tools/test-recorder";
import type { Pipeline, HttpClient, PipelineRequest } from "@azure/core-rest-pipeline";
import {
  createPipelineRequest,
  createHttpHeaders,
  bearerTokenAuthenticationPolicy,
  createEmptyPipeline,
} from "@azure/core-rest-pipeline";
type UpdatedSchemaDescription = Required<Omit<SchemaDescription, "version">>;

function getEnvVar(name: string): string {
  const value = env[name];
  if (!value) {
    throw new Error(`${name} is undefined!`);
  }
  return value;
}

function createLiveTestRegistry(settings: {
  registerSchemaOptions?: RegisterSchemaOptions;
  getSchemaPropertiesOptions?: GetSchemaPropertiesOptions;
  getSchemaOptions?: GetSchemaOptions;
  recorder?: Recorder;
}): SchemaRegistry {
  const { getSchemaOptions, getSchemaPropertiesOptions, registerSchemaOptions, recorder } =
    settings;
  // NOTE: These tests don't record, they use a mocked schema registry
  // implemented below, but if we're running live, then use the real
  // service for end-to-end integration testing.
  const client = new SchemaRegistryClient(
    getEnvVar("SCHEMAREGISTRY_AVRO_FULLY_QUALIFIED_NAMESPACE"),
    createTestCredential(),
    recorder?.configureClientOptions({}),
  );
  return {
    getSchema: (id: string) => client.getSchema(id, getSchemaOptions),
    getSchemaProperties: (schema: SchemaDescription) =>
      client.getSchemaProperties(schema, getSchemaPropertiesOptions),
    registerSchema: (schema: SchemaDescription) =>
      client.registerSchema(schema, registerSchemaOptions),
  };
}

function createMockedTestRegistry(): SchemaRegistry {
  const mapById = new Map<string, Schema>();
  const mapByContent = new Map<string, Schema>();
  let idCounter = 0;

  return { registerSchema, getSchemaProperties, getSchema };

  async function registerSchema(
    schema: UpdatedSchemaDescription,
    _options?: RegisterSchemaOptions,
  ): Promise<SchemaProperties> {
    let result = mapByContent.get(schema.definition);
    if (!result) {
      const format = schema.format.toLowerCase();
      if (format !== "avro") {
        throw new Error(`Invalid schema type for PUT request. '${format}' is not supported`);
      }
      result = {
        definition: schema.definition,
        properties: {
          id: newId(),
          format: schema.format,
          groupName: schema.groupName,
          name: schema.name,
        } as any,
      };
      mapByContent.set(result.definition, result);
      mapById.set(result.properties.id, result);
    }
    return result.properties;

    function newId(): string {
      if (idCounter >= testSchemaIds.length) {
        return randomUUID();
      }
      const id = testSchemaIds[idCounter];
      idCounter++;
      return id;
    }
  }

  async function getSchemaProperties(
    schema: UpdatedSchemaDescription,
    _options?: GetSchemaPropertiesOptions,
  ): Promise<SchemaProperties> {
    const storedSchema = mapByContent.get(schema.definition);
    if (!storedSchema) {
      throw new Error(`Schema not found: ${JSON.stringify(schema)}`);
    }
    return storedSchema.properties;
  }

  async function getSchema(id: string, _options?: GetSchemaOptions): Promise<Schema> {
    const storedSchema = mapById.get(id);
    if (!storedSchema) {
      throw new Error(`Schema id ${id} does not exist`);
    }
    return storedSchema;
  }
}

export function createTestRegistry(
  settings: {
    neverLive?: boolean;
    registerSchemaOptions?: RegisterSchemaOptions;
    getSchemaPropertiesOptions?: GetSchemaPropertiesOptions;
    getSchemaOptions?: GetSchemaOptions;
    recorder?: Recorder;
  } = {},
): SchemaRegistry {
  const {
    neverLive = false,
    getSchemaOptions,
    getSchemaPropertiesOptions,
    registerSchemaOptions,
    recorder,
  } = settings;
  return !neverLive && isLiveMode()
    ? createLiveTestRegistry({
        getSchemaOptions,
        getSchemaPropertiesOptions,
        registerSchemaOptions,
        recorder,
      })
    : createMockedTestRegistry();
}
export function createPipelineWithCredential(): Pipeline {
  const DEFAULT_SCOPE = "https://eventhubs.azure.net/.default";
  const pipeline = createEmptyPipeline();
  const credential = createTestCredential();
  const authPolicy = bearerTokenAuthenticationPolicy({ credential, scopes: DEFAULT_SCOPE });
  pipeline.addPolicy(authPolicy);
  return pipeline;
}

export async function removeSchemas(
  schemaNamesList: string[],
  pipeline: Pipeline,
  client: HttpClient,
): Promise<void> {
  if (!isLiveMode()) {
    return;
  }

  function formatRequest(schemaName: string, apiVersion: string = "2022-10"): PipelineRequest {
    const endpoint = assertEnvironmentVariable("SCHEMAREGISTRY_AVRO_FULLY_QUALIFIED_NAMESPACE");
    const url = `${endpoint}/$schemagroups/${testGroup}/schemas/${schemaName}/?api-version=${apiVersion}`;
    return createPipelineRequest({
      url,
      method: "DELETE",
      timeout: 0,
      withCredentials: true,
      headers: createHttpHeaders({}),
    });
  }

  for (const schemaName of schemaNamesList) {
    const request = formatRequest(schemaName);
    await pipeline.sendRequest(client, request);
  }

  schemaNamesList.length = 0;
}
