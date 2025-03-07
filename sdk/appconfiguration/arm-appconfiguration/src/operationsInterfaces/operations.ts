/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OperationDefinition,
  OperationsListOptionalParams,
  CheckNameAvailabilityParameters,
  OperationsCheckNameAvailabilityOptionalParams,
  OperationsCheckNameAvailabilityResponse,
  OperationsRegionalCheckNameAvailabilityOptionalParams,
  OperationsRegionalCheckNameAvailabilityResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists the operations available from this provider.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams,
  ): PagedAsyncIterableIterator<OperationDefinition>;
  /**
   * Checks whether the configuration store name is available for use.
   * @param checkNameAvailabilityParameters The object containing information for the availability
   *                                        request.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityParameters: CheckNameAvailabilityParameters,
    options?: OperationsCheckNameAvailabilityOptionalParams,
  ): Promise<OperationsCheckNameAvailabilityResponse>;
  /**
   * Checks whether the configuration store name is available for use.
   * @param location The location in which uniqueness will be verified.
   * @param checkNameAvailabilityParameters The object containing information for the availability
   *                                        request.
   * @param options The options parameters.
   */
  regionalCheckNameAvailability(
    location: string,
    checkNameAvailabilityParameters: CheckNameAvailabilityParameters,
    options?: OperationsRegionalCheckNameAvailabilityOptionalParams,
  ): Promise<OperationsRegionalCheckNameAvailabilityResponse>;
}
