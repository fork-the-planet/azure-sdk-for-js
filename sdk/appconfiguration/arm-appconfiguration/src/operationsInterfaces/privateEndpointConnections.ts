/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByConfigurationStoreOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * Lists all private endpoint connections for a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  listByConfigurationStore(
    resourceGroupName: string,
    configStoreName: string,
    options?: PrivateEndpointConnectionsListByConfigurationStoreOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Gets the specified private endpoint connection associated with the configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param privateEndpointConnectionName Private endpoint connection name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configStoreName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams,
  ): Promise<PrivateEndpointConnectionsGetResponse>;
  /**
   * Update the state of the specified private endpoint connection associated with the configuration
   * store. This operation cannot be used to create a private endpoint connection. Private endpoint
   * connections must be created with the Network resource provider.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param privateEndpointConnectionName Private endpoint connection name
   * @param privateEndpointConnection The private endpoint connection properties.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    configStoreName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>,
      PrivateEndpointConnectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Update the state of the specified private endpoint connection associated with the configuration
   * store. This operation cannot be used to create a private endpoint connection. Private endpoint
   * connections must be created with the Network resource provider.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param privateEndpointConnectionName Private endpoint connection name
   * @param privateEndpointConnection The private endpoint connection properties.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    configStoreName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse>;
  /**
   * Deletes a private endpoint connection.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param privateEndpointConnectionName Private endpoint connection name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    configStoreName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a private endpoint connection.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param privateEndpointConnectionName Private endpoint connection name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    configStoreName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<void>;
}
