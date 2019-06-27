import { IRequest } from "./interfaces/Irequest";
import { IRequestBuilder } from "./interfaces/Irequestbuilder";
import { Request } from "./request";

class RequestBuilder implements IRequestBuilder {
    public request: IRequest;

    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    public payload(payload: {}) {
        this.request.payload = payload;
        return this;
    }

    public build() {
        return this.request;
    }

}

export default RequestBuilder;
