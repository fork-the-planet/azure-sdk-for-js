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
  NetworkToNetworkInterconnect,
  NetworkToNetworkInterconnectsListByNetworkFabricOptionalParams,
  NetworkToNetworkInterconnectsCreateOptionalParams,
  NetworkToNetworkInterconnectsCreateResponse,
  NetworkToNetworkInterconnectsGetOptionalParams,
  NetworkToNetworkInterconnectsGetResponse,
  NetworkToNetworkInterconnectPatch,
  NetworkToNetworkInterconnectsUpdateOptionalParams,
  NetworkToNetworkInterconnectsUpdateResponse,
  NetworkToNetworkInterconnectsDeleteOptionalParams,
  UpdateAdministrativeState,
  NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOptionalParams,
  NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse,
  NetworkToNetworkInterconnectsUpdateAdministrativeStateOptionalParams,
  NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkToNetworkInterconnects. */
export interface NetworkToNetworkInterconnects {
  /**
   * Implements Network To Network Interconnects list by Network Fabric GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param options The options parameters.
   */
  listByNetworkFabric(
    resourceGroupName: string,
    networkFabricName: string,
    options?: NetworkToNetworkInterconnectsListByNetworkFabricOptionalParams
  ): PagedAsyncIterableIterator<NetworkToNetworkInterconnect>;
  /**
   * Configuration used to setup CE-PE connectivity PUT Method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnect,
    options?: NetworkToNetworkInterconnectsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkToNetworkInterconnectsCreateResponse>,
      NetworkToNetworkInterconnectsCreateResponse
    >
  >;
  /**
   * Configuration used to setup CE-PE connectivity PUT Method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnect,
    options?: NetworkToNetworkInterconnectsCreateOptionalParams
  ): Promise<NetworkToNetworkInterconnectsCreateResponse>;
  /**
   * Implements NetworkToNetworkInterconnects GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    options?: NetworkToNetworkInterconnectsGetOptionalParams
  ): Promise<NetworkToNetworkInterconnectsGetResponse>;
  /**
   * Update certain properties of the Network To NetworkInterconnects resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Network to Network Interconnect properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnectPatch,
    options?: NetworkToNetworkInterconnectsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkToNetworkInterconnectsUpdateResponse>,
      NetworkToNetworkInterconnectsUpdateResponse
    >
  >;
  /**
   * Update certain properties of the Network To NetworkInterconnects resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Network to Network Interconnect properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: NetworkToNetworkInterconnectPatch,
    options?: NetworkToNetworkInterconnectsUpdateOptionalParams
  ): Promise<NetworkToNetworkInterconnectsUpdateResponse>;
  /**
   * Implements NetworkToNetworkInterconnects DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    options?: NetworkToNetworkInterconnectsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Implements NetworkToNetworkInterconnects DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    options?: NetworkToNetworkInterconnectsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates the NPB Static Route BFD Administrative State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateNpbStaticRouteBfdAdministrativeState(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse
      >,
      NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse
    >
  >;
  /**
   * Updates the NPB Static Route BFD Administrative State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateNpbStaticRouteBfdAdministrativeStateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOptionalParams
  ): Promise<
    NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateResponse
  >;
  /**
   * Updates the Admin State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeState(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse
      >,
      NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse
    >
  >;
  /**
   * Updates the Admin State.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkFabricName Name of the Network Fabric.
   * @param networkToNetworkInterconnectName Name of the Network to Network Interconnect.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    networkFabricName: string,
    networkToNetworkInterconnectName: string,
    body: UpdateAdministrativeState,
    options?: NetworkToNetworkInterconnectsUpdateAdministrativeStateOptionalParams
  ): Promise<NetworkToNetworkInterconnectsUpdateAdministrativeStateResponse>;
}
