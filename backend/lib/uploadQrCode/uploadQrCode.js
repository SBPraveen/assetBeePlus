import QRCode from 'qrcode';
import { s3Upload } from '../cloudFunctions/index.js';
import fs from 'fs';

//This function generates QR code and uploads it to S3 bucket
export const uploadQrCode = async (asset, wrappedConsole) => {
  try {
    //the QR code is generated as a base-64 url
    const qrCode = await QRCode.toFile(`./qrCodes/${asset.internalId}.png`, asset.url);
    // s3Upload(qrCode, asset.internalId+'.png', wrappedConsole)
    // const qrCode = await QRCode.toDataURL(asset.url)
    console.log("qrCode", qrCode);
    //converting the base-64 to buffer
    // const qrCodeBuffer = Buffer.from(qrCode, "base64")
    // const qrStream = await fetch(qrCode)
    // console.log("qrStream", qrStream);
    // let writableStream = fs.createWriteStream('./write.png');
    // writableStream.write(qrStream.body)
    // const qrBlob = await qrStream.blob()
    // console.log("qrBlob", qrBlob);
    // //Upload the qrcode to s3 bucket
    // let isS3Upload = s3Upload(qrBlob, asset.internalId+'.png', wrappedConsole)
    // if (!isS3Upload) {
    //     return false
    // }
  } catch (error) {
    wrappedConsole.error("Error while generating qr code", error);
    return false;
  }
  return true;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRUkNvZGUiLCJzM1VwbG9hZCIsImZzIiwidXBsb2FkUXJDb2RlIiwiYXNzZXQiLCJ3cmFwcGVkQ29uc29sZSIsInFyQ29kZSIsInRvRmlsZSIsImludGVybmFsSWQiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXBsb2FkUXJDb2RlL3VwbG9hZFFyQ29kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZSdcbmltcG9ydCB7IHMzVXBsb2FkIH0gZnJvbSAnLi4vY2xvdWRGdW5jdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbi8vVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgUVIgY29kZSBhbmQgdXBsb2FkcyBpdCB0byBTMyBidWNrZXRcbmV4cG9ydCBjb25zdCB1cGxvYWRRckNvZGUgPSBhc3luYyAoYXNzZXQsIHdyYXBwZWRDb25zb2xlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy90aGUgUVIgY29kZSBpcyBnZW5lcmF0ZWQgYXMgYSBiYXNlLTY0IHVybFxuICAgICAgICBjb25zdCBxckNvZGUgPSBhd2FpdCBRUkNvZGUudG9GaWxlKGAuL3FyQ29kZXMvJHthc3NldC5pbnRlcm5hbElkfS5wbmdgLCBhc3NldC51cmwpXG4gICAgICAgIC8vIHMzVXBsb2FkKHFyQ29kZSwgYXNzZXQuaW50ZXJuYWxJZCsnLnBuZycsIHdyYXBwZWRDb25zb2xlKVxuICAgICAgICAvLyBjb25zdCBxckNvZGUgPSBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKGFzc2V0LnVybClcbiAgICAgICAgY29uc29sZS5sb2coXCJxckNvZGVcIiwgcXJDb2RlKTtcbiAgICAgICAgLy9jb252ZXJ0aW5nIHRoZSBiYXNlLTY0IHRvIGJ1ZmZlclxuICAgICAgICAvLyBjb25zdCBxckNvZGVCdWZmZXIgPSBCdWZmZXIuZnJvbShxckNvZGUsIFwiYmFzZTY0XCIpXG4gICAgICAgIC8vIGNvbnN0IHFyU3RyZWFtID0gYXdhaXQgZmV0Y2gocXJDb2RlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInFyU3RyZWFtXCIsIHFyU3RyZWFtKTtcbiAgICAgICAgLy8gbGV0IHdyaXRhYmxlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oJy4vd3JpdGUucG5nJyk7XG4gICAgICAgIC8vIHdyaXRhYmxlU3RyZWFtLndyaXRlKHFyU3RyZWFtLmJvZHkpXG4gICAgICAgIC8vIGNvbnN0IHFyQmxvYiA9IGF3YWl0IHFyU3RyZWFtLmJsb2IoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInFyQmxvYlwiLCBxckJsb2IpO1xuICAgICAgICAvLyAvL1VwbG9hZCB0aGUgcXJjb2RlIHRvIHMzIGJ1Y2tldFxuICAgICAgICAvLyBsZXQgaXNTM1VwbG9hZCA9IHMzVXBsb2FkKHFyQmxvYiwgYXNzZXQuaW50ZXJuYWxJZCsnLnBuZycsIHdyYXBwZWRDb25zb2xlKVxuICAgICAgICAvLyBpZiAoIWlzUzNVcGxvYWQpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgd3JhcHBlZENvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBnZW5lcmF0aW5nIHFyIGNvZGVcIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBTSxNQUFNLFFBQVE7QUFDM0IsU0FBU0MsUUFBUSxRQUFRLDRCQUE0QjtBQUNyRCxPQUFPQyxFQUFFLE1BQU0sSUFBSTs7QUFFbkI7QUFDQSxPQUFPLE1BQU1DLFlBQVksR0FBRyxNQUFBQSxDQUFPQyxLQUFLLEVBQUVDLGNBQWMsS0FBSztFQUN6RCxJQUFJO0lBQ0E7SUFDQSxNQUFNQyxNQUFNLEdBQUcsTUFBTU4sTUFBTSxDQUFDTyxNQUFNLENBQUUsYUFBWUgsS0FBSyxDQUFDSSxVQUFXLE1BQUssRUFBRUosS0FBSyxDQUFDSyxHQUFHLENBQUM7SUFDbEY7SUFDQTtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVMLE1BQU0sQ0FBQztJQUM3QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKLENBQUMsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7SUFDWlAsY0FBYyxDQUFDTyxLQUFLLENBQUMsZ0NBQWdDLEVBQUVBLEtBQUssQ0FBQztJQUM3RCxPQUFPLEtBQUs7RUFDaEI7RUFDQSxPQUFPLElBQUk7QUFDZixDQUFDIn0=