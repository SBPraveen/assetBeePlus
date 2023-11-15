import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

export const dbPut = async (body, wrappedConsole) => {
  const client = new DynamoDBClient({});
  const ddbDocClient = DynamoDBDocumentClient.from(client);
  try {
    await ddbDocClient.send(
      new PutCommand({
        TableName: "assetBeePlus",
        Item: body,
      }))
  } catch (error) {
    wrappedConsole.error("Error while uploading data to dynamoDb", error)
    return false
  }
  return true

}