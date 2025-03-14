/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { CostManagementClient } from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a URL to download the current month's pricesheet for a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.Due to Azure product growth, the Azure price sheet download experience in this preview version will be updated from a single csv file to a Zip file containing multiple csv files, each with max 200k records.
 *
 * @summary Gets a URL to download the current month's pricesheet for a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.Due to Azure product growth, the Azure price sheet download experience in this preview version will be updated from a single csv file to a Zip file containing multiple csv files, each with max 200k records.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/PricesheetDownloadByBillingProfile.json
 */
async function pricesheetDownloadByBillingProfile(): Promise<void> {
  const billingAccountName =
    "7c05a543-80ff-571e-9f98-1063b3b53cf2:99ad03ad-2d1b-4889-a452-090ad407d25f_2019-05-31";
  const billingProfileName = "2USN-TPCD-BG7-TGB";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.priceSheet.beginDownloadByBillingProfileAndWait(
    billingAccountName,
    billingProfileName
  );
  console.log(result);
}

async function main(): Promise<void> {
  pricesheetDownloadByBillingProfile();
}

main().catch(console.error);
