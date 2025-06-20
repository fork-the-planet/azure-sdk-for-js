## API Report File for "@azure/arm-keyvault-profile-2020-09-01-hybrid"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface AccessPolicyEntry {
    applicationId?: string;
    objectId: string;
    permissions: Permissions;
    tenantId: string;
}

// @public
export type AccessPolicyUpdateKind = "add" | "replace" | "remove";

// @public
export interface Attributes {
    readonly created?: Date;
    enabled?: boolean;
    expires?: Date;
    notBefore?: Date;
    readonly updated?: Date;
}

// @public
export type CertificatePermissions = string;

// @public
export interface CheckNameAvailabilityResult {
    readonly message?: string;
    readonly nameAvailable?: boolean;
    readonly reason?: Reason;
}

// @public
export interface CloudError {
    error?: CloudErrorBody;
}

// @public
export interface CloudErrorBody {
    code?: string;
    message?: string;
}

// @public
export type CreateMode = "recover" | "default";

// @public
export interface DeletedVault {
    readonly id?: string;
    readonly name?: string;
    properties?: DeletedVaultProperties;
    readonly type?: string;
}

// @public
export interface DeletedVaultListResult {
    nextLink?: string;
    value?: DeletedVault[];
}

// @public
export interface DeletedVaultProperties {
    readonly deletionDate?: Date;
    readonly location?: string;
    readonly purgeProtectionEnabled?: boolean;
    readonly scheduledPurgeDate?: Date;
    readonly tags?: {
        [propertyName: string]: string;
    };
    readonly vaultId?: string;
}

// @public
export interface DimensionProperties {
    displayName?: string;
    name?: string;
    toBeExportedForShoebox?: boolean;
}

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public
export interface IPRule {
    value: string;
}

// @public
export type KeyPermissions = string;

// @public (undocumented)
export class KeyVaultManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: KeyVaultManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    operations: Operations;
    // (undocumented)
    privateEndpointConnections: PrivateEndpointConnections;
    // (undocumented)
    privateLinkResources: PrivateLinkResources;
    // (undocumented)
    secrets: Secrets;
    // (undocumented)
    subscriptionId: string;
    // (undocumented)
    vaults: Vaults;
}

// @public
export interface KeyVaultManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export enum KnownCertificatePermissions {
    All = "all",
    Backup = "backup",
    Create = "create",
    Delete = "delete",
    Deleteissuers = "deleteissuers",
    Get = "get",
    Getissuers = "getissuers",
    Import = "import",
    List = "list",
    Listissuers = "listissuers",
    Managecontacts = "managecontacts",
    Manageissuers = "manageissuers",
    Purge = "purge",
    Recover = "recover",
    Restore = "restore",
    Setissuers = "setissuers",
    Update = "update"
}

// @public
export enum KnownKeyPermissions {
    All = "all",
    Backup = "backup",
    Create = "create",
    Decrypt = "decrypt",
    Delete = "delete",
    Encrypt = "encrypt",
    Get = "get",
    Import = "import",
    List = "list",
    Purge = "purge",
    Recover = "recover",
    Restore = "restore",
    Sign = "sign",
    UnwrapKey = "unwrapKey",
    Update = "update",
    Verify = "verify",
    WrapKey = "wrapKey"
}

// @public
export enum KnownNetworkRuleAction {
    Allow = "Allow",
    Deny = "Deny"
}

// @public
export enum KnownNetworkRuleBypassOptions {
    AzureServices = "AzureServices",
    None = "None"
}

// @public
export enum KnownPrivateEndpointConnectionProvisioningState {
    Creating = "Creating",
    Deleting = "Deleting",
    Disconnected = "Disconnected",
    Failed = "Failed",
    Succeeded = "Succeeded",
    Updating = "Updating"
}

// @public
export enum KnownPrivateEndpointServiceConnectionStatus {
    Approved = "Approved",
    Disconnected = "Disconnected",
    Pending = "Pending",
    Rejected = "Rejected"
}

// @public
export enum KnownSecretPermissions {
    All = "all",
    Backup = "backup",
    Delete = "delete",
    Get = "get",
    List = "list",
    Purge = "purge",
    Recover = "recover",
    Restore = "restore",
    Set = "set"
}

// @public
export enum KnownSkuFamily {
    // (undocumented)
    A = "A"
}

// @public
export enum KnownStoragePermissions {
    All = "all",
    Backup = "backup",
    Delete = "delete",
    Deletesas = "deletesas",
    Get = "get",
    Getsas = "getsas",
    List = "list",
    Listsas = "listsas",
    Purge = "purge",
    Recover = "recover",
    Regeneratekey = "regeneratekey",
    Restore = "restore",
    Set = "set",
    Setsas = "setsas",
    Update = "update"
}

// @public
export enum KnownVaultProvisioningState {
    RegisteringDns = "RegisteringDns",
    Succeeded = "Succeeded"
}

// @public
export interface LogSpecification {
    blobDuration?: string;
    displayName?: string;
    name?: string;
}

// @public
export interface MetricSpecification {
    aggregationType?: string;
    dimensions?: DimensionProperties[];
    displayDescription?: string;
    displayName?: string;
    fillGapWithZero?: boolean;
    internalMetricName?: string;
    lockAggregationType?: string;
    name?: string;
    supportedAggregationTypes?: string[];
    supportedTimeGrainTypes?: string[];
    unit?: string;
}

// @public
export type NetworkRuleAction = string;

// @public
export type NetworkRuleBypassOptions = string;

// @public
export interface NetworkRuleSet {
    bypass?: NetworkRuleBypassOptions;
    defaultAction?: NetworkRuleAction;
    ipRules?: IPRule[];
    virtualNetworkRules?: VirtualNetworkRule[];
}

// @public
export interface Operation {
    display?: OperationDisplay;
    isDataAction?: boolean;
    name?: string;
    origin?: string;
    serviceSpecification?: ServiceSpecification;
}

// @public
export interface OperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationListResult {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export interface Permissions {
    certificates?: CertificatePermissions[];
    keys?: KeyPermissions[];
    secrets?: SecretPermissions[];
    storage?: StoragePermissions[];
}

// @public
export interface PrivateEndpoint {
    readonly id?: string;
}

// @public
export interface PrivateEndpointConnection extends Resource {
    etag?: string;
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

// @public
export interface PrivateEndpointConnectionItem {
    etag?: string;
    id?: string;
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    readonly provisioningState?: PrivateEndpointConnectionProvisioningState;
}

// @public
export type PrivateEndpointConnectionProvisioningState = string;

// @public
export interface PrivateEndpointConnections {
    beginDelete(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<PrivateEndpointConnectionsDeleteResponse>, PrivateEndpointConnectionsDeleteResponse>>;
    beginDeleteAndWait(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PrivateEndpointConnectionsDeleteResponse>;
    get(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    put(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, properties: PrivateEndpointConnection, options?: PrivateEndpointConnectionsPutOptionalParams): Promise<PrivateEndpointConnectionsPutResponse>;
}

// @public
export interface PrivateEndpointConnectionsDeleteHeaders {
    location?: string;
    retryAfter?: number;
}

// @public
export interface PrivateEndpointConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type PrivateEndpointConnectionsDeleteResponse = PrivateEndpointConnection;

// @public
export interface PrivateEndpointConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

// @public
export interface PrivateEndpointConnectionsPutHeaders {
    azureAsyncOperation?: string;
    retryAfter?: number;
}

// @public
export interface PrivateEndpointConnectionsPutOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateEndpointConnectionsPutResponse = PrivateEndpointConnectionsPutHeaders & PrivateEndpointConnection;

// @public
export type PrivateEndpointServiceConnectionStatus = string;

// @public
export interface PrivateLinkResource extends Resource {
    readonly groupId?: string;
    readonly requiredMembers?: string[];
    requiredZoneNames?: string[];
}

// @public
export interface PrivateLinkResourceListResult {
    value?: PrivateLinkResource[];
}

// @public
export interface PrivateLinkResources {
    listByVault(resourceGroupName: string, vaultName: string, options?: PrivateLinkResourcesListByVaultOptionalParams): Promise<PrivateLinkResourcesListByVaultResponse>;
}

// @public
export interface PrivateLinkResourcesListByVaultOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PrivateLinkResourcesListByVaultResponse = PrivateLinkResourceListResult;

// @public
export interface PrivateLinkServiceConnectionState {
    actionsRequired?: string;
    description?: string;
    status?: PrivateEndpointServiceConnectionStatus;
}

// @public
export type Reason = "AccountNameInvalid" | "AlreadyExists";

// @public
export interface Resource {
    readonly id?: string;
    readonly location?: string;
    readonly name?: string;
    readonly tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export interface ResourceListResult {
    nextLink?: string;
    value?: Resource[];
}

// @public
export interface Secret extends Resource {
    properties: SecretProperties;
}

// @public
export interface SecretAttributes extends Attributes {
}

// @public
export interface SecretCreateOrUpdateParameters {
    properties: SecretProperties;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface SecretListResult {
    nextLink?: string;
    value?: Secret[];
}

// @public
export interface SecretPatchParameters {
    properties?: SecretPatchProperties;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface SecretPatchProperties {
    attributes?: SecretAttributes;
    contentType?: string;
    value?: string;
}

// @public
export type SecretPermissions = string;

// @public
export interface SecretProperties {
    attributes?: SecretAttributes;
    contentType?: string;
    readonly secretUri?: string;
    readonly secretUriWithVersion?: string;
    value?: string;
}

// @public
export interface Secrets {
    createOrUpdate(resourceGroupName: string, vaultName: string, secretName: string, parameters: SecretCreateOrUpdateParameters, options?: SecretsCreateOrUpdateOptionalParams): Promise<SecretsCreateOrUpdateResponse>;
    get(resourceGroupName: string, vaultName: string, secretName: string, options?: SecretsGetOptionalParams): Promise<SecretsGetResponse>;
    list(resourceGroupName: string, vaultName: string, options?: SecretsListOptionalParams): PagedAsyncIterableIterator<Secret>;
    update(resourceGroupName: string, vaultName: string, secretName: string, parameters: SecretPatchParameters, options?: SecretsUpdateOptionalParams): Promise<SecretsUpdateResponse>;
}

// @public
export interface SecretsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SecretsCreateOrUpdateResponse = Secret;

// @public
export interface SecretsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SecretsGetResponse = Secret;

// @public
export interface SecretsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SecretsListNextResponse = SecretListResult;

// @public
export interface SecretsListOptionalParams extends coreClient.OperationOptions {
    top?: number;
}

// @public
export type SecretsListResponse = SecretListResult;

// @public
export interface SecretsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type SecretsUpdateResponse = Secret;

// @public
export interface ServiceSpecification {
    logSpecifications?: LogSpecification[];
    metricSpecifications?: MetricSpecification[];
}

// @public
export interface Sku {
    family: SkuFamily;
    name: SkuName;
}

// @public
export type SkuFamily = string;

// @public
export type SkuName = "standard" | "premium";

// @public
export type StoragePermissions = string;

// @public
export interface Vault {
    readonly id?: string;
    location?: string;
    readonly name?: string;
    properties: VaultProperties;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export interface VaultAccessPolicyParameters {
    readonly id?: string;
    readonly location?: string;
    readonly name?: string;
    properties: VaultAccessPolicyProperties;
    readonly type?: string;
}

// @public
export interface VaultAccessPolicyProperties {
    accessPolicies: AccessPolicyEntry[];
}

// @public
export interface VaultCheckNameAvailabilityParameters {
    name: string;
    type: "Microsoft.KeyVault/vaults";
}

// @public
export interface VaultCreateOrUpdateParameters {
    location: string;
    properties: VaultProperties;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface VaultListResult {
    nextLink?: string;
    value?: Vault[];
}

// @public
export interface VaultPatchParameters {
    properties?: VaultPatchProperties;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface VaultPatchProperties {
    accessPolicies?: AccessPolicyEntry[];
    createMode?: CreateMode;
    enabledForDeployment?: boolean;
    enabledForDiskEncryption?: boolean;
    enabledForTemplateDeployment?: boolean;
    enablePurgeProtection?: boolean;
    enableRbacAuthorization?: boolean;
    enableSoftDelete?: boolean;
    networkAcls?: NetworkRuleSet;
    sku?: Sku;
    softDeleteRetentionInDays?: number;
    tenantId?: string;
}

// @public
export interface VaultProperties {
    accessPolicies?: AccessPolicyEntry[];
    createMode?: CreateMode;
    enabledForDeployment?: boolean;
    enabledForDiskEncryption?: boolean;
    enabledForTemplateDeployment?: boolean;
    enablePurgeProtection?: boolean;
    enableRbacAuthorization?: boolean;
    enableSoftDelete?: boolean;
    readonly hsmPoolResourceId?: string;
    networkAcls?: NetworkRuleSet;
    readonly privateEndpointConnections?: PrivateEndpointConnectionItem[];
    provisioningState?: VaultProvisioningState;
    sku: Sku;
    softDeleteRetentionInDays?: number;
    tenantId: string;
    vaultUri?: string;
}

// @public
export type VaultProvisioningState = string;

// @public
export interface Vaults {
    beginCreateOrUpdate(resourceGroupName: string, vaultName: string, parameters: VaultCreateOrUpdateParameters, options?: VaultsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VaultsCreateOrUpdateResponse>, VaultsCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, vaultName: string, parameters: VaultCreateOrUpdateParameters, options?: VaultsCreateOrUpdateOptionalParams): Promise<VaultsCreateOrUpdateResponse>;
    beginPurgeDeleted(vaultName: string, location: string, options?: VaultsPurgeDeletedOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginPurgeDeletedAndWait(vaultName: string, location: string, options?: VaultsPurgeDeletedOptionalParams): Promise<void>;
    checkNameAvailability(vaultName: VaultCheckNameAvailabilityParameters, options?: VaultsCheckNameAvailabilityOptionalParams): Promise<VaultsCheckNameAvailabilityResponse>;
    delete(resourceGroupName: string, vaultName: string, options?: VaultsDeleteOptionalParams): Promise<void>;
    get(resourceGroupName: string, vaultName: string, options?: VaultsGetOptionalParams): Promise<VaultsGetResponse>;
    getDeleted(vaultName: string, location: string, options?: VaultsGetDeletedOptionalParams): Promise<VaultsGetDeletedResponse>;
    list(options?: VaultsListOptionalParams): PagedAsyncIterableIterator<Resource>;
    listByResourceGroup(resourceGroupName: string, options?: VaultsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Vault>;
    listBySubscription(options?: VaultsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Vault>;
    listDeleted(options?: VaultsListDeletedOptionalParams): PagedAsyncIterableIterator<DeletedVault>;
    update(resourceGroupName: string, vaultName: string, parameters: VaultPatchParameters, options?: VaultsUpdateOptionalParams): Promise<VaultsUpdateResponse>;
    updateAccessPolicy(resourceGroupName: string, vaultName: string, operationKind: AccessPolicyUpdateKind, parameters: VaultAccessPolicyParameters, options?: VaultsUpdateAccessPolicyOptionalParams): Promise<VaultsUpdateAccessPolicyResponse>;
}

// @public
export interface VaultsCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsCheckNameAvailabilityResponse = CheckNameAvailabilityResult;

// @public
export interface VaultsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type VaultsCreateOrUpdateResponse = Vault;

// @public
export interface VaultsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface VaultsGetDeletedOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsGetDeletedResponse = DeletedVault;

// @public
export interface VaultsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsGetResponse = Vault;

// @public
export interface VaultsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsListByResourceGroupNextResponse = VaultListResult;

// @public
export interface VaultsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    top?: number;
}

// @public
export type VaultsListByResourceGroupResponse = VaultListResult;

// @public
export interface VaultsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsListBySubscriptionNextResponse = VaultListResult;

// @public
export interface VaultsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
    top?: number;
}

// @public
export type VaultsListBySubscriptionResponse = VaultListResult;

// @public
export interface VaultsListDeletedNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsListDeletedNextResponse = DeletedVaultListResult;

// @public
export interface VaultsListDeletedOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsListDeletedResponse = DeletedVaultListResult;

// @public
export interface VaultsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsListNextResponse = ResourceListResult;

// @public
export interface VaultsListOptionalParams extends coreClient.OperationOptions {
    top?: number;
}

// @public
export type VaultsListResponse = ResourceListResult;

// @public
export interface VaultsPurgeDeletedOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface VaultsUpdateAccessPolicyOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsUpdateAccessPolicyResponse = VaultAccessPolicyParameters;

// @public
export interface VaultsUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type VaultsUpdateResponse = Vault;

// @public
export interface VirtualNetworkRule {
    id: string;
    ignoreMissingVnetServiceEndpoint?: boolean;
}

// (No @packageDocumentation comment for this package)

```
