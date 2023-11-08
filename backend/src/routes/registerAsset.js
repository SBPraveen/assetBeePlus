import QRCode from 'qrcode'
import { WrappedConsole } from '../utils/wrappedConsole.js'
import { v4 as uuidv4 } from 'uuid';
import { dbPut } from '../cloudFunctions/dbPut.js';

export const registerAsset = async(req, res) => {
    const wrappedConsole = new WrappedConsole("POST")
    let asset = JSON.parse(JSON.stringify(req.body))
    const internalId = uuidv4()+ "" + asset.serialNo;
    const url = process.env.DOMAIN + "/device?id=" +internalId
    const creationDate = Date.now() + ""
    let qrCode
    try {
      qrCode = await QRCode.toDataURL(url)
    } catch (error) {
      wrappedConsole.error("Error while generating qr code", error)
      res.send(false)
    }
    asset = {...asset, internalId, url, qrCode, creationDate}
    try {
      qrCode = await dbPut(asset)
    } catch (error) {
      wrappedConsole.error("Error while uploading data to dynamoDB ", error)
      res.send(false)
    }
    res.send("Asset registered successfully")
  }