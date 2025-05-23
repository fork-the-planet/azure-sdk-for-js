// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { TableClient, TableServiceClient } from "@azure/data-tables";
import type { Checkpoint, PartitionOwnership } from "@azure/event-hubs";
import type { CheckpointEntity, PartitionOwnershipEntity } from "../../src/tableCheckpointStore.js";
import { TableCheckpointStore } from "../../src/index.js";
import debugModule from "debug";
import { afterEach, beforeEach, describe, it } from "vitest";
import { should } from "../util/chai.js";
import "../util/chai.js";

import { createClients } from "../util/clients.js";
import { addToOffset } from "../util/testUtils.js";

const debug = debugModule("azure:event-hubs:tableCheckpointStore");

/* test to show that test framework is set up well */
describe("TableCheckpointStore", () => {
  it("is exported from the package", () => {
    should.exist(TableCheckpointStore, "Expected TableCheckpointStore to be exported.");
  });
});

describe("TableCheckpointStore", () => {
  let client: TableClient;
  let serviceClient: TableServiceClient;
  let tableName: string;
  beforeEach(async () => {
    const { serviceClient: sClient, tableClient: tClient, tableName: tName } = createClients();
    client = tClient;
    serviceClient = sClient;
    tableName = tName;
    await serviceClient.createTable(tableName);
  });
  afterEach(async () => {
    await serviceClient.deleteTable(tableName);
  });

  describe("Runs tests on table with no entities", () => {
    describe("listOwnership", () => {
      it("listOwnership should return an empty array", async () => {
        const checkpointStore = new TableCheckpointStore(client);
        const listOwnership = await checkpointStore.listOwnership(
          "test.servicebus.windows.net",
          "testHub",
          "testConsumerGroup",
        );
        should.equal(listOwnership.length, 0);
      });
    });

    describe("listCheckpoints", () => {
      it("listCheckpoint should return an empty array", async () => {
        const checkpointStore = new TableCheckpointStore(client);
        const checkpoints = await checkpointStore.listCheckpoints(
          "test.servicebus.windows.net",
          "testHub",
          "testConsumerGroup",
        );
        should.equal(checkpoints.length, 0);
      });
    });
    describe("updateCheckpoint", () => {
      it("creates a checkpoint where one doesn't already exist", async () => {
        const checkpointStore = new TableCheckpointStore(client);
        const eventHubProperties = {
          fullyQualifiedNamespace: "pink.servicebus.windows.net",
          eventHubName: "pinkHub",
          consumerGroup: "testConsumerGroup",
        };
        // Ensure that there aren't any checkpoints.
        let checkpoints = await checkpointStore.listCheckpoints(
          eventHubProperties.fullyQualifiedNamespace,
          eventHubProperties.eventHubName,
          eventHubProperties.consumerGroup,
        );
        checkpoints.length.should.equal(0);
        // Create the checkpoint to add.
        const checkpoint: Checkpoint = {
          consumerGroup: eventHubProperties.consumerGroup,
          eventHubName: eventHubProperties.eventHubName,
          fullyQualifiedNamespace: eventHubProperties.fullyQualifiedNamespace,
          offset: "0",
          partitionId: "0",
          sequenceNumber: 1,
        };

        await checkpointStore.updateCheckpoint(checkpoint);
        // Ensure that there is a checkpoint.
        checkpoints = await checkpointStore.listCheckpoints(
          eventHubProperties.fullyQualifiedNamespace,
          eventHubProperties.eventHubName,
          eventHubProperties.consumerGroup,
        );

        checkpoints.length.should.equal(1);
      });

      it("forwards errors", async () => {
        const checkpointStore = new TableCheckpointStore(client);
        const eventHubProperties = {
          fullyQualifiedNamespace: "testNamespace.servicebus.windows.net",
          eventHubName: "testEventHub",
          consumerGroup: "testConsumerGroup",
        };

        // now let's induce a bad failure (removing the table)
        await client.deleteTable();

        // Create the checkpoint to add.
        const checkpoint: Checkpoint = {
          consumerGroup: eventHubProperties.consumerGroup,
          eventHubName: eventHubProperties.eventHubName,
          fullyQualifiedNamespace: eventHubProperties.fullyQualifiedNamespace,
          offset: "0",
          partitionId: "0",
          sequenceNumber: 1,
        };

        try {
          await checkpointStore.updateCheckpoint(checkpoint);
          throw new Error("Test failure");
        } catch (err: any) {
          err.message.should.not.equal("Test failure");
        }
      });
    });

    describe("claimOwnership", () => {
      it("claimOwnership call should succeed, if it has been called for the first time", async () => {
        const checkpointStore = new TableCheckpointStore(client);
        const listOwnership = await checkpointStore.listOwnership(
          "testNamespace.servicebus.windows.net",
          "testEventHub",
          "testConsumerGroup",
        );
        should.equal(listOwnership.length, 0);

        const partitionOwnership: PartitionOwnership = {
          ownerId: "Id1",
          partitionId: "0",
          fullyQualifiedNamespace: "testNamespace.servicebus.windows.net",
          consumerGroup: "testConsumerGroup",
          eventHubName: "testEventHub",
        };
        const partitionOwnershipArray = await checkpointStore.claimOwnership([partitionOwnership]);
        should.equal(partitionOwnershipArray.length, 1);

        const ownershipList = await checkpointStore.listOwnership(
          "testNamespace.servicebus.windows.net",
          "testEventHub",
          "testConsumerGroup",
        );

        should.equal(ownershipList.length, 1, "Unexpected number of ownerships in list.");
        should.equal(
          ownershipList[0].ownerId,
          "Id1",
          "The 1st ownership item has the wrong ownerId.",
        );
        should.equal(
          ownershipList[0].consumerGroup,
          "testConsumerGroup",
          "The 1st ownership item has the wrong consumerGroup.",
        );
        should.equal(
          ownershipList[0].fullyQualifiedNamespace,
          "testNamespace.servicebus.windows.net",
          "The 1st fullyQualifiedNamespace item has the wrong fullyQualifiedNamespace.",
        );
        should.equal(
          ownershipList[0].eventHubName,
          "testEventHub",
          "The 1st ownership item has the wrong eventHubName.",
        );
        should.equal(
          ownershipList[0].partitionId,
          "0",
          "The 1st ownership item has the wrong partitionId.",
        );
        should.exist(ownershipList[0].lastModifiedTimeInMs, "lastModifiedTimeInMs should exist.");
        should.exist(ownershipList[0].etag, "etag should exist.");
        debug(
          `LastModifiedTime: ${ownershipList[0].lastModifiedTimeInMs!}, ETag: ${
            ownershipList[0].etag
          }`,
        );
      });
    });
  });

  describe("Runs tests on a populated table", () => {
    const namespace = "blue.servicebus.windows.net";
    const eventHubName = "blueHub";
    const consumerGroup = "$default";
    beforeEach(async () => {
      /* Checkpoint */
      const checkpoint_entity: CheckpointEntity = {
        partitionKey: `${namespace} ${eventHubName} ${consumerGroup} Checkpoint`,
        rowKey: "0",
        sequencenumber: "100",
        offset: "1023",
      };
      await client.createEntity(checkpoint_entity);

      /* Ownership */
      const ownership_entity: PartitionOwnershipEntity = {
        partitionKey: `${namespace} ${eventHubName} ${consumerGroup} Ownership`,
        rowKey: "0",
        ownerid: "Id0",
      };
      await client.createEntity(ownership_entity);
    });

    describe("listOwnership", () => {
      it("listOwnership should print an array of ownerships", async () => {
        const checkpointStore = new TableCheckpointStore(client);
        const listOwnership = await checkpointStore.listOwnership(
          "blue.servicebus.windows.net",
          "blueHub",
          "$default",
        );
        should.equal(listOwnership.length, 1);
      });

      describe("listCheckpoints", () => {
        it("listCheckpoints should print out an array of checkpoints", async () => {
          const checkpointStore = new TableCheckpointStore(client);
          const listCheckpoint = await checkpointStore.listCheckpoints(
            "blue.servicebus.windows.net",
            "blueHub",
            "$default",
          );
          should.equal(listCheckpoint.length, 1);
        });
      });

      describe("claimOwnership", () => {
        // these errors happen when we have multiple consumers starting up
        // at the same time and load balancing amongst themselves. This is a
        // normal thing and shouldn't be reported to the user.

        it("claimOwnership ignores errors about etags", async () => {
          const checkpointStore = new TableCheckpointStore(client);
          const listOwnership = await checkpointStore.listOwnership(
            "blue.servicebus.windows.net",
            "blueHub",
            "$default",
          );

          const originalClaimedOwnerships = await checkpointStore.claimOwnership([
            listOwnership[0],
          ]);

          const originalETag = originalClaimedOwnerships[0].etag;
          const newClaimedOwnerships =
            await checkpointStore.claimOwnership(originalClaimedOwnerships);

          newClaimedOwnerships.length.should.equal(1);

          newClaimedOwnerships.length.should.equal(1);
          newClaimedOwnerships[0]!.etag!.should.not.equal(originalETag);

          // we've now invalidated the previous ownership's etag so using the old etag will fail

          const shouldNotThrowButNothingWillClaim = await checkpointStore.claimOwnership([
            {
              partitionId: "0",
              consumerGroup: "$default",
              fullyQualifiedNamespace: "blue.servicebus.windows.net",
              eventHubName: "blueHub",
              ownerId: "Id0",
              etag: originalETag,
            },
          ]);

          shouldNotThrowButNothingWillClaim.length.should.equal(0);
        });

        it("After multiple claimOwnership calls for a single partition, listOwnership should return an array with a single PartitionOwnership for that partition.", async () => {
          const checkpointStore = new TableCheckpointStore(client);
          const listOwnership = await checkpointStore.listOwnership(
            "testNamespace.servicebus.windows.net",
            "testEventHub",
            "testConsumerGroup",
          );
          should.equal(listOwnership.length, 0);
          const partitionOwnershipArray: PartitionOwnership[] = [];

          for (let index = 0; index < 3; index++) {
            const partitionOwnership: PartitionOwnership = {
              ownerId: "Id1",
              partitionId: `${index}`,
              fullyQualifiedNamespace: "testNamespace.servicebus.windows.net",
              consumerGroup: "testConsumerGroup",
              eventHubName: "testEventHub",
            };
            partitionOwnershipArray.push(partitionOwnership);
          }

          await checkpointStore.claimOwnership([partitionOwnershipArray[0]]);
          await checkpointStore.claimOwnership([partitionOwnershipArray[1]]);
          await checkpointStore.claimOwnership([partitionOwnershipArray[2]]);
          const ownershipList = await checkpointStore.listOwnership(
            "testNamespace.servicebus.windows.net",
            "testEventHub",
            "testConsumerGroup",
          );
          should.equal(ownershipList.length, 3, "Unexpected number of ownerships in list.");
          should.equal(
            ownershipList[0].ownerId,
            "Id1",
            "The 1st ownership item has the wrong ownerId.",
          );
          should.equal(
            ownershipList[0].consumerGroup,
            "testConsumerGroup",
            "The 1st ownership item has the wrong consumerGroup.",
          );
          should.equal(
            ownershipList[0].fullyQualifiedNamespace,
            "testNamespace.servicebus.windows.net",
            "The 1st fullyQualifiedNamespace item has the wrong fullyQualifiedNamespace.",
          );

          should.equal(
            ownershipList[0].eventHubName,
            "testEventHub",
            "The 1st ownership item has the wrong eventHubName.",
          );
          should.equal(
            ownershipList[0].partitionId,
            "0",
            "The 1st ownership item has the wrong partitionId.",
          );
          should.exist(ownershipList[0].lastModifiedTimeInMs, "lastModifiedTimeInMs should exist.");
          should.exist(ownershipList[0].etag, "etag should exist.");
          debug(
            `LastModifiedTime: ${ownershipList[0].lastModifiedTimeInMs!}, ETag: ${
              ownershipList[0].etag
            }`,
          );
        });

        it("After multiple claimOwnership calls for multiple partition, listOwnership should return an array with a single PartitionOwnership for each partition.", async () => {
          const checkpointStore = new TableCheckpointStore(client);
          const listOwnership = await checkpointStore.listOwnership(
            "testNamespace.servicebus.windows.net",
            "testEventHub",
            "testConsumerGroup",
          );
          should.equal(listOwnership.length, 0);

          const partitionOwnershipArray: PartitionOwnership[] = [];

          for (let index = 0; index < 3; index++) {
            const partitionOwnership: PartitionOwnership = {
              ownerId: "Id1",
              partitionId: `${index}`,
              fullyQualifiedNamespace: "testNamespace.servicebus.windows.net",
              consumerGroup: "testConsumerGroup",
              eventHubName: "testEventHub",
            };
            partitionOwnershipArray.push(partitionOwnership);
          }
          await checkpointStore.claimOwnership([partitionOwnershipArray[0]]);
          await checkpointStore.claimOwnership([partitionOwnershipArray[1]]);
          await checkpointStore.claimOwnership([partitionOwnershipArray[2]]);

          const ownershipList = await checkpointStore.listOwnership(
            "testNamespace.servicebus.windows.net",
            "testEventHub",
            "testConsumerGroup",
          );

          should.equal(ownershipList.length, 3, "Unexpected number of ownerships in list.");
          should.equal(
            ownershipList[0].ownerId,
            "Id1",
            "The 1st ownership item has the wrong ownerId.",
          );
          should.equal(
            ownershipList[0].consumerGroup,
            "testConsumerGroup",
            "The 1st ownership item has the wrong consumerGroup.",
          );

          should.equal(
            ownershipList[0].fullyQualifiedNamespace,
            "testNamespace.servicebus.windows.net",
            "The 1st fullyQualifiedNamespace item has the wrong fullyQualifiedNamespace.",
          );
          should.equal(
            ownershipList[0].eventHubName,
            "testEventHub",
            "The 1st ownership item has the wrong eventHubName.",
          );
          should.equal(
            ownershipList[0].eventHubName,
            "testEventHub",
            "The 1st ownership item has the wrong eventHubName.",
          );
          should.equal(
            ownershipList[0].partitionId,
            "0",
            "The 1st ownership item has the wrong partitionId.",
          );
          should.exist(ownershipList[0].lastModifiedTimeInMs, "lastModifiedTimeInMs should exist.");
          should.exist(ownershipList[0].etag, "etag should exist.");

          should.equal(
            ownershipList[1].partitionId,
            "1",
            "The 2nd ownership item has the wrong partitionId.",
          );
          should.exist(ownershipList[1].lastModifiedTimeInMs, "lastModifiedTimeInMs should exist.");
          should.exist(ownershipList[1].etag, "etag should exist.");

          should.equal(
            ownershipList[2].partitionId,
            "2",
            "The 3rd ownership item has the wrong partitionId.",
          );
          should.exist(ownershipList[2].lastModifiedTimeInMs, "lastModifiedTimeInMs should exist.");
          should.exist(ownershipList[2].etag, "etag should exist.");
        });
      });
    });

    describe("updateCheckpoint", () => {
      it("updates checkpoints successfully", async () => {
        const checkpointStore = new TableCheckpointStore(client);
        const eventHubProperties = {
          fullyQualifiedNamespace: "testNamespace.servicebus.windows.net",
          eventHubName: "testEventHub",
          consumerGroup: "testConsumerGroup",
        };
        let i = 0;
        while (i < 3) {
          const checkpoint: Checkpoint = {
            ...eventHubProperties,
            partitionId: i.toString(),
            sequenceNumber: 100 + i,
            offset: `${1023 + i}`,
          };
          await checkpointStore.updateCheckpoint(checkpoint);
          i++;
        }

        let checkpoints = await checkpointStore.listCheckpoints(
          eventHubProperties.fullyQualifiedNamespace,
          eventHubProperties.eventHubName,
          eventHubProperties.consumerGroup,
        );
        checkpoints.length.should.equal(3);
        checkpoints.sort((a, b) => a.partitionId.localeCompare(b.partitionId));

        for (i = 0; i < 3; ++i) {
          const checkpoint = checkpoints[i];

          checkpoint.partitionId.should.equal(i.toString());
          checkpoint.fullyQualifiedNamespace.should.equal("testNamespace.servicebus.windows.net");
          checkpoint.consumerGroup.should.equal("testConsumerGroup");
          checkpoint.eventHubName.should.equal("testEventHub");
          checkpoint.sequenceNumber!.should.equal(100 + i);
          checkpoint.offset!.should.equal(`${1023 + i}`);

          // now update it
          checkpoint.offset = addToOffset(checkpoint.offset, 1);
          checkpoint.sequenceNumber++;

          await checkpointStore.updateCheckpoint(checkpoint);
        }
        checkpoints = await checkpointStore.listCheckpoints(
          eventHubProperties.fullyQualifiedNamespace,
          eventHubProperties.eventHubName,
          eventHubProperties.consumerGroup,
        );
        checkpoints.length.should.equal(3);
        checkpoints.sort((a, b) => a.partitionId.localeCompare(b.partitionId));
        for (i = 0; i < 3; ++i) {
          const checkpoint = checkpoints[i];

          checkpoint.partitionId.should.equal(i.toString());
          checkpoint.fullyQualifiedNamespace.should.equal("testNamespace.servicebus.windows.net");
          checkpoint.consumerGroup.should.equal("testConsumerGroup");
          checkpoint.eventHubName.should.equal("testEventHub");
          checkpoint.sequenceNumber!.should.equal(100 + i + 1);
          checkpoint.offset!.should.equal(`${1023 + i + 1}`);
        }
      });
    });
  });
});
