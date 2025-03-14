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
  PrivateCloud,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsListOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsGetResponse,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsCreateOrUpdateResponse,
  PrivateCloudUpdate,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsUpdateResponse,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
  PrivateCloudsListAdminCredentialsResponse,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsRotateNsxtPasswordResponse,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsRotateVcenterPasswordResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateClouds. */
export interface PrivateClouds {
  /**
   * List PrivateCloud resources by subscription ID
   * @param options The options parameters.
   */
  listInSubscription(
    options?: PrivateCloudsListInSubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<PrivateCloud>;
  /**
   * List PrivateCloud resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: PrivateCloudsListOptionalParams,
  ): PagedAsyncIterableIterator<PrivateCloud>;
  /**
   * Get a PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsGetOptionalParams,
  ): Promise<PrivateCloudsGetResponse>;
  /**
   * Create a PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloud Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    privateCloud: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsCreateOrUpdateResponse>,
      PrivateCloudsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloud Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    privateCloud: PrivateCloud,
    options?: PrivateCloudsCreateOrUpdateOptionalParams,
  ): Promise<PrivateCloudsCreateOrUpdateResponse>;
  /**
   * Update a PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloudUpdate The private cloud properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    privateCloudUpdate: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsUpdateResponse>,
      PrivateCloudsUpdateResponse
    >
  >;
  /**
   * Update a PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloudUpdate The private cloud properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    privateCloudUpdate: PrivateCloudUpdate,
    options?: PrivateCloudsUpdateOptionalParams,
  ): Promise<PrivateCloudsUpdateResponse>;
  /**
   * Delete a PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a PrivateCloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * List the admin credentials for the private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  listAdminCredentials(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsListAdminCredentialsOptionalParams,
  ): Promise<PrivateCloudsListAdminCredentialsResponse>;
  /**
   * Rotate the NSX-T Manager password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginRotateNsxtPassword(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsRotateNsxtPasswordResponse>,
      PrivateCloudsRotateNsxtPasswordResponse
    >
  >;
  /**
   * Rotate the NSX-T Manager password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginRotateNsxtPasswordAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateNsxtPasswordOptionalParams,
  ): Promise<PrivateCloudsRotateNsxtPasswordResponse>;
  /**
   * Rotate the vCenter password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginRotateVcenterPassword(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateCloudsRotateVcenterPasswordResponse>,
      PrivateCloudsRotateVcenterPasswordResponse
    >
  >;
  /**
   * Rotate the vCenter password
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  beginRotateVcenterPasswordAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    options?: PrivateCloudsRotateVcenterPasswordOptionalParams,
  ): Promise<PrivateCloudsRotateVcenterPasswordResponse>;
}
