/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a PrefixListGlobalRulestackResource
 *
 * @summary Get a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PrefixListGlobalRulestack_Get_MaximumSet_Gen.json
 */
async function prefixListGlobalRulestackGetMaximumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.prefixListGlobalRulestack.get(
    globalRulestackName,
    name
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Get a PrefixListGlobalRulestackResource
 *
 * @summary Get a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PrefixListGlobalRulestack_Get_MinimumSet_Gen.json
 */
async function prefixListGlobalRulestackGetMinimumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.prefixListGlobalRulestack.get(
    globalRulestackName,
    name
  );
  console.log(result);
}

async function main(): Promise<void> {
  prefixListGlobalRulestackGetMaximumSetGen();
  prefixListGlobalRulestackGetMinimumSetGen();
}

main().catch(console.error);
