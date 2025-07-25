// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary list open file handles in a directory, showing options for paging, resuming paging, etc.
 * @azsdk-weight 70
 */

import { ShareServiceClient, StorageSharedKeyCredential } from "@azure/storage-file-share";

// Load the .env file if it exists
import "dotenv/config";

export async function main(): Promise<void> {
  // Enter your storage account name, shared key, share name, and directory name.
  // Please ensure your directory is mounted
  //   https://learn.microsoft.com/azure/storage/files/storage-how-to-use-files-windows
  //   https://learn.microsoft.com/azure/storage/files/storage-how-to-use-files-linux
  //   https://learn.microsoft.com/azure/storage/files/storage-how-to-use-files-mac
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";
  const shareName = process.env.SHARE_NAME || "";
  const dirName = process.env.DIR_NAME || "";

  if (shareName === "" || dirName === "") {
    console.warn(
      "Share/directory information not provided, but it is required to run this sample. Exiting.",
    );
    return;
  }

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only available in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  const serviceClient = new ShareServiceClient(
    `https://${account}.file.core.windows.net`,
    sharedKeyCredential,
  );

  const shareClient = serviceClient.getShareClient(shareName);
  const directoryClient = shareClient.getDirectoryClient(dirName);

  // 2. Same as the previous example
  console.log("Open File Handles:");
  for await (const handle of directoryClient.listHandles()) {
    console.log(`- ${handle.path} (${handle.clientIp}), open since ${handle.openTime}`);
  }

  // The iterator also supports iteration by page with a configurable (and optional) `maxPageSize`. Here, we use a small
  // `maxPageSize` so that the effect of paging is noticeable with a small number of open handles.

  console.log("Open File Handles (by page):");
  const maxPageSize = 2;
  let pageNumber = 1;

  for await (const page of directoryClient.listHandles().byPage({ maxPageSize })) {
    console.log(`- Page ${pageNumber++}:`);
    if (page.handleList) {
      for (const handle of page.handleList) {
        console.log(`  - ${handle.path} (${handle.clientIp}), open since ${handle.openTime}`);
      }
    }
  }

  // The paged iterator also supports resuming from a continuation token. In the following example, we use the
  // continuation token from the first iteration to resume iteration at the second page.

  console.log(`Open File Handles (by page, starting from the second page):`);
  const iter = directoryClient.listHandles().byPage({ maxPageSize });
  const result = await iter.next();

  if (result.done) {
    throw new Error("Expected at least one page of results.");
  }

  // The continuation token is an optional property of the page.
  const continuationToken = result.value.continuationToken;

  if (!continuationToken) {
    throw new Error("Expected a continuation token from the service, but one was not returned.");
  }

  const resumed = directoryClient.listHandles().byPage({ maxPageSize, continuationToken });
  pageNumber = 2;
  for await (const page of resumed) {
    console.log(`- Page ${pageNumber++}:`);
    if (page.handleList) {
      for (const handle of page.handleList) {
        console.log(`  - ${handle.path} (${handle.clientIp}), open since ${handle.openTime}`);
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
