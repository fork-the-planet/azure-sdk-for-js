/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EventData, TenantActivityLogsListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TenantActivityLogs. */
export interface TenantActivityLogs {
  /**
   * Gets the Activity Logs for the Tenant.<br>Everything that is applicable to the API to get the
   * Activity Logs for the subscription is applicable to this API (the parameters, $filter, etc.).<br>One
   * thing to point out here is that this API does *not* retrieve the logs at the individual subscription
   * of the tenant but only surfaces the logs that were generated at the tenant level.
   * @param options The options parameters.
   */
  list(
    options?: TenantActivityLogsListOptionalParams,
  ): PagedAsyncIterableIterator<EventData>;
}
