import config from '../../config.js'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const s3Upload = async(body, key, wrappedConsole) => {
    const input = {
        "Body": body,
        "Bucket": config.qrBucket,
        "Key": key,
      };
      const command = new PutObjectCommand(input);
      try{
        const client = new S3Client();
        await client.send(command);
      }
      catch(error){
        wrappedConsole.error("Error while uploading data to s3 bucket", error)
        return false
      }
      return true
}