// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the use of JsonSchemaSerializer to create messages with json-serialized payload using schema from Schema Registry.
 */

import { DefaultAzureCredential } from "@azure/identity";
import {
  SchemaRegistryClient,
  SchemaDescription,
  KnownSchemaFormats,
} from "@azure/schema-registry";
import { JsonSchemaSerializer } from "@azure/schema-registry-json";

// Load the .env file if it exists
import "dotenv/config";
// The fully qualified namespace for schema registry
const schemaRegistryFullyQualifiedNamespace =
  process.env["SCHEMAREGISTRY_JSON_FULLY_QUALIFIED_NAMESPACE"] || "<namespace>";

// The schema group to use for schema registration or lookup
const groupName = process.env["SCHEMA_REGISTRY_GROUP"] || "AzureSdkSampleGroup";

// Sample Json Schema for user with first and last names
export const schemaObject = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "user",
  title: "User",
  description: "A user for the product",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
  },
};

// Matching TypeScript interface for schema
interface User {
  firstName: string;
  lastName: string;
}

const schema = JSON.stringify(schemaObject);

// Description of the schema for registration
const schemaDescription: SchemaDescription = {
  name: schemaObject.$id,
  groupName,
  format: KnownSchemaFormats.Json,
  definition: schema,
};

export async function main(): Promise<void> {
  // Create a credential
  const credential = new DefaultAzureCredential();

  // Create a new client
  const client = new SchemaRegistryClient(schemaRegistryFullyQualifiedNamespace, credential);

  // Register the schema. This would generally have been done somewhere else.
  await client.registerSchema(schemaDescription);

  // Create a new serializer backed by the client
  const serializer = new JsonSchemaSerializer(client, { groupName });

  // serialize an object that matches the schema and put it in a message
  const value: User = { firstName: "Jane", lastName: "Doe" };
  const message = await serializer.serialize(value, schema);
  console.log("Created message:");
  console.log(JSON.stringify(message));

  // deserialize the message back to an object
  const deserializedObject = await serializer.deserialize<User>(message);
  console.log("Deserialized object:");
  console.log(JSON.stringify(deserializedObject));
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
