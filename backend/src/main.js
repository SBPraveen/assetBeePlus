import express from 'express'
import config from '../config.js'
import {registerAsset, assetInfo, listAssets, downloadQrCode} from "./routes/index.js"

const app = express()
app.use(express.json());

//routes
app.post('/registerAsset', registerAsset)
app.get('/asset', assetInfo)
app.get('/listAssets', listAssets)
app.get('/downloadQrCode', downloadQrCode)

app.listen(config.port, () => {
  console.log(`AssetBeePlus server listening on port ${config.port}`)
})