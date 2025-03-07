/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ServiceFabrics } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DevTestLabsClient } from "../devTestLabsClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  ServiceFabric,
  ServiceFabricsListNextOptionalParams,
  ServiceFabricsListOptionalParams,
  ServiceFabricsListResponse,
  ServiceFabricsGetOptionalParams,
  ServiceFabricsGetResponse,
  ServiceFabricsCreateOrUpdateOptionalParams,
  ServiceFabricsCreateOrUpdateResponse,
  ServiceFabricsDeleteOptionalParams,
  ServiceFabricFragment,
  ServiceFabricsUpdateOptionalParams,
  ServiceFabricsUpdateResponse,
  ServiceFabricsListApplicableSchedulesOptionalParams,
  ServiceFabricsListApplicableSchedulesResponse,
  ServiceFabricsStartOptionalParams,
  ServiceFabricsStopOptionalParams,
  ServiceFabricsListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServiceFabrics operations. */
export class ServiceFabricsImpl implements ServiceFabrics {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class ServiceFabrics class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List service fabrics in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: ServiceFabricsListOptionalParams
  ): PagedAsyncIterableIterator<ServiceFabric> {
    const iter = this.listPagingAll(
      resourceGroupName,
      labName,
      userName,
      options
    );
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
        return this.listPagingPage(
          resourceGroupName,
          labName,
          userName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: ServiceFabricsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServiceFabric[]> {
    let result: ServiceFabricsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, labName, userName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
        userName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: ServiceFabricsListOptionalParams
  ): AsyncIterableIterator<ServiceFabric> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      userName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List service fabrics in a given user profile.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    options?: ServiceFabricsListOptionalParams
  ): Promise<ServiceFabricsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, options },
      listOperationSpec
    );
  }

  /**
   * Get service fabric.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsGetOptionalParams
  ): Promise<ServiceFabricsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    serviceFabric: ServiceFabric,
    options?: ServiceFabricsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServiceFabricsCreateOrUpdateResponse>,
      ServiceFabricsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServiceFabricsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labName, userName, name, serviceFabric, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or replace an existing service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    serviceFabric: ServiceFabric,
    options?: ServiceFabricsCreateOrUpdateOptionalParams
  ): Promise<ServiceFabricsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      labName,
      userName,
      name,
      serviceFabric,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labName, userName, name, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      labName,
      userName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Allows modifying tags of service fabrics. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param serviceFabric A Service Fabric.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    serviceFabric: ServiceFabricFragment,
    options?: ServiceFabricsUpdateOptionalParams
  ): Promise<ServiceFabricsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, name, serviceFabric, options },
      updateOperationSpec
    );
  }

  /**
   * Lists the applicable start/stop schedules, if any.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  listApplicableSchedules(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsListApplicableSchedulesOptionalParams
  ): Promise<ServiceFabricsListApplicableSchedulesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, name, options },
      listApplicableSchedulesOperationSpec
    );
  }

  /**
   * Start a service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labName, userName, name, options },
      startOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Start a service fabric. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(
      resourceGroupName,
      labName,
      userName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Stop a service fabric This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  async beginStop(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, labName, userName, name, options },
      stopOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Stop a service fabric This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param name The name of the service fabric.
   * @param options The options parameters.
   */
  async beginStopAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    name: string,
    options?: ServiceFabricsStopOptionalParams
  ): Promise<void> {
    const poller = await this.beginStop(
      resourceGroupName,
      labName,
      userName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    userName: string,
    nextLink: string,
    options?: ServiceFabricsListNextOptionalParams
  ): Promise<ServiceFabricsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabricList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabric
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabric
    },
    201: {
      bodyMapper: Mappers.ServiceFabric
    },
    202: {
      bodyMapper: Mappers.ServiceFabric
    },
    204: {
      bodyMapper: Mappers.ServiceFabric
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.serviceFabric,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabric
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.serviceFabric1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listApplicableSchedulesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/listApplicableSchedules",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicableSchedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceFabricList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
