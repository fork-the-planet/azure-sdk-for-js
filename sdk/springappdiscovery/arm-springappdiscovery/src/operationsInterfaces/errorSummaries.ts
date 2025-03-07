/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ErrorSummary,
  ErrorSummariesListBySiteOptionalParams,
  ErrorSummariesGetOptionalParams,
  ErrorSummariesGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ErrorSummaries. */
export interface ErrorSummaries {
  /**
   * Lists the ErrorSummaries resource in springbootsites.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The springbootsites name.
   * @param options The options parameters.
   */
  listBySite(
    resourceGroupName: string,
    siteName: string,
    options?: ErrorSummariesListBySiteOptionalParams,
  ): PagedAsyncIterableIterator<ErrorSummary>;
  /**
   * Gets the ErrorSummaries resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The springbootsites name.
   * @param errorSummaryName The name of error summary
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    siteName: string,
    errorSummaryName: string,
    options?: ErrorSummariesGetOptionalParams,
  ): Promise<ErrorSummariesGetResponse>;
}
