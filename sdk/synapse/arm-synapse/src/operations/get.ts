/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Get } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  GetIntegrationRuntimeStartOptionalParams,
  GetIntegrationRuntimeStartResponse,
  GetIntegrationRuntimeStopOptionalParams,
  GetIntegrationRuntimeStopResponse,
  GetIntegrationRuntimeEnableInteractivequeryOptionalParams,
  GetIntegrationRuntimeEnableInteractivequeryResponse
} from "../models";

/** Class containing Get operations. */
export class GetImpl implements Get {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class Get class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get an integration runtime start operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntimeOperationId Integration runtime Operation Id
   * @param options The options parameters.
   */
  integrationRuntimeStart(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    integrationRuntimeOperationId: string,
    options?: GetIntegrationRuntimeStartOptionalParams
  ): Promise<GetIntegrationRuntimeStartResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        integrationRuntimeOperationId,
        options
      },
      integrationRuntimeStartOperationSpec
    );
  }

  /**
   * Get an integration runtime stop operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntimeOperationId Integration runtime Operation Id
   * @param options The options parameters.
   */
  integrationRuntimeStop(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    integrationRuntimeOperationId: string,
    options?: GetIntegrationRuntimeStopOptionalParams
  ): Promise<GetIntegrationRuntimeStopResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        integrationRuntimeOperationId,
        options
      },
      integrationRuntimeStopOperationSpec
    );
  }

  /**
   * Get an integration runtime enable interactivequery operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param integrationRuntimeOperationId Integration runtime Operation Id
   * @param options The options parameters.
   */
  integrationRuntimeEnableInteractivequery(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    integrationRuntimeOperationId: string,
    options?: GetIntegrationRuntimeEnableInteractivequeryOptionalParams
  ): Promise<GetIntegrationRuntimeEnableInteractivequeryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        integrationRuntimeOperationId,
        options
      },
      integrationRuntimeEnableInteractivequeryOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const integrationRuntimeStartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/start/operationstatuses/{integrationRuntimeOperationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeOperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName,
    Parameters.integrationRuntimeOperationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const integrationRuntimeStopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/stop/operationstatuses/{integrationRuntimeOperationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeStopOperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName,
    Parameters.integrationRuntimeOperationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const integrationRuntimeEnableInteractivequeryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/enableinteractivequery/operationstatuses/{integrationRuntimeOperationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeEnableinteractivequery
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName,
    Parameters.integrationRuntimeOperationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};