import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, BatchGetCommand } from "@aws-sdk/lib-dynamodb";
// Docs => https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-lib-dynamodb/

export const dbGetAll = async () => {
  const client = new DynamoDBClient({});
  const ddbDocClient = DynamoDBDocumentClient.from(client);
  const response = await ddbDocClient.send(new BatchGetCommand({
    TableName: "assetBeePlus"
  }));
  return response.Item;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEeW5hbW9EQkNsaWVudCIsIkR5bmFtb0RCRG9jdW1lbnRDbGllbnQiLCJCYXRjaEdldENvbW1hbmQiLCJkYkdldEFsbCIsImNsaWVudCIsImRkYkRvY0NsaWVudCIsImZyb20iLCJyZXNwb25zZSIsInNlbmQiLCJUYWJsZU5hbWUiLCJJdGVtIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Nsb3VkRnVuY3Rpb25zL2RiR2V0QWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCQ2xpZW50IH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiO1xuaW1wb3J0IHsgRHluYW1vREJEb2N1bWVudENsaWVudCwgQmF0Y2hHZXRDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2xpYi1keW5hbW9kYlwiO1xuLy8gRG9jcyA9PiBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQVdTSmF2YVNjcmlwdFNESy92My9sYXRlc3QvUGFja2FnZS8tYXdzLXNkay1saWItZHluYW1vZGIvXG5cbmV4cG9ydCBjb25zdCBkYkdldEFsbCA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBEeW5hbW9EQkNsaWVudCh7fSk7XG4gICAgY29uc3QgZGRiRG9jQ2xpZW50ID0gRHluYW1vREJEb2N1bWVudENsaWVudC5mcm9tKGNsaWVudCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkZGJEb2NDbGllbnQuc2VuZChcbiAgICAgICAgbmV3IEJhdGNoR2V0Q29tbWFuZCh7XG4gICAgICAgICAgVGFibGVOYW1lOlwiYXNzZXRCZWVQbHVzXCIsXG4gICAgICAgIH0pKVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuSXRlbVxufSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsY0FBYyxRQUFRLDBCQUEwQjtBQUN6RCxTQUFTQyxzQkFBc0IsRUFBRUMsZUFBZSxRQUFRLHVCQUF1QjtBQUMvRTs7QUFFQSxPQUFPLE1BQU1DLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7RUFDL0IsTUFBTUMsTUFBTSxHQUFHLElBQUlKLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyQyxNQUFNSyxZQUFZLEdBQUdKLHNCQUFzQixDQUFDSyxJQUFJLENBQUNGLE1BQU0sQ0FBQztFQUN4RCxNQUFNRyxRQUFRLEdBQUcsTUFBTUYsWUFBWSxDQUFDRyxJQUFJLENBQ3BDLElBQUlOLGVBQWUsQ0FBQztJQUNsQk8sU0FBUyxFQUFDO0VBQ1osQ0FBQyxDQUFDLENBQUM7RUFDSCxPQUFPRixRQUFRLENBQUNHLElBQUk7QUFDNUIsQ0FBQyJ9