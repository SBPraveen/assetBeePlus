import QRCode from 'qrcode';

//This function generates QR code and uploads it to S3 bucket
export const uploadQrCode = async (url, wrappedConsole) => {
  let qrCode;
  try {
    qrCode = await QRCode.toDataURL(url);
  } catch (error) {
    wrappedConsole.error("Error while generating qr code", error);
    return false;
  }
  return true;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJRUkNvZGUiLCJ1cGxvYWRRckNvZGUiLCJ1cmwiLCJ3cmFwcGVkQ29uc29sZSIsInFyQ29kZSIsInRvRGF0YVVSTCIsImVycm9yIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy91cGxvYWRRckNvZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUnXG5cbi8vVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgUVIgY29kZSBhbmQgdXBsb2FkcyBpdCB0byBTMyBidWNrZXRcbmV4cG9ydCBjb25zdCB1cGxvYWRRckNvZGUgPSBhc3luYyAodXJsLCB3cmFwcGVkQ29uc29sZSkgPT4ge1xuICAgIGxldCBxckNvZGVcbiAgICB0cnkge1xuICAgICAgICBxckNvZGUgPSBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKHVybClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB3cmFwcGVkQ29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIGdlbmVyYXRpbmcgcXIgY29kZVwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFNLE1BQU0sUUFBUTs7QUFFM0I7QUFDQSxPQUFPLE1BQU1DLFlBQVksR0FBRyxNQUFBQSxDQUFPQyxHQUFHLEVBQUVDLGNBQWMsS0FBSztFQUN2RCxJQUFJQyxNQUFNO0VBQ1YsSUFBSTtJQUNBQSxNQUFNLEdBQUcsTUFBTUosTUFBTSxDQUFDSyxTQUFTLENBQUNILEdBQUcsQ0FBQztFQUN4QyxDQUFDLENBQUMsT0FBT0ksS0FBSyxFQUFFO0lBQ1pILGNBQWMsQ0FBQ0csS0FBSyxDQUFDLGdDQUFnQyxFQUFFQSxLQUFLLENBQUM7SUFDN0QsT0FBTyxLQUFLO0VBQ2hCO0VBQ0EsT0FBTyxJQUFJO0FBQ2YsQ0FBQyJ9