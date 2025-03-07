/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ContentKeyPolicy,
  ContentKeyPoliciesListOptionalParams,
  ContentKeyPoliciesGetOptionalParams,
  ContentKeyPoliciesGetResponse,
  ContentKeyPoliciesCreateOrUpdateOptionalParams,
  ContentKeyPoliciesCreateOrUpdateResponse,
  ContentKeyPoliciesDeleteOptionalParams,
  ContentKeyPoliciesUpdateOptionalParams,
  ContentKeyPoliciesUpdateResponse,
  ContentKeyPoliciesGetPolicyPropertiesWithSecretsOptionalParams,
  ContentKeyPoliciesGetPolicyPropertiesWithSecretsResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ContentKeyPolicies. */
export interface ContentKeyPolicies {
  /**
   * Lists the Content Key Policies in the account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: ContentKeyPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<ContentKeyPolicy>;
  /**
   * Get the details of a Content Key Policy in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    contentKeyPolicyName: string,
    options?: ContentKeyPoliciesGetOptionalParams
  ): Promise<ContentKeyPoliciesGetResponse>;
  /**
   * Create or update a Content Key Policy in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    contentKeyPolicyName: string,
    parameters: ContentKeyPolicy,
    options?: ContentKeyPoliciesCreateOrUpdateOptionalParams
  ): Promise<ContentKeyPoliciesCreateOrUpdateResponse>;
  /**
   * Deletes a Content Key Policy in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    contentKeyPolicyName: string,
    options?: ContentKeyPoliciesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an existing Content Key Policy in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    contentKeyPolicyName: string,
    parameters: ContentKeyPolicy,
    options?: ContentKeyPoliciesUpdateOptionalParams
  ): Promise<ContentKeyPoliciesUpdateResponse>;
  /**
   * Get a Content Key Policy including secret values
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param contentKeyPolicyName The Content Key Policy name.
   * @param options The options parameters.
   */
  getPolicyPropertiesWithSecrets(
    resourceGroupName: string,
    accountName: string,
    contentKeyPolicyName: string,
    options?: ContentKeyPoliciesGetPolicyPropertiesWithSecretsOptionalParams
  ): Promise<ContentKeyPoliciesGetPolicyPropertiesWithSecretsResponse>;
}
