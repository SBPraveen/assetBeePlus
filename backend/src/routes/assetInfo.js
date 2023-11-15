import { dbGet } from "../cloudFunctions/index.js"
import { WrappedConsole } from "../utils/wrappedConsole.js"

export const assetInfo = async (req, res) => {
  const wrappedConsole = new WrappedConsole("GET")
  let assetInfo
  const query = {
    TableName: "assetBeePlus",
    Key: req.query,
  }
  try {
    assetInfo = await dbGet(query)
  } catch (error) {
    wrappedConsole.error("Error while fetching data for the asset ", error)
    res.send(false)
  }

  res.send(assetInfo)
}