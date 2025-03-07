/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Product,
  ProductsListOptionalParams,
  ProductsGetOptionalParams,
  ProductsGetResponse,
  ProductsListDetailsOptionalParams,
  ProductsListDetailsResponse,
  ProductsGetProductsOptionalParams,
  ProductsGetProductsResponse,
  ProductsGetProductOptionalParams,
  ProductsGetProductResponse,
  ProductsUploadLogOptionalParams,
  ProductsUploadLogResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Products. */
export interface Products {
  /**
   * Returns a list of products.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param options The options parameters.
   */
  list(
    resourceGroup: string,
    registrationName: string,
    options?: ProductsListOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Returns the specified product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The options parameters.
   */
  get(
    resourceGroup: string,
    registrationName: string,
    productName: string,
    options?: ProductsGetOptionalParams
  ): Promise<ProductsGetResponse>;
  /**
   * Returns the extended properties of a product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The options parameters.
   */
  listDetails(
    resourceGroup: string,
    registrationName: string,
    productName: string,
    options?: ProductsListDetailsOptionalParams
  ): Promise<ProductsListDetailsResponse>;
  /**
   * Returns a list of products.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The options parameters.
   */
  getProducts(
    resourceGroup: string,
    registrationName: string,
    productName: string,
    options?: ProductsGetProductsOptionalParams
  ): Promise<ProductsGetProductsResponse>;
  /**
   * Returns the specified product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The options parameters.
   */
  getProduct(
    resourceGroup: string,
    registrationName: string,
    productName: string,
    options?: ProductsGetProductOptionalParams
  ): Promise<ProductsGetProductResponse>;
  /**
   * Returns the specified product.
   * @param resourceGroup Name of the resource group.
   * @param registrationName Name of the Azure Stack registration.
   * @param productName Name of the product.
   * @param options The options parameters.
   */
  uploadLog(
    resourceGroup: string,
    registrationName: string,
    productName: string,
    options?: ProductsUploadLogOptionalParams
  ): Promise<ProductsUploadLogResponse>;
}
