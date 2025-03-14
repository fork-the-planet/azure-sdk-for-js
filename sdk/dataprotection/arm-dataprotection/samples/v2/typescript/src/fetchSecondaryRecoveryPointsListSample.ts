/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  FetchSecondaryRPsRequestParameters,
  DataProtectionClient,
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns a list of Secondary Recovery Points for a DataSource in a vault, that can be used for Cross Region Restore.
 *
 * @summary Returns a list of Secondary Recovery Points for a DataSource in a vault, that can be used for Cross Region Restore.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2024-04-01/examples/CrossRegionRestore/FetchSecondaryRPs.json
 */
async function fetchSecondaryRPs(): Promise<void> {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "000pikumar";
  const location = "WestUS";
  const parameters: FetchSecondaryRPsRequestParameters = {
    sourceBackupInstanceId:
      "/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/HelloTest/providers/Microsoft.DataProtection/backupVaults/HelloTestVault/backupInstances/653213d-c5b3-44f6-a0d9-db3c4f9d8e34",
    sourceRegion: "EastUS",
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fetchSecondaryRecoveryPoints.list(
    resourceGroupName,
    location,
    parameters,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  fetchSecondaryRPs();
}

main().catch(console.error);
