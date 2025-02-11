// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { UploadLogsTest } from "./uploadLogs.spec.js";
import { createPerfProgram } from "@azure-tools/test-perf";

const perfProgram = createPerfProgram(UploadLogsTest);
perfProgram.run();
