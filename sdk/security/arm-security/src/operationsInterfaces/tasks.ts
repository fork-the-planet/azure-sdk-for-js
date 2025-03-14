/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SecurityTask,
  TasksListOptionalParams,
  TasksListByHomeRegionOptionalParams,
  TasksListByResourceGroupOptionalParams,
  TasksGetSubscriptionLevelTaskOptionalParams,
  TasksGetSubscriptionLevelTaskResponse,
  TaskUpdateActionType,
  TasksUpdateSubscriptionLevelTaskStateOptionalParams,
  TasksGetResourceGroupLevelTaskOptionalParams,
  TasksGetResourceGroupLevelTaskResponse,
  TasksUpdateResourceGroupLevelTaskStateOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Tasks. */
export interface Tasks {
  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param options The options parameters.
   */
  list(
    options?: TasksListOptionalParams,
  ): PagedAsyncIterableIterator<SecurityTask>;
  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  listByHomeRegion(
    ascLocation: string,
    options?: TasksListByHomeRegionOptionalParams,
  ): PagedAsyncIterableIterator<SecurityTask>;
  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    ascLocation: string,
    options?: TasksListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<SecurityTask>;
  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param options The options parameters.
   */
  getSubscriptionLevelTask(
    ascLocation: string,
    taskName: string,
    options?: TasksGetSubscriptionLevelTaskOptionalParams,
  ): Promise<TasksGetSubscriptionLevelTaskResponse>;
  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param taskUpdateActionType Type of the action to do on the task
   * @param options The options parameters.
   */
  updateSubscriptionLevelTaskState(
    ascLocation: string,
    taskName: string,
    taskUpdateActionType: TaskUpdateActionType,
    options?: TasksUpdateSubscriptionLevelTaskStateOptionalParams,
  ): Promise<void>;
  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param options The options parameters.
   */
  getResourceGroupLevelTask(
    resourceGroupName: string,
    ascLocation: string,
    taskName: string,
    options?: TasksGetResourceGroupLevelTaskOptionalParams,
  ): Promise<TasksGetResourceGroupLevelTaskResponse>;
  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param taskUpdateActionType Type of the action to do on the task
   * @param options The options parameters.
   */
  updateResourceGroupLevelTaskState(
    resourceGroupName: string,
    ascLocation: string,
    taskName: string,
    taskUpdateActionType: TaskUpdateActionType,
    options?: TasksUpdateResourceGroupLevelTaskStateOptionalParams,
  ): Promise<void>;
}
