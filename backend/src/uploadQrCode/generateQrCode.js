import QRCode from 'qrcode'
import fs from 'fs'

export const generateQrCode = async(asset, wrappedConsole) => {
    try {
        //Generates QR code and stores it inside tempQRCodes
        await new Promise((resolve, reject) => {
               QRCode.toFile(`./src/uploadQrCode/tempQrCodes/${asset.internalId}.png`, asset.url,err => err ? reject(err): resolve(asset.internalId))
           }) 

           // The QR code is stored as a buffer
           const qrCode = fs.readFileSync(`./src/uploadQrCode/tempQrCodes/${asset.internalId}.png`);
           return qrCode
   } catch (error) {
       wrappedConsole.log("Error while generating qr code", error)
       return false
   }
}