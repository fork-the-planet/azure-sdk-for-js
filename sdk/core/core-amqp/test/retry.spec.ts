// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { describe, it, assert } from "vitest";
import type { RetryConfig } from "../src/index.js";
import {
  Constants,
  MessagingError,
  RetryMode,
  RetryOperationType,
  delay,
  retry,
  translate,
} from "../src/index.js";
import debugModule from "debug";

const debug = debugModule("azure:core-amqp:retry-spec");

function assertAggregateError(err: unknown, check: RegExp): asserts err is AggregateError {
  assert.instanceOf(err, AggregateError);
  const errors = (err as AggregateError).errors;
  assert.match(errors[errors.length - 1].message, check);
}

[RetryMode.Exponential, RetryMode.Fixed].forEach((mode) => {
  describe(`retry function for "${
    mode === RetryMode.Exponential ? "Exponential" : "Fixed"
  }" retry mode`, function () {
    it("should succeed if the operation succeeds.", async function () {
      let counter = 0;
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            debug("counter: %d", ++counter);
            await delay(200);
            return {
              code: 200,
              description: "OK",
            };
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.cbsAuth,
          retryOptions: { retryDelayInMs: 15000, mode: mode },
        };
        const result = await retry(config);
        assert.equal(result.code, 200);
        assert.equal(result.description, "OK");
        assert.equal(counter, 1);
      } catch (err) {
        debug("An error occurred in a test that should have succeeded: %O", err);
        throw err;
      }
    });

    it("should fail if the operation returns a non retryable error", async function () {
      let counter = 0;
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            debug("counter: %d", ++counter);
            await delay(200);
            throw translate({
              condition: "amqp:precondition-failed",
              description: "I would like to fail, not retryable.",
            });
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.management,
          retryOptions: { retryDelayInMs: 15000, mode: mode },
        };
        await retry(config);
      } catch (err) {
        assert.isDefined(err);
        assert.instanceOf(err, MessagingError);
        assert.match((err as MessagingError).message, /I would like to fail, not retryable./);
        assert.equal(counter, 1);
      }
    });

    it("should succeed if the operation initially fails with a retryable error and then succeeds.", async function () {
      let counter = 0;
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            await delay(200);
            debug("counter: %d", ++counter);
            if (counter === 1) {
              throw translate({
                condition: "com.microsoft:server-busy",
                description: "The server is busy right now. Retry later.",
              });
            } else {
              return {
                code: 200,
                description: "OK",
              };
            }
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.receiverLink,
          retryOptions: { maxRetries: 2, retryDelayInMs: 500, mode: mode },
        };
        const result = await retry(config);
        assert.equal(result.code, 200);
        assert.equal(result.description, "OK");
        assert.equal(counter, 2);
      } catch (err) {
        debug("An error occurred in a test that should have succeeded: %O", err);
        throw err;
      }
    });

    it("should succeed in the last attempt.", async function () {
      let counter = 0;
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            await delay(200);
            debug("counter: %d", ++counter);
            if (counter === 1) {
              const e = new MessagingError("A retryable error.");
              e.retryable = true;
              throw e;
            } else if (counter === 2) {
              const e = new MessagingError("A retryable error.");
              e.retryable = true;
              throw e;
            } else {
              return {
                code: 200,
                description: "OK",
              };
            }
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.senderLink,
          retryOptions: { maxRetries: 2, retryDelayInMs: 500, mode: mode },
        };
        const result = await retry(config);
        assert.equal(result.code, 200);
        assert.equal(result.description, "OK");
        assert.equal(counter, 3);
      } catch (err) {
        debug("An error occurred in a test that should have succeeded: %O", err);
        throw err;
      }
    });

    it("should fail if the last attempt return a non-retryable error", async function () {
      let counter = 0;
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            await delay(200);
            debug("counter: %d", ++counter);
            if (counter === 1) {
              const e = new MessagingError("A retryable error.");
              e.retryable = true;
              throw e;
            } else if (counter === 2) {
              const e = new MessagingError("A retryable error.");
              e.retryable = true;
              throw e;
            } else {
              const x: any = {
                condition: "com.microsoft:message-lock-lost",
                description: "I would like to fail.",
              };
              throw x;
            }
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.sendMessage,
          retryOptions: { maxRetries: 2, retryDelayInMs: 500, mode: mode },
        };
        await retry(config);
      } catch (err) {
        assertAggregateError(err, /I would like to fail./);
        assert.equal(counter, 3);
      }
    });

    it("should fail if all attempts return a retryable error", async function () {
      let counter = 0;
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            debug("counter: %d", ++counter);
            await delay(200);
            const e = new MessagingError("I would always like to fail, keep retrying.");
            e.retryable = true;
            throw e;
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.session,
          retryOptions: { maxRetries: 4, retryDelayInMs: 500, mode: mode },
        };
        await retry(config);
      } catch (err) {
        assertAggregateError(err, /I would always like to fail, keep retrying./);
        assert.equal(counter, 5);
      }
    });

    it("should not sleep after final failure if all attempts return a retryable error (no retries)", async function () {
      let counter = 0;
      // Create an abort controller so we can clean up the delay's setTimeout ASAP after the race.
      const delayAbortController = new AbortController();
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            counter++;
            const e = new MessagingError("I would always like to fail, keep retrying.");
            e.retryable = true;
            throw e;
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.session,
          retryOptions: {
            maxRetries: 0,
            retryDelayInMs: 60000,
            mode: mode,
          },
        };
        // Since retry should not sleep since maxRetries is 0, `retry` should beat `delay`.
        await Promise.race([retry(config), delay(10000, delayAbortController.signal)]);
        // If we get here, `delay` won :-(
        throw new Error("TestFailure: 'retry' took longer than expected to return.");
      } catch (err) {
        assert.isDefined(err);
        assert.instanceOf(err, MessagingError);
        assert.match(
          (err as MessagingError).message,
          /I would always like to fail, keep retrying./,
        );
        assert.equal(counter, 1);
        // Clear delay's setTimeout...we don't need it anymore.
        delayAbortController.abort();
      }
    });

    it("should not sleep after final failure if all attempts return a retryable error (retries)", async function () {
      let counter = 0;
      // Create an abort controller so we can clean up the delay's setTimeout ASAP after the race.
      const delayAbortController = new AbortController();
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            counter++;
            const e = new MessagingError("I would always like to fail, keep retrying.");
            e.retryable = true;
            throw e;
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.session,
          retryOptions: {
            maxRetries: 1,
            retryDelayInMs: 1000,
            mode: mode,
          },
        };
        // `retry` should sleep once because `maxRetries` is 1, causing a 1000 ms delay.
        // `retry` should beat `delay`.
        await Promise.race([retry(config), delay(1500, delayAbortController.signal)]);
        // If we get here, `delay` won :-(
        throw new Error("TestFailure: 'retry' took longer than expected to return.");
      } catch (err) {
        assertAggregateError(err, /I would always like to fail, keep retrying./);
        assert.equal(counter, 2);
        // Clear delay's setTimeout...we don't need it anymore.
        delayAbortController.abort();
      }
    });

    it("should stop retries when aborted", async function () {
      let counter = 0;
      const controller = new AbortController();
      const abortSignal = controller.signal;
      setTimeout(controller.abort.bind(controller), 300);
      try {
        const config: RetryConfig<any> = {
          operation: async () => {
            debug("counter: %d", ++counter);
            await delay(200);
            const e = new MessagingError("I would always like to fail, keep retrying.");
            e.retryable = true;
            throw e;
          },
          connectionId: "connection-1",
          operationType: RetryOperationType.session,
          abortSignal: abortSignal,
          retryOptions: { maxRetries: 4, retryDelayInMs: 500, mode: mode },
        };
        await retry(config);
      } catch (err) {
        assert.isDefined(err);
        assert.instanceOf(err, Error);
        assert.equal((err as Error).name, "AbortError");
        assert.equal(counter, 1, "It should retry only once");
      }
    });

    describe("with config.maxRetries set to Infinity", function () {
      it("should succeed if the operation succeeds.", async function () {
        let counter = 0;
        try {
          const config: RetryConfig<any> = {
            operation: async () => {
              debug("counter: %d", ++counter);
              await delay(200);
              return {
                code: 200,
                description: "OK",
              };
            },
            connectionId: "connection-1",
            operationType: RetryOperationType.cbsAuth,
            retryOptions: { maxRetries: Infinity, retryDelayInMs: 500, mode: mode },
          };
          const result = await retry(config);
          assert.equal(result.code, 200);
          assert.equal(result.description, "OK");
          assert.equal(counter, 1);
        } catch (err) {
          debug("An error occurred in a test that should have succeeded: %O", err);
          throw err;
        }
      });

      it("should fail if the operation returns a non retryable error", async function () {
        let counter = 0;
        try {
          const config: RetryConfig<any> = {
            operation: async () => {
              debug("counter: %d", ++counter);
              await delay(200);
              throw translate({
                condition: "amqp:precondition-failed",
                description: "I would like to fail, not retryable.",
              });
            },
            connectionId: "connection-1",
            operationType: RetryOperationType.management,
            retryOptions: { maxRetries: Infinity, retryDelayInMs: 500, mode: mode },
          };
          await retry(config);
        } catch (err) {
          assert.isDefined(err);
          assert.instanceOf(err, MessagingError);
          assert.match((err as MessagingError).message, /I would like to fail, not retryable./);
          assert.equal(counter, 1);
        }
      });

      it("should succeed if the operation initially fails with a retryable error and then succeeds.", async function () {
        let counter = 0;
        try {
          const config: RetryConfig<any> = {
            operation: async () => {
              await delay(200);
              debug("counter: %d", ++counter);
              if (counter === 1) {
                throw translate({
                  condition: "com.microsoft:server-busy",
                  description: "The server is busy right now. Retry later.",
                });
              } else {
                return {
                  code: 200,
                  description: "OK",
                };
              }
            },
            connectionId: "connection-1",
            operationType: RetryOperationType.receiverLink,
            retryOptions: { maxRetries: Infinity, retryDelayInMs: 500, mode: mode },
          };
          const result = await retry(config);
          assert.equal(result.code, 200);
          assert.equal(result.description, "OK");
          assert.equal(counter, 2);
        } catch (err) {
          debug("An error occurred in a test that should have succeeded: %O", err);
          throw err;
        }
      });

      it("should succeed in the last attempt.", async function () {
        let counter = 0;
        try {
          const config: RetryConfig<any> = {
            operation: async () => {
              await delay(200);
              debug("counter: %d", ++counter);
              if (counter === 1) {
                const e = new MessagingError("A retryable error.");
                e.retryable = true;
                throw e;
              } else if (counter === 2) {
                const e = new MessagingError("A retryable error.");
                e.retryable = true;
                throw e;
              } else {
                return {
                  code: 200,
                  description: "OK",
                };
              }
            },
            connectionId: "connection-1",
            operationType: RetryOperationType.senderLink,
            retryOptions: { maxRetries: Infinity, retryDelayInMs: 500, mode: mode },
          };
          const result = await retry(config);
          assert.equal(result.code, 200);
          assert.equal(result.description, "OK");
          assert.equal(counter, 3);
        } catch (err) {
          debug("An error occurred in a test that should have succeeded: %O", err);
          throw err;
        }
      });

      it("should fail if the last attempt return a non-retryable error", async function () {
        let counter = 0;
        try {
          const config: RetryConfig<any> = {
            operation: async () => {
              await delay(200);
              debug("counter: %d", ++counter);
              if (counter === 1) {
                const e = new MessagingError("A retryable error.");
                e.retryable = true;
                throw e;
              } else if (counter === 2) {
                const e = new MessagingError("A retryable error.");
                e.retryable = true;
                throw e;
              } else {
                const x: any = {
                  condition: "com.microsoft:message-lock-lost",
                  description: "I would like to fail.",
                };
                throw x;
              }
            },
            connectionId: "connection-1",
            operationType: RetryOperationType.sendMessage,
            retryOptions: {
              maxRetries: Constants.defaultMaxRetriesForConnection,
              retryDelayInMs: 1,
              mode: mode,
            },
          };
          await retry(config);
        } catch (err) {
          assertAggregateError(err, /I would like to fail./);
          assert.equal(counter, 3);
        }
      });
    });
  });
});
