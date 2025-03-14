/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SecretResourceDescription,
  SecretListByResourceGroupOptionalParams,
  SecretListBySubscriptionOptionalParams,
  SecretCreateOptionalParams,
  SecretCreateResponse,
  SecretGetOptionalParams,
  SecretGetResponse,
  SecretDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Secret. */
export interface Secret {
  /**
   * Gets the information about all secret resources in a given resource group. The information include
   * the description and other properties of the Secret.
   * @param resourceGroupName Azure resource group name
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SecretListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SecretResourceDescription>;
  /**
   * Gets the information about all secret resources in a given resource group. The information include
   * the description and other properties of the secret.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SecretListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SecretResourceDescription>;
  /**
   * Creates a secret resource with the specified name, description and properties. If a secret resource
   * with the same name exists, then it is updated with the specified description and properties.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretResourceDescription Description for creating a secret resource.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    secretResourceName: string,
    secretResourceDescription: SecretResourceDescription,
    options?: SecretCreateOptionalParams
  ): Promise<SecretCreateResponse>;
  /**
   * Gets the information about the secret resource with the given name. The information include the
   * description and other properties of the secret.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    secretResourceName: string,
    options?: SecretGetOptionalParams
  ): Promise<SecretGetResponse>;
  /**
   * Deletes the secret resource identified by the name.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    secretResourceName: string,
    options?: SecretDeleteOptionalParams
  ): Promise<void>;
}
