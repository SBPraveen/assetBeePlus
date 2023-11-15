import { dbGet } from "../cloudFunctions/index.js"
import { WrappedConsole } from "../utils/wrappedConsole.js"

export const listAssets = async (req, res) => {
  const wrappedConsole = new WrappedConsole("GET")
  let assetList
  const query = {
    "TableName": "assetBeePlus",
    "KeyConditionExpression": "#kn0 = :kv0",
    "IndexName": "type-index",
    "ExpressionAttributeNames": {
      "#kn0": "type"
    },
    "ExpressionAttributeValues": {
      ":kv0": "Monitor"
    },
    "Select": "ALL_PROJECTED_ATTRIBUTES"
  }
  try {
    assetList = await dbGet(query)
  } catch (error) {
    wrappedConsole.error("Error while fetching asset list ", error)
    res.send(false)
  }

  res.send(assetList)
}