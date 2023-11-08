import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
// Docs => https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-lib-dynamodb/

export const dbPut = async(body) => {
    const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);
    await ddbDocClient.send(
        new PutCommand({
          TableName:"assetBeePlus",
          Item: body,
        }))
}