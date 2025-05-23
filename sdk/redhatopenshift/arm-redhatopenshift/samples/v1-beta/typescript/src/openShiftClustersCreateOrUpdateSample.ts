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
  OpenShiftCluster,
  AzureRedHatOpenShiftClient,
} from "@azure/arm-redhatopenshift";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation returns properties of a OpenShift cluster.
 *
 * @summary The operation returns properties of a OpenShift cluster.
 * x-ms-original-file: specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/openshiftclusters/stable/2023-11-22/examples/OpenShiftClusters_CreateOrUpdate.json
 */
async function createsOrUpdatesAOpenShiftClusterWithTheSpecifiedSubscriptionResourceGroupAndResourceName(): Promise<void> {
  const subscriptionId =
    process.env["REDHATOPENSHIFT_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["REDHATOPENSHIFT_RESOURCE_GROUP"] || "resourceGroup";
  const resourceName = "resourceName";
  const parameters: OpenShiftCluster = {
    apiserverProfile: { visibility: "Public" },
    clusterProfile: {
      domain: "cluster.location.aroapp.io",
      fipsValidatedModules: "Enabled",
      pullSecret:
        '{"auths":{"registry.connect.redhat.com":{"auth":""},"registry.redhat.io":{"auth":""}}}',
      resourceGroupId:
        "/subscriptions/subscriptionId/resourceGroups/clusterResourceGroup",
    },
    consoleProfile: {},
    ingressProfiles: [{ name: "default", visibility: "Public" }],
    location: "location",
    masterProfile: {
      encryptionAtHost: "Enabled",
      subnetId:
        "/subscriptions/subscriptionId/resourceGroups/vnetResourceGroup/providers/Microsoft.Network/virtualNetworks/vnet/subnets/master",
      vmSize: "Standard_D8s_v3",
    },
    networkProfile: {
      loadBalancerProfile: { managedOutboundIps: { count: 1 } },
      podCidr: "10.128.0.0/14",
      preconfiguredNSG: "Disabled",
      serviceCidr: "172.30.0.0/16",
    },
    servicePrincipalProfile: {
      clientId: "clientId",
      clientSecret: "clientSecret",
    },
    tags: { key: "value" },
    workerProfiles: [
      {
        name: "worker",
        count: 3,
        diskSizeGB: 128,
        subnetId:
          "/subscriptions/subscriptionId/resourceGroups/vnetResourceGroup/providers/Microsoft.Network/virtualNetworks/vnet/subnets/worker",
        vmSize: "Standard_D2s_v3",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureRedHatOpenShiftClient(credential, subscriptionId);
  const result = await client.openShiftClusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createsOrUpdatesAOpenShiftClusterWithTheSpecifiedSubscriptionResourceGroupAndResourceName();
}

main().catch(console.error);
