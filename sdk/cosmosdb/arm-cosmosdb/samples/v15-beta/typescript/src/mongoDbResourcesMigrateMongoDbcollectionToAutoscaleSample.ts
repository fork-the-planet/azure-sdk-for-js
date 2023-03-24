/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB MongoDB collection from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB MongoDB collection from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-11-15-preview/examples/CosmosDBMongoDBCollectionMigrateToAutoscale.json
 */
async function cosmosDbMongoDbcollectionMigrateToAutoscale() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoDBResources.beginMigrateMongoDBCollectionToAutoscaleAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    collectionName
  );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbcollectionMigrateToAutoscale();
}

main().catch(console.error);