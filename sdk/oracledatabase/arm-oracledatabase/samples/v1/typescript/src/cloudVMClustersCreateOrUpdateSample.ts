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
  CloudVmCluster,
  OracleDatabaseManagementClient,
} from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a CloudVmCluster
 *
 * @summary Create a CloudVmCluster
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/vmClusters_create.json
 */
async function createVMCluster(): Promise<void> {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const cloudvmclustername = "cluster1";
  const resource: CloudVmCluster = {
    location: "eastus",
    properties: {
      backupSubnetCidr: "172.17.5.0/24",
      cloudExadataInfrastructureId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Oracle.Database/cloudExadataInfrastructures/infra1",
      clusterName: "cluster1",
      cpuCoreCount: 2,
      dataCollectionOptions: {
        isDiagnosticsEventsEnabled: false,
        isHealthMonitoringEnabled: false,
        isIncidentLogsEnabled: false,
      },
      dataStoragePercentage: 100,
      dataStorageSizeInTbs: 1000,
      dbNodeStorageSizeInGbs: 1000,
      dbServers: ["ocid1..aaaa"],
      displayName: "cluster 1",
      domain: "domain1",
      giVersion: "19.0.0.0",
      hostname: "hostname1",
      isLocalBackupEnabled: false,
      isSparseDiskgroupEnabled: false,
      licenseModel: "LicenseIncluded",
      memorySizeInGbs: 1000,
      nsgCidrs: [
        {
          destinationPortRange: { max: 1522, min: 1520 },
          source: "10.0.0.0/16",
        },
        { source: "10.10.0.0/24" },
      ],
      ocpuCount: 3,
      scanListenerPortTcp: 1050,
      scanListenerPortTcpSsl: 1025,
      sshPublicKeys: ["ssh-key 1"],
      subnetId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1",
      timeZone: "UTC",
      vnetId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1",
    },
    tags: { tagK1: "tagV1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.cloudVmClusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cloudvmclustername,
    resource,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createVMCluster();
}

main().catch(console.error);
