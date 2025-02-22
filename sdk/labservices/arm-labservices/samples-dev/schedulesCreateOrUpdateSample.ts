/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Schedule } from "@azure/arm-labservices";
import { LabServicesClient } from "@azure/arm-labservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Operation to create or update a lab schedule.
 *
 * @summary Operation to create or update a lab schedule.
 * x-ms-original-file: specification/labservices/resource-manager/Microsoft.LabServices/stable/2022-08-01/examples/Schedules/putSchedule.json
 */
async function putSchedule(): Promise<void> {
  const subscriptionId =
    process.env["LABSERVICES_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["LABSERVICES_RESOURCE_GROUP"] || "testrg123";
  const labName = "testlab";
  const scheduleName = "schedule1";
  const body: Schedule = {
    notes: "Schedule 1 for students",
    recurrencePattern: {
      expirationDate: new Date("2020-08-14T23:59:59Z"),
      frequency: "Daily",
      interval: 2,
    },
    startAt: new Date("2020-05-26T12:00:00Z"),
    stopAt: new Date("2020-05-26T18:00:00Z"),
    timeZoneId: "America/Los_Angeles",
  };
  const credential = new DefaultAzureCredential();
  const client = new LabServicesClient(credential, subscriptionId);
  const result = await client.schedules.createOrUpdate(
    resourceGroupName,
    labName,
    scheduleName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await putSchedule();
}

main().catch(console.error);
