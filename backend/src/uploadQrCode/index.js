import { s3Upload } from '../cloudFunctions/index.js'
import { generateQrCode } from './generateQrCode.js'
import { deleteQrCode } from './deleteQrCode.js'

//Generates QR code and uploads it to S3 bucket
export const uploadQrCode =  async(asset, wrappedConsole) => {
    let genQr = await generateQrCode(asset, wrappedConsole)
    let uploadQr = genQr && await s3Upload(genQr, `${asset.internalId}.png`, wrappedConsole)
    let deleteQr = genQr && await deleteQrCode(`./src/uploadQrCode/tempQrCodes/${asset.internalId}.png`, wrappedConsole)
    return genQr && uploadQr && deleteQr
}
