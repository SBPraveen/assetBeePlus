import { v4 as uuidv4 } from "uuid";

export class WrappedConsole {
    constructor(reqType, routePath) {
        this.reqType = reqType
        this.routePath = routePath
        this.reqId = uuidv4()
    }
    log(...args) {
        try {
            if (process.env.RUNNING_ENV === "local") {
                console.log(...args);
            } else if (process.env.RUNNING_ENV === "cloud") {
                console.log(["Log"], ["routePath: " + this.routePath], ["reqType: " + this.reqType], ["logTimeStamp: " + new Date()], ["reqId: " + this.reqId], JSON.stringify(Array.from(args)));
            }
        }
        catch (e) {
            console.log(["THIS_DATA_CAN_NOT_BE_STRINGIFY"]);
        }

    }
    error(...args) {
        try {
            if (process.env.RUNNING_ENV === "local") {
                console.log(...args);
            } else if (process.env.RUNNING_ENV === "cloud") {
                console.log(["Error"], ["routePath: " + this.routePath], ["reqType: " + this.reqType], ["logTimeStamp: " + new Date()], ["reqId: " + this.reqId], JSON.stringify(Array.from(args)));
            }
        }
        catch (e) {
            console.log(["THIS_DATA_CAN_NOT_BE_STRINGIFY"]);
        }
    }
}
