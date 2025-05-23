## API Report File for "@azure/ai-form-recognizer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AzureKeyCredential } from '@azure/core-auth';
import type { CommonClientOptions } from '@azure/core-client';
import type { KeyCredential } from '@azure/core-auth';
import type { OperationOptions } from '@azure/core-client';
import type { PagedAsyncIterableIterator } from '@azure/core-paging';
import type { PollerLike } from '@azure/core-lro';
import type { PollOperationState } from '@azure/core-lro';
import type { TokenCredential } from '@azure/core-auth';

// @public
export interface AddressValue {
    city?: string;
    cityDistrict?: string;
    countryRegion?: string;
    house?: string;
    houseNumber?: string;
    level?: string;
    poBox?: string;
    postalCode?: string;
    road?: string;
    state?: string;
    stateDistrict?: string;
    streetAddress?: string;
    suburb?: string;
    unit?: string;
}

// @public
export type AnalysisPoller<Result = AnalyzeResult<AnalyzedDocument>> = PollerLike<DocumentAnalysisPollOperationState<Result>, Result>;

// @public
export interface AnalyzedDocument {
    boundingRegions?: BoundingRegion[];
    confidence: number;
    docType: string;
    fields: {
        [field: string]: DocumentField;
    };
    spans: DocumentSpan[];
}

// @public
export interface AnalyzeDocumentOptions<Result = AnalyzeResult<AnalyzedDocument>> extends OperationOptions, PollerOptions<DocumentAnalysisPollOperationState<Result>> {
    features?: FormRecognizerFeature[];
    locale?: string;
    pages?: string;
}

// @public
export interface AnalyzeResult<Document = AnalyzedDocument> extends AnalyzeResultCommon {
    documents?: Document[];
    keyValuePairs?: DocumentKeyValuePair[];
    languages?: DocumentLanguage[];
    pages?: DocumentPage[];
    paragraphs?: DocumentParagraph[];
    styles?: DocumentStyle[];
    tables?: DocumentTable[];
}

// @public
export interface AnalyzeResultCommon {
    apiVersion: string;
    content: string;
    modelId: string;
}

// @public
export type AnalyzeResultOperationStatus = "notStarted" | "running" | "failed" | "succeeded";

// @public
export interface AzureBlobFileListSource {
    azureBlobFileListSource: AzureBlobFileListSourceDetails;
    azureBlobSource?: undefined;
}

// @public
export interface AzureBlobFileListSourceDetails {
    containerUrl: string;
    fileList: string;
}

// @public
export interface AzureBlobSource {
    azureBlobFileListSource?: undefined;
    azureBlobSource: AzureBlobSourceDetails;
}

// @public
export interface AzureBlobSourceDetails {
    containerUrl: string;
    prefix?: string;
}

export { AzureKeyCredential }

// @public
export interface BeginBuildDocumentClassifierOptions extends OperationOptions, PollerOptions<DocumentClassifierOperationState> {
    description?: string;
}

// @public
export interface BeginBuildDocumentModelOptions extends CreateDocumentModelOptions {
}

// @public
export interface BeginComposeDocumentModelOptions extends CreateDocumentModelOptions {
}

// @public
export interface BeginCopyModelOptions extends OperationOptions, PollerOptions<DocumentModelOperationState> {
}

// @public
export interface BoundingRegion extends HasBoundingPolygon {
    pageNumber: number;
}

// @public
export interface ClassifierDocumentTypeDetails {
    azureBlobFileListSource?: AzureBlobFileListSourceDetails;
    azureBlobSource?: AzureBlobSourceDetails;
}

// @public
export interface ClassifyDocumentOptions extends OperationOptions, PollerOptions<DocumentAnalysisPollOperationState> {
}

// @public
export interface CommonModelCreationOptions {
    description?: string;
    tags?: Record<string, string>;
}

// @public
export interface CopyAuthorization {
    accessToken: string;
    expirationDateTime: Date;
    targetModelId: string;
    targetModelLocation: string;
    targetResourceId: string;
    targetResourceRegion: string;
}

// @public
export interface CreateDocumentModelOptions extends OperationOptions, CommonModelCreationOptions, PollerOptions<DocumentModelOperationState> {
}

// @public
export function createModelFromSchema(schema: Omit<DocumentModelDetails, "createdOn">): DocumentModel<AnalyzeResult<unknown>>;

// @public
export interface CurrencyValue {
    amount: number;
    currencyCode?: string;
    currencySymbol?: string;
}

// @public
export interface CustomDocumentModelsDetails {
    count: number;
    limit: number;
}

// @public
export interface DeleteDocumentModelOptions extends OperationOptions {
}

// @public
export interface DocumentAddressField extends DocumentFieldCommon {
    kind: "address";
    value?: AddressValue;
}

// @public
export class DocumentAnalysisClient {
    constructor(endpoint: string, credential: TokenCredential, options?: DocumentAnalysisClientOptions);
    constructor(endpoint: string, credential: KeyCredential, options?: DocumentAnalysisClientOptions);
    constructor(endpoint: string, credential: KeyCredential | TokenCredential, options?: DocumentAnalysisClientOptions);
    beginAnalyzeDocument(modelId: string, document: FormRecognizerRequestBody, options?: AnalyzeDocumentOptions): Promise<AnalysisPoller>;
    beginAnalyzeDocument<Result>(model: DocumentModel<Result>, document: FormRecognizerRequestBody, options?: AnalyzeDocumentOptions<Result>): Promise<AnalysisPoller<Result>>;
    beginAnalyzeDocumentFromUrl(modelId: string, documentUrl: string, options?: AnalyzeDocumentOptions): Promise<AnalysisPoller>;
    beginAnalyzeDocumentFromUrl<Result>(model: DocumentModel<Result>, documentUrl: string, options?: AnalyzeDocumentOptions<Result>): Promise<AnalysisPoller<Result>>;
    beginClassifyDocument(classifierId: string, document: FormRecognizerRequestBody, options?: ClassifyDocumentOptions): Promise<AnalysisPoller>;
    beginClassifyDocumentFromUrl(classifierId: string, documentUrl: string, options?: ClassifyDocumentOptions): Promise<AnalysisPoller>;
}

// @public
export interface DocumentAnalysisClientOptions extends CommonClientOptions {
    audience?: string;
    stringIndexType?: StringIndexType;
}

// @public
export interface DocumentAnalysisPollOperationState<Result = AnalyzeResult<AnalyzedDocument>> extends PollOperationState<Result> {
    createdOn: Date;
    lastUpdatedOn: Date;
    modelId: string;
    operationLocation: string;
    status: AnalyzeResultOperationStatus;
}

// @public
export interface DocumentAnnotation extends HasBoundingPolygon {
    confidence: number;
}

// @public
export interface DocumentArrayField<T = DocumentField> extends DocumentFieldCommon {
    kind: "array";
    values: T[];
}

// @public
export interface DocumentBarcode extends HasBoundingPolygon {
    confidence: number;
    kind: DocumentBarcodeKind;
    span: DocumentSpan;
    value: string;
}

// @public
export type DocumentBarcodeKind = string;

// @public
export interface DocumentBooleanField extends DocumentValueField<boolean> {
    kind: "boolean";
}

// @public
export type DocumentBuildMode = string;

// @public
export interface DocumentCaption {
    boundingRegions?: BoundingRegion[];
    content: string;
    spans: DocumentSpan[];
}

// @public
export interface DocumentClassifierBuildOperationDetails extends OperationDetails {
    kind: "documentClassifierBuild";
    result?: DocumentClassifierDetails;
}

// @public
export interface DocumentClassifierDetails {
    apiVersion: string;
    classifierId: string;
    createdOn: Date;
    description?: string;
    docTypes: {
        [propertyName: string]: ClassifierDocumentTypeDetails;
    };
    expiresOn?: Date;
}

// @public
export interface DocumentClassifierDocumentTypeSources {
    [docType: string]: DocumentClassifierSource;
}

// @public
export interface DocumentClassifierOperationState extends PollOperationState<DocumentClassifierDetails>, ModelAdministrationOperationStateCommon {
}

// @public
export type DocumentClassifierPoller = PollerLike<DocumentClassifierOperationState, DocumentClassifierDetails>;

// @public
export type DocumentClassifierSource = AzureBlobSource | AzureBlobFileListSource;

// @public
export interface DocumentCountryRegionField extends DocumentFieldCommon {
    kind: "countryRegion";
    value?: string;
}

// @public
export interface DocumentCurrencyField extends DocumentFieldCommon {
    kind: "currency";
    value?: CurrencyValue;
}

// @public
export interface DocumentDateField extends DocumentValueField<Date> {
    kind: "date";
}

// @public
export type DocumentField = DocumentStringField | DocumentDateField | DocumentTimeField | DocumentPhoneNumberField | DocumentNumberField | DocumentIntegerField | DocumentBooleanField | DocumentSelectionMarkField | DocumentCountryRegionField | DocumentSignatureField | DocumentCurrencyField | DocumentAddressField | DocumentArrayField | DocumentObjectField;

// @public
export interface DocumentFieldCommon {
    boundingRegions?: BoundingRegion[];
    confidence?: number;
    content?: string;
    spans?: DocumentSpan[];
}

// @public
export interface DocumentFieldSchema {
    description?: string;
    example?: string;
    items?: DocumentFieldSchema;
    properties?: {
        [propertyName: string]: DocumentFieldSchema;
    };
    type: DocumentFieldType;
}

// @public
export type DocumentFieldType = string;

// @public
export interface DocumentFootnote {
    boundingRegions?: BoundingRegion[];
    content: string;
    spans: DocumentSpan[];
}

// @public
export interface DocumentFormula extends HasBoundingPolygon {
    confidence: number;
    kind: DocumentFormulaKind;
    span: DocumentSpan;
    value: string;
}

// @public
export type DocumentFormulaKind = string;

// @public
export interface DocumentIntegerField extends DocumentValueField<number> {
    kind: "integer";
}

// @public
export interface DocumentKeyValueElement {
    boundingRegions?: BoundingRegion[];
    content: string;
    spans: DocumentSpan[];
}

// @public
export interface DocumentKeyValuePair {
    confidence: number;
    key: DocumentKeyValueElement;
    value?: DocumentKeyValueElement;
}

// @public
export interface DocumentLanguage {
    confidence: number;
    locale: string;
    spans: DocumentSpan[];
}

// @public
export interface DocumentLine extends HasBoundingPolygon {
    content: string;
    spans: DocumentSpan[];
    words: () => IterableIterator<DocumentWord>;
}

// @public
export interface DocumentModel<Result> {
    apiVersion?: string;
    modelId: string;
    transformResult: (input: AnalyzeResult) => Result;
}

// @public
export class DocumentModelAdministrationClient {
    constructor(endpoint: string, credential: TokenCredential, options?: DocumentModelAdministrationClientOptions);
    constructor(endpoint: string, credential: KeyCredential, options?: DocumentModelAdministrationClientOptions);
    constructor(endpoint: string, credential: KeyCredential | TokenCredential, options?: DocumentModelAdministrationClientOptions);
    beginBuildDocumentClassifier(classifierId: string, docTypeSources: DocumentClassifierDocumentTypeSources, options?: BeginBuildDocumentClassifierOptions): Promise<DocumentClassifierPoller>;
    beginBuildDocumentModel(modelId: string, containerUrl: string, buildMode: DocumentModelBuildMode, options?: BeginBuildDocumentModelOptions): Promise<DocumentModelPoller>;
    beginBuildDocumentModel(modelId: string, contentSource: DocumentModelSource, buildMode: DocumentModelBuildMode, options?: BeginBuildDocumentModelOptions): Promise<DocumentModelPoller>;
    beginComposeDocumentModel(modelId: string, componentModelIds: Iterable<string>, options?: BeginComposeDocumentModelOptions): Promise<DocumentModelPoller>;
    beginCopyModelTo(sourceModelId: string, authorization: CopyAuthorization, options?: BeginCopyModelOptions): Promise<DocumentModelPoller>;
    deleteDocumentClassifier(classifierId: string, options?: OperationOptions): Promise<void>;
    deleteDocumentModel(modelId: string, options?: DeleteDocumentModelOptions): Promise<void>;
    getCopyAuthorization(destinationModelId: string, options?: GetCopyAuthorizationOptions): Promise<CopyAuthorization>;
    getDocumentClassifier(classifierId: string, options?: OperationOptions): Promise<DocumentClassifierDetails>;
    getDocumentModel(modelId: string, options?: GetModelOptions): Promise<DocumentModelDetails>;
    getOperation(operationId: string, options?: GetOperationOptions): Promise<OperationDetails>;
    getResourceDetails(options?: GetResourceDetailsOptions): Promise<ResourceDetails>;
    listDocumentClassifiers(options?: ListModelsOptions): PagedAsyncIterableIterator<DocumentClassifierDetails>;
    listDocumentModels(options?: ListModelsOptions): PagedAsyncIterableIterator<DocumentModelSummary>;
    listOperations(options?: ListOperationsOptions): PagedAsyncIterableIterator<OperationSummary>;
}

// @public
export interface DocumentModelAdministrationClientOptions extends CommonClientOptions {
    audience?: string;
}

// @public
export type DocumentModelBuildMode = (typeof DocumentModelBuildMode)[keyof typeof DocumentModelBuildMode];

// @public
export const DocumentModelBuildMode: {
    readonly Template: "template";
    readonly Neural: "neural";
};

// @public
export interface DocumentModelBuildOperationDetails extends OperationDetails {
    kind: "documentModelBuild";
    result?: DocumentModelDetails;
}

// @public
export interface DocumentModelComposeOperationDetails extends OperationDetails {
    kind: "documentModelCompose";
    result?: DocumentModelDetails;
}

// @public
export interface DocumentModelCopyToOperationDetails extends OperationDetails {
    kind: "documentModelCopyTo";
    result?: DocumentModelDetails;
}

// @public
export interface DocumentModelDetails {
    apiVersion?: string;
    createdOn: Date;
    description?: string;
    docTypes?: {
        [propertyName: string]: DocumentTypeDetails;
    };
    expiresOn?: Date;
    modelId: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface DocumentModelOperationState extends PollOperationState<DocumentModelDetails>, ModelAdministrationOperationStateCommon {
}

// @public
export type DocumentModelPoller = PollerLike<DocumentModelOperationState, DocumentModelDetails>;

// @public
export type DocumentModelSource = AzureBlobSource | AzureBlobFileListSource;

// @public
export interface DocumentModelSummary {
    apiVersion?: string;
    createdOn: Date;
    description?: string;
    expiresOn?: Date;
    modelId: string;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface DocumentNumberField extends DocumentValueField<number> {
    kind: "number";
}

// @public
export interface DocumentObjectField<Properties = {
    [k: string]: DocumentField | undefined;
}> extends DocumentFieldCommon {
    kind: "object";
    properties: Properties;
}

// @public
export interface DocumentPage {
    angle?: number;
    barcodes?: DocumentBarcode[];
    formulas?: DocumentFormula[];
    height?: number;
    lines?: DocumentLine[];
    pageNumber: number;
    selectionMarks?: DocumentSelectionMark[];
    spans: DocumentSpan[];
    unit?: LengthUnit;
    width?: number;
    words?: DocumentWord[];
}

// @public
export interface DocumentParagraph {
    boundingRegions?: BoundingRegion[];
    content: string;
    role?: ParagraphRole;
    spans: DocumentSpan[];
}

// @public
export interface DocumentPhoneNumberField extends DocumentFieldCommon {
    kind: "phoneNumber";
    value?: string;
}

// @public
export interface DocumentSelectionMark extends HasBoundingPolygon {
    confidence: number;
    span: DocumentSpan;
    state: SelectionMarkState;
}

// @public
export interface DocumentSelectionMarkField extends DocumentFieldCommon {
    kind: "selectionMark";
    value?: string;
}

// @public
export interface DocumentSignatureField extends DocumentFieldCommon {
    kind: "signature";
    value: "signed" | "unsigned";
}

// @public
export type DocumentSignatureType = string;

// @public
export interface DocumentSpan {
    length: number;
    offset: number;
}

// @public
export interface DocumentStringField<Value extends string = string> extends DocumentValueField<Value> {
    kind: "string";
}

// @public
export interface DocumentStyle {
    backgroundColor?: string;
    color?: string;
    confidence: number;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    isHandwritten?: boolean;
    similarFontFamily?: string;
    spans: DocumentSpan[];
}

// @public
export interface DocumentTable {
    boundingRegions?: BoundingRegion[];
    cells: DocumentTableCell[];
    columnCount: number;
    rowCount: number;
    spans: DocumentSpan[];
}

// @public
export interface DocumentTableCell {
    boundingRegions?: BoundingRegion[];
    columnIndex: number;
    columnSpan?: number;
    content: string;
    kind?: DocumentTableCellKind;
    rowIndex: number;
    rowSpan?: number;
    spans: DocumentSpan[];
}

// @public
export type DocumentTableCellKind = string;

// @public
export interface DocumentTimeField extends DocumentFieldCommon {
    kind: "time";
    value?: string;
}

// @public
export interface DocumentTypeDetails {
    buildMode?: DocumentBuildMode;
    description?: string;
    fieldConfidence?: {
        [propertyName: string]: number;
    };
    fieldSchema: {
        [propertyName: string]: DocumentFieldSchema;
    };
}

// @public
export interface DocumentValueField<T> extends DocumentFieldCommon {
    value?: T;
}

// @public
export interface DocumentWord extends HasBoundingPolygon {
    confidence: number;
    content: string;
    span: DocumentSpan;
}

// @public
export interface ErrorModel {
    code: string;
    details?: ErrorModel[];
    innererror?: InnerError;
    message: string;
    target?: string;
}

// @public
export type FontStyle = string;

// @public
export type FontWeight = string;

// @public
export type FormRecognizerFeature = (typeof FormRecognizerFeature)[keyof typeof FormRecognizerFeature] | (string & {});

// @public
export const FormRecognizerFeature: {
    readonly Fonts: "styleFont";
    readonly OcrHighResolution: "ocrHighResolution";
    readonly Formulas: "formulas";
    readonly Languages: "languages";
    readonly Barcodes: "barcodes";
    readonly KeyValuePairs: "keyValuePairs";
};

// @public
export type FormRecognizerRequestBody = NodeJS.ReadableStream | Blob | ArrayBuffer | ArrayBufferView;

// @public
export interface GetCopyAuthorizationOptions extends OperationOptions, CommonModelCreationOptions {
}

// @public
export interface GetModelOptions extends OperationOptions {
}

// @public
export interface GetOperationOptions extends OperationOptions {
}

// @public
export interface GetResourceDetailsOptions extends OperationOptions {
}

// @public
export interface HasBoundingPolygon {
    polygon?: Point2D[];
}

// @public
export interface InnerError {
    code: string;
    innererror?: InnerError;
    message?: string;
}

// @public
export enum KnownDocumentBarcodeKind {
    Aztec = "Aztec",
    Codabar = "Codabar",
    Code128 = "Code128",
    Code39 = "Code39",
    Code93 = "Code93",
    DataBar = "DataBar",
    DataBarExpanded = "DataBarExpanded",
    DataMatrix = "DataMatrix",
    EAN13 = "EAN13",
    EAN8 = "EAN8",
    ITF = "ITF",
    MaxiCode = "MaxiCode",
    MicroQRCode = "MicroQRCode",
    PDF417 = "PDF417",
    QRCode = "QRCode",
    Upca = "UPCA",
    Upce = "UPCE"
}

// @public
export enum KnownDocumentBuildMode {
    Neural = "neural",
    Template = "template"
}

// @public
export enum KnownDocumentFieldType {
    Address = "address",
    Array = "array",
    Boolean = "boolean",
    CountryRegion = "countryRegion",
    Currency = "currency",
    Date = "date",
    Integer = "integer",
    Number = "number",
    Object = "object",
    PhoneNumber = "phoneNumber",
    SelectionMark = "selectionMark",
    Signature = "signature",
    String = "string",
    Time = "time"
}

// @public
export enum KnownDocumentFormulaKind {
    Display = "display",
    Inline = "inline"
}

// @public
export enum KnownDocumentSignatureType {
    Signed = "signed",
    Unsigned = "unsigned"
}

// @public
export enum KnownDocumentTableCellKind {
    ColumnHeader = "columnHeader",
    Content = "content",
    Description = "description",
    RowHeader = "rowHeader",
    StubHead = "stubHead"
}

// @public
export enum KnownFontStyle {
    Italic = "italic",
    Normal = "normal"
}

// @public
export enum KnownFontWeight {
    Bold = "bold",
    Normal = "normal"
}

// @public
export enum KnownFormRecognizerAudience {
    AzureChina = "https://cognitiveservices.azure.cn",
    AzureGovernment = "https://cognitiveservices.azure.us",
    AzurePublicCloud = "https://cognitiveservices.azure.com"
}

// @public
export enum KnownLengthUnit {
    Inch = "inch",
    Pixel = "pixel"
}

// @public
export enum KnownOperationKind {
    DocumentClassifierBuild = "documentClassifierBuild",
    DocumentModelBuild = "documentModelBuild",
    DocumentModelCompose = "documentModelCompose",
    DocumentModelCopyTo = "documentModelCopyTo"
}

// @public
export enum KnownParagraphRole {
    Footnote = "footnote",
    FormulaBlock = "formulaBlock",
    PageFooter = "pageFooter",
    PageHeader = "pageHeader",
    PageNumber = "pageNumber",
    SectionHeading = "sectionHeading",
    Title = "title"
}

// @public
export enum KnownSelectionMarkState {
    Selected = "selected",
    Unselected = "unselected"
}

// @public
export type LengthUnit = string;

// @public
export interface ListModelsOptions extends OperationOptions {
}

// @public
export interface ListOperationsOptions extends OperationOptions {
}

// @public
export interface ModelAdministrationOperationStateCommon {
    apiVersion?: string;
    createdOn: Date;
    lastUpdatedOn: Date;
    operationId: string;
    percentCompleted: number;
    status: OperationStatus;
    tags?: Record<string, string>;
}

// @public
export interface OperationDetails {
    apiVersion?: string;
    createdOn: Date;
    error?: ErrorModel;
    kind: "documentModelBuild" | "documentModelCompose" | "documentModelCopyTo" | "documentClassifierBuild";
    lastUpdatedOn: Date;
    operationId: string;
    percentCompleted?: number;
    resourceLocation: string;
    status: OperationStatus;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type OperationDetailsUnion = OperationDetails | DocumentModelBuildOperationDetails | DocumentModelComposeOperationDetails | DocumentModelCopyToOperationDetails | DocumentClassifierBuildOperationDetails;

// @public
export type OperationKind = string;

// @public
export type OperationStatus = "notStarted" | "running" | "failed" | "succeeded" | "canceled";

// @public
export interface OperationSummary {
    apiVersion?: string;
    createdOn: Date;
    kind: OperationKind;
    lastUpdatedOn: Date;
    operationId: string;
    percentCompleted?: number;
    resourceLocation: string;
    status: OperationStatus;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type ParagraphRole = string;

// @public
export interface Point2D {
    x: number;
    y: number;
}

// @public
export interface PollerOptions<TState extends PollOperationState<unknown>> extends OperationOptions {
    onProgress?: (state: TState) => void;
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface QuotaDetails {
    quota: number;
    quotaResetOn: Date;
    used: number;
}

// @public
export interface ResourceDetails {
    customDocumentModels: CustomDocumentModelsDetails;
    customNeuralDocumentModelBuilds: QuotaDetails;
}

// @public
export type SelectionMarkState = string;

// @public
export type StringIndexType = (typeof StringIndexType)[keyof typeof StringIndexType];

// @public
export const StringIndexType: {
    readonly Utf16CodeUnit: "utf16CodeUnit";
    readonly UnicodeCodePoint: "unicodeCodePoint";
};

```
