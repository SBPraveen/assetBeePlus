# assetBeePlus

## Database Design
**DynamoDb** is used as a database
- asset's "internalId" is used as the partKey
- asset's "creationDate" is used as the sortKey
- userId is used as the GSI (Global Secondary Index)
- asset's "type" is used as the GSI (Global Secondary Index)

