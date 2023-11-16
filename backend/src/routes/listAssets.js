import { dbQuery } from "../cloudFunctions/index.js"
import { WrappedConsole } from "../utils/wrappedConsole.js"

export const listAssets = async (req, res) => {
  const wrappedConsole = new WrappedConsole("GET")
  let userQuery = JSON.parse(JSON.stringify(req.query))
  let reqKey = Object.keys(userQuery)
  if(reqKey[0] === "type" || reqKey[0] === "userId"){
    let assetList
    const query = {
      "TableName": "assetBeePlus",
      "KeyConditionExpression": "#kn0 = :kv0",
      "IndexName": reqKey[0]+"-index",
      "ExpressionAttributeNames": {
        "#kn0": reqKey[0]
      },
      "ExpressionAttributeValues": {
        ":kv0": userQuery[reqKey[0]]
      },
      "Select": "ALL_PROJECTED_ATTRIBUTES"
    }
    try {
      assetList = await dbQuery(query)
      res.send(assetList.Items)
    } catch (error) {
      wrappedConsole.error("Error while fetching asset list ", error)
      res.send(false)
    }
  }
  else{
    res.send(false)
  }

}