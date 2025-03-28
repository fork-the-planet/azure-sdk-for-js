/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Images } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DevCenterClient } from "../devCenterClient.js";
import {
  Image,
  ImagesListByDevCenterNextOptionalParams,
  ImagesListByDevCenterOptionalParams,
  ImagesListByDevCenterResponse,
  ImagesListByGalleryNextOptionalParams,
  ImagesListByGalleryOptionalParams,
  ImagesListByGalleryResponse,
  ImagesGetOptionalParams,
  ImagesGetResponse,
  ImagesListByDevCenterNextResponse,
  ImagesListByGalleryNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Images operations. */
export class ImagesImpl implements Images {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class Images class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists images for a devcenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  public listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: ImagesListByDevCenterOptionalParams,
  ): PagedAsyncIterableIterator<Image> {
    const iter = this.listByDevCenterPagingAll(
      resourceGroupName,
      devCenterName,
      options,
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
        return this.listByDevCenterPagingPage(
          resourceGroupName,
          devCenterName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDevCenterPagingPage(
    resourceGroupName: string,
    devCenterName: string,
    options?: ImagesListByDevCenterOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Image[]> {
    let result: ImagesListByDevCenterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDevCenter(
        resourceGroupName,
        devCenterName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDevCenterNext(
        resourceGroupName,
        devCenterName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDevCenterPagingAll(
    resourceGroupName: string,
    devCenterName: string,
    options?: ImagesListByDevCenterOptionalParams,
  ): AsyncIterableIterator<Image> {
    for await (const page of this.listByDevCenterPagingPage(
      resourceGroupName,
      devCenterName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists images for a gallery.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param options The options parameters.
   */
  public listByGallery(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: ImagesListByGalleryOptionalParams,
  ): PagedAsyncIterableIterator<Image> {
    const iter = this.listByGalleryPagingAll(
      resourceGroupName,
      devCenterName,
      galleryName,
      options,
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
        return this.listByGalleryPagingPage(
          resourceGroupName,
          devCenterName,
          galleryName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByGalleryPagingPage(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: ImagesListByGalleryOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Image[]> {
    let result: ImagesListByGalleryResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByGallery(
        resourceGroupName,
        devCenterName,
        galleryName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByGalleryNext(
        resourceGroupName,
        devCenterName,
        galleryName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByGalleryPagingAll(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: ImagesListByGalleryOptionalParams,
  ): AsyncIterableIterator<Image> {
    for await (const page of this.listByGalleryPagingPage(
      resourceGroupName,
      devCenterName,
      galleryName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists images for a devcenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  private _listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: ImagesListByDevCenterOptionalParams,
  ): Promise<ImagesListByDevCenterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, options },
      listByDevCenterOperationSpec,
    );
  }

  /**
   * Lists images for a gallery.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param options The options parameters.
   */
  private _listByGallery(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    options?: ImagesListByGalleryOptionalParams,
  ): Promise<ImagesListByGalleryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, galleryName, options },
      listByGalleryOperationSpec,
    );
  }

  /**
   * Gets a gallery image.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    imageName: string,
    options?: ImagesGetOptionalParams,
  ): Promise<ImagesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, galleryName, imageName, options },
      getOperationSpec,
    );
  }

  /**
   * ListByDevCenterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param nextLink The nextLink from the previous successful call to the ListByDevCenter method.
   * @param options The options parameters.
   */
  private _listByDevCenterNext(
    resourceGroupName: string,
    devCenterName: string,
    nextLink: string,
    options?: ImagesListByDevCenterNextOptionalParams,
  ): Promise<ImagesListByDevCenterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, nextLink, options },
      listByDevCenterNextOperationSpec,
    );
  }

  /**
   * ListByGalleryNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param galleryName The name of the gallery.
   * @param nextLink The nextLink from the previous successful call to the ListByGallery method.
   * @param options The options parameters.
   */
  private _listByGalleryNext(
    resourceGroupName: string,
    devCenterName: string,
    galleryName: string,
    nextLink: string,
    options?: ImagesListByGalleryNextOptionalParams,
  ): Promise<ImagesListByGalleryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, galleryName, nextLink, options },
      listByGalleryNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDevCenterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/images",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByGalleryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.galleryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Image,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.galleryName,
    Parameters.imageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDevCenterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByGalleryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink,
    Parameters.galleryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
