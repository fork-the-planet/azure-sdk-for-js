/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { VpnSites } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  VpnSite,
  VpnSitesListByResourceGroupNextOptionalParams,
  VpnSitesListByResourceGroupOptionalParams,
  VpnSitesListByResourceGroupResponse,
  VpnSitesListNextOptionalParams,
  VpnSitesListOptionalParams,
  VpnSitesListResponse,
  VpnSitesGetOptionalParams,
  VpnSitesGetResponse,
  VpnSitesCreateOrUpdateOptionalParams,
  VpnSitesCreateOrUpdateResponse,
  TagsObject,
  VpnSitesUpdateTagsOptionalParams,
  VpnSitesUpdateTagsResponse,
  VpnSitesDeleteOptionalParams,
  VpnSitesListByResourceGroupNextResponse,
  VpnSitesListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing VpnSites operations. */
export class VpnSitesImpl implements VpnSites {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VpnSites class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the vpnSites in a resource group.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: VpnSitesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<VpnSite> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: VpnSitesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VpnSite[]> {
    let result: VpnSitesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: VpnSitesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<VpnSite> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the VpnSites in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: VpnSitesListOptionalParams,
  ): PagedAsyncIterableIterator<VpnSite> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: VpnSitesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VpnSite[]> {
    let result: VpnSitesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: VpnSitesListOptionalParams,
  ): AsyncIterableIterator<VpnSite> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves the details of a VPN site.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vpnSiteName: string,
    options?: VpnSitesGetOptionalParams,
  ): Promise<VpnSitesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vpnSiteName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being created or updated.
   * @param vpnSiteParameters Parameters supplied to create or update VpnSite.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vpnSiteName: string,
    vpnSiteParameters: VpnSite,
    options?: VpnSitesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VpnSitesCreateOrUpdateResponse>,
      VpnSitesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VpnSitesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, vpnSiteName, vpnSiteParameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      VpnSitesCreateOrUpdateResponse,
      OperationState<VpnSitesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being created or updated.
   * @param vpnSiteParameters Parameters supplied to create or update VpnSite.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vpnSiteName: string,
    vpnSiteParameters: VpnSite,
    options?: VpnSitesCreateOrUpdateOptionalParams,
  ): Promise<VpnSitesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vpnSiteName,
      vpnSiteParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates VpnSite tags.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being updated.
   * @param vpnSiteParameters Parameters supplied to update VpnSite tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    vpnSiteName: string,
    vpnSiteParameters: TagsObject,
    options?: VpnSitesUpdateTagsOptionalParams,
  ): Promise<VpnSitesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vpnSiteName, vpnSiteParameters, options },
      updateTagsOperationSpec,
    );
  }

  /**
   * Deletes a VpnSite.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being deleted.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vpnSiteName: string,
    options?: VpnSitesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, vpnSiteName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a VpnSite.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being deleted.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vpnSiteName: string,
    options?: VpnSitesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vpnSiteName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the vpnSites in a resource group.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: VpnSitesListByResourceGroupOptionalParams,
  ): Promise<VpnSitesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Lists all the VpnSites in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: VpnSitesListOptionalParams,
  ): Promise<VpnSitesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VpnSitesListByResourceGroupNextOptionalParams,
  ): Promise<VpnSitesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: VpnSitesListNextOptionalParams,
  ): Promise<VpnSitesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VpnSite,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vpnSiteName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VpnSite,
    },
    201: {
      bodyMapper: Mappers.VpnSite,
    },
    202: {
      bodyMapper: Mappers.VpnSite,
    },
    204: {
      bodyMapper: Mappers.VpnSite,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.vpnSiteParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vpnSiteName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VpnSite,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.vpnSiteParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vpnSiteName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vpnSiteName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSitesResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSitesResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSitesResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSitesResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
