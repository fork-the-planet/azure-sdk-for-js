/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Endpoints } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HybridConnectivityManagementAPI } from "../hybridConnectivityManagementAPI.js";
import {
  EndpointResource,
  EndpointsListNextOptionalParams,
  EndpointsListOptionalParams,
  EndpointsListResponse,
  EndpointsGetOptionalParams,
  EndpointsGetResponse,
  EndpointsCreateOrUpdateOptionalParams,
  EndpointsCreateOrUpdateResponse,
  EndpointsUpdateOptionalParams,
  EndpointsUpdateResponse,
  EndpointsDeleteOptionalParams,
  EndpointsListCredentialsOptionalParams,
  EndpointsListCredentialsResponse,
  EndpointsListIngressGatewayCredentialsOptionalParams,
  EndpointsListIngressGatewayCredentialsResponse,
  ManagedProxyRequest,
  EndpointsListManagedProxyDetailsOptionalParams,
  EndpointsListManagedProxyDetailsResponse,
  EndpointsListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Endpoints operations. */
export class EndpointsImpl implements Endpoints {
  private readonly client: HybridConnectivityManagementAPI;

  /**
   * Initialize a new instance of the class Endpoints class.
   * @param client Reference to the service client
   */
  constructor(client: HybridConnectivityManagementAPI) {
    this.client = client;
  }

  /**
   * List of endpoints to the target resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: EndpointsListOptionalParams
  ): PagedAsyncIterableIterator<EndpointResource> {
    const iter = this.listPagingAll(resourceUri, options);
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
        return this.listPagingPage(resourceUri, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: EndpointsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EndpointResource[]> {
    let result: EndpointsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: EndpointsListOptionalParams
  ): AsyncIterableIterator<EndpointResource> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * List of endpoints to the target resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: EndpointsListOptionalParams
  ): Promise<EndpointsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }

  /**
   * Gets the endpoint to the resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    endpointName: string,
    options?: EndpointsGetOptionalParams
  ): Promise<EndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, endpointName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the endpoint to the target resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param endpointResource Endpoint details
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceUri: string,
    endpointName: string,
    endpointResource: EndpointResource,
    options?: EndpointsCreateOrUpdateOptionalParams
  ): Promise<EndpointsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, endpointName, endpointResource, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update the endpoint to the target resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param endpointResource Endpoint details
   * @param options The options parameters.
   */
  update(
    resourceUri: string,
    endpointName: string,
    endpointResource: EndpointResource,
    options?: EndpointsUpdateOptionalParams
  ): Promise<EndpointsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, endpointName, endpointResource, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes the endpoint access to the target resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    endpointName: string,
    options?: EndpointsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceUri, endpointName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the endpoint access credentials to the resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param options The options parameters.
   */
  listCredentials(
    resourceUri: string,
    endpointName: string,
    options?: EndpointsListCredentialsOptionalParams
  ): Promise<EndpointsListCredentialsResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, endpointName, options },
      listCredentialsOperationSpec
    );
  }

  /**
   * Gets the ingress gateway endpoint credentials
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param options The options parameters.
   */
  listIngressGatewayCredentials(
    resourceUri: string,
    endpointName: string,
    options?: EndpointsListIngressGatewayCredentialsOptionalParams
  ): Promise<EndpointsListIngressGatewayCredentialsResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, endpointName, options },
      listIngressGatewayCredentialsOperationSpec
    );
  }

  /**
   * Fetches the managed proxy details
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param endpointName The endpoint name.
   * @param managedProxyRequest Object of type ManagedProxyRequest
   * @param options The options parameters.
   */
  listManagedProxyDetails(
    resourceUri: string,
    endpointName: string,
    managedProxyRequest: ManagedProxyRequest,
    options?: EndpointsListManagedProxyDetailsOptionalParams
  ): Promise<EndpointsListManagedProxyDetailsResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, endpointName, managedProxyRequest, options },
      listManagedProxyDetailsOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: EndpointsListNextOptionalParams
  ): Promise<EndpointsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.endpointResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.endpointResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listCredentialsOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/listCredentials",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointAccessResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.listCredentialsRequest,
  queryParameters: [Parameters.apiVersion, Parameters.expiresin],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listIngressGatewayCredentialsOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/listIngressGatewayCredentials",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IngressGatewayResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.listIngressGatewayCredentialsRequest,
  queryParameters: [Parameters.apiVersion, Parameters.expiresin],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listManagedProxyDetailsOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.HybridConnectivity/endpoints/{endpointName}/listManagedProxyDetails",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedProxyResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.managedProxyRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceUri
  ],
  headerParameters: [Parameters.accept],
  serializer
};
