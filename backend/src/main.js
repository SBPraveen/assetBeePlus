import express from 'express'
const app = express()
const port = 3000
import {registerAsset, listAssets, assetInfo} from "./routes/index.js"
import 'dotenv/config'

app.use(express.json());

app.post('/registerAsset', registerAsset)
app.get('/listAssets', listAssets)
app.get('/asset', assetInfo)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})