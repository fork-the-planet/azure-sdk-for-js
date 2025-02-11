// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.browser.shared.config.ts";
import browserMap from "@azure-tools/vite-plugin-browser-test-map";
import inject from "@rollup/plugin-inject";
import { relativeRecordingsPath } from "@azure-tools/test-recorder";
import { resolve } from "node:path";

process.env.RECORDINGS_RELATIVE_PATH = relativeRecordingsPath();

export default mergeConfig(
  viteConfig,
  defineConfig({
    optimizeDeps: {
      include: ["@azure-tools/test-recorder", "process", "buffer", "stream"],
    },
    plugins: [
      browserMap(),
      inject({ process: "process", Buffer: ["buffer", "Buffer"], stream: ["stream", "stream"] }),
    ],
    test: {
      testTimeout: 600000,
      hookTimeout: 60000,
      fileParallelism: false,
      include: ["dist-test/browser/**/*.spec.js"],
      setupFiles: !process.env["AZURE_LOG_LEVEL"] ? [] : ['./test/activate-browser-logging.ts'],
      alias: {
        "../../../src": resolve("./dist/browser"),
        "../../src": resolve("./dist/browser"),
      },
    },
  })
);
