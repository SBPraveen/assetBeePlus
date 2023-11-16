import { WrappedConsole } from '../utils/index.js'
import { v4 as uuidv4 } from 'uuid';
import { dbPut } from '../cloudFunctions/index.js';
import { uploadQrCode } from '../uploadQrCode/index.js';

export const registerAsset = async (req, res) => {
  const wrappedConsole = new WrappedConsole("POST", "/registerAsset")
  let asset = JSON.parse(JSON.stringify(req.body))
  const internalId = uuidv4() + "" + asset.serialNo;
  const creationDate = Date.now() + ""
  const url = process.env.DOMAIN + "/device?id=" + internalId + "&creationDate=" + creationDate
  asset = { ...asset, internalId, url, creationDate }
  let qrCode = await uploadQrCode(asset, wrappedConsole)
  let dbUpdate = await dbPut(asset, wrappedConsole)
  if (!qrCode && !dbUpdate) {
    res.send(false)
  }
  else {
    res.send("Asset registered successfully")
  }

}