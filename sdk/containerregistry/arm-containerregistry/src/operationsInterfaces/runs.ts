/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Run,
  RunsListOptionalParams,
  RunsGetOptionalParams,
  RunsGetResponse,
  RunUpdateParameters,
  RunsUpdateOptionalParams,
  RunsUpdateResponse,
  RunsGetLogSasUrlOptionalParams,
  RunsGetLogSasUrlResponse,
  RunsCancelOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Runs. */
export interface Runs {
  /**
   * Gets all the runs for a registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    options?: RunsListOptionalParams,
  ): PagedAsyncIterableIterator<Run>;
  /**
   * Gets the detailed information for a given run.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    options?: RunsGetOptionalParams,
  ): Promise<RunsGetResponse>;
  /**
   * Patch the run properties.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param runUpdateParameters The run update properties.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    runUpdateParameters: RunUpdateParameters,
    options?: RunsUpdateOptionalParams,
  ): Promise<RunsUpdateResponse>;
  /**
   * Gets a link to download the run logs.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param options The options parameters.
   */
  getLogSasUrl(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    options?: RunsGetLogSasUrlOptionalParams,
  ): Promise<RunsGetLogSasUrlResponse>;
  /**
   * Cancel an existing run.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runId The run ID.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    registryName: string,
    runId: string,
    options?: RunsCancelOptionalParams,
  ): Promise<void>;
}
