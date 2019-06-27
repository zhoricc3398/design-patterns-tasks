import { IRequest } from "./interfaces/Irequest";

export class Request implements IRequest {
    public url: string;
    public method: string;
    public payload: {};

    constructor() {
        this.url = "";
        this.method = "";
        this.payload = {};
    }
}
