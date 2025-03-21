// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getEnvVar, PerfTest } from "@azure-tools/test-perf";

import {
  DataLakeServiceClient,
  StorageSharedKeyCredential,
  DataLakeFileSystemClient,
  DataLakeDirectoryClient,
} from "@azure/storage-file-datalake";
import { randomUUID } from "node:crypto";
import "dotenv/config";

export abstract class StorageDFSTest<TOptions> extends PerfTest<TOptions> {
  datalakeServiceClient: DataLakeServiceClient;
  fileSystemClient: DataLakeFileSystemClient;
  directoryClient: DataLakeDirectoryClient;
  static fileSystemName = randomUUID();
  static directoryName = randomUUID();

  constructor() {
    super();
    const connectionString = getEnvVar("STORAGE_CONNECTION_STRING");
    const accountName = getValueInConnString(connectionString, "AccountName");
    const accountKey = getValueInConnString(connectionString, "AccountKey");
    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

    this.datalakeServiceClient = new DataLakeServiceClient(
      `https://${accountName}.dfs.core.windows.net`,
      sharedKeyCredential,
    );

    this.fileSystemClient = this.datalakeServiceClient.getFileSystemClient(
      StorageDFSTest.fileSystemName,
    );

    this.directoryClient = this.fileSystemClient.getDirectoryClient(StorageDFSTest.directoryName);
  }

  public async globalSetup() {
    await this.fileSystemClient.create();
    await this.directoryClient.create();
  }

  public async globalCleanup() {
    await this.fileSystemClient.delete();
  }
}

export function getValueInConnString(
  connectionString: string,
  argument: "AccountName" | "AccountKey",
) {
  const elements = connectionString.split(";");
  for (const element of elements) {
    if (element.trim().startsWith(argument)) {
      return element.trim().match(argument + "=(.*)")![1];
    }
  }
  return "";
}
