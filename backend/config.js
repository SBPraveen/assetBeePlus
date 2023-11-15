import 'dotenv/config'

const config = {
    domain: process.env.DOMAIN,
    port: 8080,
    qrBucket: process.env.QR_BUCKET,
    assetDb: process.env.ASSET_DB
}

export default config