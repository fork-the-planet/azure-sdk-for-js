// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const createComputeManagementClient = require("@azure-rest/arm-compute").default;
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a community gallery by gallery public name.
 *
 * @summary Get a community gallery by gallery public name.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2022-01-03/examples/communityGalleryExamples/CommunityGallery_Get.json
 */
async function getACommunityGallery() {
  const credential = new DefaultAzureCredential();
  const client = createComputeManagementClient(credential);
  const subscriptionId = "";
  const location = "myLocation";
  const publicGalleryName = "publicGalleryName";
  const options = {
    queryParameters: { "api-version": "2022-01-03" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}",
      subscriptionId,
      location,
      publicGalleryName,
    )
    .get(options);
  console.log(result);
}

getACommunityGallery().catch(console.error);
