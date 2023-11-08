import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
export const s3Put = async (body, key) => {
  const client = new S3Client({});
  const bucketInput = {
    Bucket: "asset-bee-plus",
    Key: key + ".png",
    Body: body,
    ContentType: "image/png"
  };
  console.log(bucketInput);
  const command = new PutObjectCommand(bucketInput);
  try {
    const response = await client.send(command);
    console.log("###############################################################################################333");
    console.log(response);
    console.log("###############################################################################################333");
    return true;
  } catch (err) {
    console.log("------------------------------------------------S3 ----------------------------------------------------------------");
    console.log(err);
    console.log("------------------------------------------------S3 ----------------------------------------------------------------");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTM0NsaWVudCIsIlB1dE9iamVjdENvbW1hbmQiLCJzM1B1dCIsImJvZHkiLCJrZXkiLCJjbGllbnQiLCJidWNrZXRJbnB1dCIsIkJ1Y2tldCIsIktleSIsIkJvZHkiLCJDb250ZW50VHlwZSIsImNvbnNvbGUiLCJsb2ciLCJjb21tYW5kIiwicmVzcG9uc2UiLCJzZW5kIiwiZXJyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Nsb3VkRnVuY3Rpb25zL3MzUHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFMzQ2xpZW50LCBQdXRPYmplY3RDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1zM1wiOyBcblxuXG5leHBvcnQgY29uc3QgczNQdXQgPSBhc3luYyhib2R5LCBrZXkpID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgUzNDbGllbnQoe30pO1xuICAgIGNvbnN0IGJ1Y2tldElucHV0ID0ge1xuICAgICAgICBCdWNrZXQ6IFwiYXNzZXQtYmVlLXBsdXNcIixcbiAgICAgICAgS2V5OiBrZXkrXCIucG5nXCIsXG4gICAgICAgIEJvZHk6IGJvZHksIFxuICAgICAgICBDb250ZW50VHlwZTogXCJpbWFnZS9wbmdcIiAgICAgICAgXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGJ1Y2tldElucHV0KTtcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IFB1dE9iamVjdENvbW1hbmQoYnVja2V0SW5wdXQpO1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuc2VuZChjb21tYW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIzMzM1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjMzMzXCIpO1xuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tUzMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TMyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgIH1cbiAgICBcbn0iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFFBQVEsRUFBRUMsZ0JBQWdCLFFBQVEsb0JBQW9CO0FBRy9ELE9BQU8sTUFBTUMsS0FBSyxHQUFHLE1BQUFBLENBQU1DLElBQUksRUFBRUMsR0FBRyxLQUFLO0VBQ3JDLE1BQU1DLE1BQU0sR0FBRyxJQUFJTCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDL0IsTUFBTU0sV0FBVyxHQUFHO0lBQ2hCQyxNQUFNLEVBQUUsZ0JBQWdCO0lBQ3hCQyxHQUFHLEVBQUVKLEdBQUcsR0FBQyxNQUFNO0lBQ2ZLLElBQUksRUFBRU4sSUFBSTtJQUNWTyxXQUFXLEVBQUU7RUFDakIsQ0FBQztFQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sV0FBVyxDQUFDO0VBQ3hCLE1BQU1PLE9BQU8sR0FBRyxJQUFJWixnQkFBZ0IsQ0FBQ0ssV0FBVyxDQUFDO0VBQ2pELElBQUc7SUFDQyxNQUFNUSxRQUFRLEdBQUcsTUFBTVQsTUFBTSxDQUFDVSxJQUFJLENBQUNGLE9BQU8sQ0FBQztJQUMzQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0dBQW9HLENBQUM7SUFDakhELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxRQUFRLENBQUM7SUFDckJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9HQUFvRyxDQUFDO0lBRWpILE9BQU8sSUFBSTtFQUNmLENBQUMsQ0FDRCxPQUFNSSxHQUFHLEVBQUM7SUFDTkwsT0FBTyxDQUFDQyxHQUFHLENBQUMscUhBQXFILENBQUM7SUFDbElELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxHQUFHLENBQUM7SUFDaEJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFIQUFxSCxDQUFDO0VBQ3RJO0FBRUosQ0FBQyJ9