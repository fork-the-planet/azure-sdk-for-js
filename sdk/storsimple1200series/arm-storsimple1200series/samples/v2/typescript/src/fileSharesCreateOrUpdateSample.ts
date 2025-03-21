/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  FileShare,
  StorSimpleManagementClient
} from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the file share.
 *
 * @summary Creates or updates the file share.
 * x-ms-original-file: specification/storsimple1200series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/FileSharesCreateOrUpdate.json
 */
async function fileSharesCreateOrUpdate(): Promise<void> {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const deviceName = "HSDK-4XY4FI2IVG";
  const fileServerName = "HSDK-4XY4FI2IVG";
  const shareName = "Auto-TestFileShare1";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const fileShare: FileShare = {
    name: "Auto-TestFileShare1",
    description: "Demo FileShare for SDK Test Tiered",
    adminUser: "fareast\\idcdlslb",
    dataPolicy: "Tiered",
    monitoringStatus: "Enabled",
    provisionedCapacityInBytes: 536870912000,
    shareStatus: "Online"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.fileShares.beginCreateOrUpdateAndWait(
    deviceName,
    fileServerName,
    shareName,
    resourceGroupName,
    managerName,
    fileShare
  );
  console.log(result);
}

fileSharesCreateOrUpdate().catch(console.error);
