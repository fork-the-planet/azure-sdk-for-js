/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Disables sensitivity recommendations on a given column
 *
 * @summary Disables sensitivity recommendations on a given column
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/RecommendedColumnSensitivityLabelDisable.json
 */
async function disablesSensitivityRecommendationsOnAGivenColumn(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "myRG";
  const workspaceName = "myServer";
  const sqlPoolName = "myDatabase";
  const schemaName = "dbo";
  const tableName = "myTable";
  const columnName = "myColumn";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolSensitivityLabels.disableRecommendation(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    schemaName,
    tableName,
    columnName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await disablesSensitivityRecommendationsOnAGivenColumn();
}

main().catch(console.error);
