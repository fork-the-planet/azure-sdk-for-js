/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { RecordAllDecisionsProperties } from "@azure/arm-authorization";
import { AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to An action to approve/deny all decisions for a review with certain filters.
 *
 * @summary An action to approve/deny all decisions for a review with certain filters.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2021-12-01-preview/examples/AccessReviewInstanceRecordAllDecisions.json
 */
async function accessReviewInstanceRecordAllDecisions(): Promise<void> {
  const scope = "subscriptions/fa73e90b-5bf1-45fd-a182-35ce5fc0674d";
  const scheduleDefinitionId = "fa73e90b-5bf1-45fd-a182-35ce5fc0674d";
  const id = "d9b9e056-7004-470b-bf21-1635e98487da";
  const properties: RecordAllDecisionsProperties = {};
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.scopeAccessReviewInstance.recordAllDecisions(
    scope,
    scheduleDefinitionId,
    id,
    properties,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await accessReviewInstanceRecordAllDecisions();
}

main().catch(console.error);
