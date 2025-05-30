/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageImportExport } from "@azure/arm-storageimportexport";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes an existing job. Only jobs in the Creating or Completed states can be deleted.
 *
 * @summary Deletes an existing job. Only jobs in the Creating or Completed states can be deleted.
 * x-ms-original-file: specification/storageimportexport/resource-manager/Microsoft.ImportExport/preview/2021-01-01/examples/DeleteJob.json
 */
async function deleteJob(): Promise<void> {
  const subscriptionId =
    process.env["STORAGEIMPORTEXPORT_SUBSCRIPTION_ID"] ||
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
  const jobName = "myJob";
  const resourceGroupName =
    process.env["STORAGEIMPORTEXPORT_RESOURCE_GROUP"] || "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new StorageImportExport(credential, subscriptionId);
  const result = await client.jobs.delete(jobName, resourceGroupName);
  console.log(result);
}

async function main(): Promise<void> {
  deleteJob();
}

main().catch(console.error);
