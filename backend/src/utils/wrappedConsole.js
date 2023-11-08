import { v4 as uuidv4 } from "uuid";

export class WrappedConsole {
    constructor(reqType, routePath, jobId) {
        this.reqType = reqType
        this.routePath = routePath
        this.jobId = jobId
        this.reqId = uuidv4()
    }
    log(...args) {
        try{
            if (process.env.RUNNING_ENV==="local") {
                console.log(...args);
            } else if (process.env.RUNNING_ENV==="cloud") {
                console.log(["Log"], [this.jobId], [this.routePath], [this.reqType], [new Date()], [this.reqId], JSON.stringify(Array.from(args)));
            }
        }
        catch(e){
            console.log(["THIS_DATA_CAN_NOT_BE_STRINGIFY"]);
        }
        
    }
    error(...args) {
        try{
            if (process.env.RUNNING_ENV==="local") {
                console.log(...args);
            } else if (process.env.RUNNING_ENV==="cloud") {
                console.log(["Error"], [this.jobId], [this.routePath], [this.reqType], [new Date()], [this.reqId], JSON.stringify(Array.from(args)));
            }
        }
        catch(e){
            console.log(["THIS_DATA_CAN_NOT_BE_STRINGIFY"]);
        }
    }
}
