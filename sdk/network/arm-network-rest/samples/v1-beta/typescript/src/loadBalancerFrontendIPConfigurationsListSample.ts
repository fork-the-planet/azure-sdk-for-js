// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createNetworkManagementClient, {
  LoadBalancerFrontendIPConfigurationsListParameters,
  paginate,
} from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets all the load balancer frontend IP configurations.
 *
 * @summary Gets all the load balancer frontend IP configurations.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/LoadBalancerFrontendIPConfigurationList.json
 */
async function loadBalancerFrontendIPConfigurationList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const options: LoadBalancerFrontendIPConfigurationsListParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/frontendIPConfigurations",
      subscriptionId,
      resourceGroupName,
      loadBalancerName,
    )
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

loadBalancerFrontendIPConfigurationList().catch(console.error);
