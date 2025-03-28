/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SqlPoolSchema,
  SqlPoolSchemasListOptionalParams,
  SqlPoolSchemasGetOptionalParams,
  SqlPoolSchemasGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlPoolSchemas. */
export interface SqlPoolSchemas {
  /**
   * Gets schemas of a given SQL pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSchemasListOptionalParams
  ): PagedAsyncIterableIterator<SqlPoolSchema>;
  /**
   * Get Sql Pool schema
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    schemaName: string,
    options?: SqlPoolSchemasGetOptionalParams
  ): Promise<SqlPoolSchemasGetResponse>;
}
