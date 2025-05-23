/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { IncidentComment } from "@azure/arm-securityinsight";
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates the incident comment.
 *
 * @summary Creates or updates the incident comment.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-09-01-preview/examples/incidents/comments/CreateIncidentComment.json
 */
async function createsOrUpdatesAnIncidentComment(): Promise<void> {
  const subscriptionId =
    process.env["SECURITYINSIGHT_SUBSCRIPTION_ID"] || "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = process.env["SECURITYINSIGHT_RESOURCE_GROUP"] || "myRg";
  const workspaceName = "myWorkspace";
  const incidentId = "73e01a99-5cd7-4139-a149-9f2736ff2ab5";
  const incidentCommentId = "4bb36b7b-26ff-4d1c-9cbe-0d8ab3da0014";
  const incidentComment: IncidentComment = { message: "Some message" };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.incidentComments.createOrUpdate(
    resourceGroupName,
    workspaceName,
    incidentId,
    incidentCommentId,
    incidentComment,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesAnIncidentComment();
}

main().catch(console.error);
