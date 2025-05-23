/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  PolicyRestrictionValidationsByServiceOptionalParams,
  PolicyRestrictionValidationsByServiceResponse,
} from "../models/index.js";

/** Interface representing a PolicyRestrictionValidations. */
export interface PolicyRestrictionValidations {
  /**
   * Validate all policies of API Management services.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  beginByService(
    resourceGroupName: string,
    serviceName: string,
    options?: PolicyRestrictionValidationsByServiceOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PolicyRestrictionValidationsByServiceResponse>,
      PolicyRestrictionValidationsByServiceResponse
    >
  >;
  /**
   * Validate all policies of API Management services.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  beginByServiceAndWait(
    resourceGroupName: string,
    serviceName: string,
    options?: PolicyRestrictionValidationsByServiceOptionalParams,
  ): Promise<PolicyRestrictionValidationsByServiceResponse>;
}
