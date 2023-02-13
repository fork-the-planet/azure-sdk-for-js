/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a deleted sql pool that can be restored
 *
 * @summary Gets a deleted sql pool that can be restored
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/RestorableDroppedSqlPoolGet.json
 */
async function getARestorableDroppedSqlPool() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "restorabledroppeddatabasetest-1257";
  const workspaceName = "restorabledroppeddatabasetest-2389";
  const restorableDroppedSqlPoolId = "restorabledroppeddatabasetest-7654,131403269876900000";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.restorableDroppedSqlPools.get(
    resourceGroupName,
    workspaceName,
    restorableDroppedSqlPoolId
  );
  console.log(result);
}

async function main() {
  getARestorableDroppedSqlPool();
}

main().catch(console.error);