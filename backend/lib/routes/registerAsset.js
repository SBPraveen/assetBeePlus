import QRCode from 'qrcode';
import { WrappedConsole } from '../utils/wrappedConsole.js';
import { v4 as uuidv4 } from 'uuid';
import { dbPut } from '../cloudFunctions/dbPut.js';
export const registerAsset = async (req, res) => {
  const wrappedConsole = new WrappedConsole("POST");
  let asset = JSON.parse(JSON.stringify(req.body));
  const internalId = uuidv4() + "" + asset.serialNo;
  const url = process.env.DOMAIN + "/device?id=" + internalId;
  const creationDate = Date.now() + "";
  let qrCode;
  try {
    qrCode = await QRCode.toDataURL(url);
  } catch (error) {
    wrappedConsole.error("Error while generating qr code", error);
    res.send(false);
  }
  asset = {
    ...asset,
    internalId,
    url,
    qrCode,
    creationDate
  };
  try {
    qrCode = await dbPut(asset);
  } catch (error) {
    wrappedConsole.error("Error while uploading data to dynamoDB ", error);
    res.send(false);
  }
  res.send("Asset registered successfully");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRUkNvZGUiLCJXcmFwcGVkQ29uc29sZSIsInY0IiwidXVpZHY0IiwiZGJQdXQiLCJyZWdpc3RlckFzc2V0IiwicmVxIiwicmVzIiwid3JhcHBlZENvbnNvbGUiLCJhc3NldCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImJvZHkiLCJpbnRlcm5hbElkIiwic2VyaWFsTm8iLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiRE9NQUlOIiwiY3JlYXRpb25EYXRlIiwiRGF0ZSIsIm5vdyIsInFyQ29kZSIsInRvRGF0YVVSTCIsImVycm9yIiwic2VuZCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcmVnaXN0ZXJBc3NldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZSdcbmltcG9ydCB7IFdyYXBwZWRDb25zb2xlIH0gZnJvbSAnLi4vdXRpbHMvd3JhcHBlZENvbnNvbGUuanMnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IGRiUHV0IH0gZnJvbSAnLi4vY2xvdWRGdW5jdGlvbnMvZGJQdXQuanMnO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJBc3NldCA9IGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlZENvbnNvbGUgPSBuZXcgV3JhcHBlZENvbnNvbGUoXCJQT1NUXCIpXG4gICAgbGV0IGFzc2V0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXEuYm9keSkpXG4gICAgY29uc3QgaW50ZXJuYWxJZCA9IHV1aWR2NCgpKyBcIlwiICsgYXNzZXQuc2VyaWFsTm87XG4gICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgXCIvZGV2aWNlP2lkPVwiICtpbnRlcm5hbElkXG4gICAgY29uc3QgY3JlYXRpb25EYXRlID0gRGF0ZS5ub3coKSArIFwiXCJcbiAgICBsZXQgcXJDb2RlXG4gICAgdHJ5IHtcbiAgICAgIHFyQ29kZSA9IGF3YWl0IFFSQ29kZS50b0RhdGFVUkwodXJsKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB3cmFwcGVkQ29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGdlbmVyYXRpbmcgcXIgY29kZVwiLCBlcnJvcilcbiAgICAgIHJlcy5zZW5kKGZhbHNlKVxuICAgIH1cbiAgICBhc3NldCA9IHsuLi5hc3NldCwgaW50ZXJuYWxJZCwgdXJsLCBxckNvZGUsIGNyZWF0aW9uRGF0ZX1cbiAgICB0cnkge1xuICAgICAgcXJDb2RlID0gYXdhaXQgZGJQdXQoYXNzZXQpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHdyYXBwZWRDb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgdXBsb2FkaW5nIGRhdGEgdG8gZHluYW1vREIgXCIsIGVycm9yKVxuICAgICAgcmVzLnNlbmQoZmFsc2UpXG4gICAgfVxuICAgIHJlcy5zZW5kKFwiQXNzZXQgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcIilcbiAgfSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBTSxNQUFNLFFBQVE7QUFDM0IsU0FBU0MsY0FBYyxRQUFRLDRCQUE0QjtBQUMzRCxTQUFTQyxFQUFFLElBQUlDLE1BQU0sUUFBUSxNQUFNO0FBQ25DLFNBQVNDLEtBQUssUUFBUSw0QkFBNEI7QUFFbEQsT0FBTyxNQUFNQyxhQUFhLEdBQUcsTUFBQUEsQ0FBTUMsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDNUMsTUFBTUMsY0FBYyxHQUFHLElBQUlQLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDakQsSUFBSVEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNOLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaEQsTUFBTUMsVUFBVSxHQUFHWCxNQUFNLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBR00sS0FBSyxDQUFDTSxRQUFRO0VBQ2hELE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU0sR0FBRyxhQUFhLEdBQUVMLFVBQVU7RUFDMUQsTUFBTU0sWUFBWSxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtFQUNwQyxJQUFJQyxNQUFNO0VBQ1YsSUFBSTtJQUNGQSxNQUFNLEdBQUcsTUFBTXZCLE1BQU0sQ0FBQ3dCLFNBQVMsQ0FBQ1IsR0FBRyxDQUFDO0VBQ3RDLENBQUMsQ0FBQyxPQUFPUyxLQUFLLEVBQUU7SUFDZGpCLGNBQWMsQ0FBQ2lCLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRUEsS0FBSyxDQUFDO0lBQzdEbEIsR0FBRyxDQUFDbUIsSUFBSSxDQUFDLEtBQUssQ0FBQztFQUNqQjtFQUNBakIsS0FBSyxHQUFHO0lBQUMsR0FBR0EsS0FBSztJQUFFSyxVQUFVO0lBQUVFLEdBQUc7SUFBRU8sTUFBTTtJQUFFSDtFQUFZLENBQUM7RUFDekQsSUFBSTtJQUNGRyxNQUFNLEdBQUcsTUFBTW5CLEtBQUssQ0FBQ0ssS0FBSyxDQUFDO0VBQzdCLENBQUMsQ0FBQyxPQUFPZ0IsS0FBSyxFQUFFO0lBQ2RqQixjQUFjLENBQUNpQixLQUFLLENBQUMseUNBQXlDLEVBQUVBLEtBQUssQ0FBQztJQUN0RWxCLEdBQUcsQ0FBQ21CLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDakI7RUFDQW5CLEdBQUcsQ0FBQ21CLElBQUksQ0FBQywrQkFBK0IsQ0FBQztBQUMzQyxDQUFDIn0=