interface IRequest {
    url: string,
    method: string,
    payload: {}
}

interface IRequestBuilder {
    forUrl: (url: string),
    useMethod:,
    payload:,
    build:
}

class Request implements IRequest {
    constructor(public url, public method, public payload) {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

class RequestBuilder {
    public request
    constructor() {
        this.request = new Request();
    }

    forUrl(url) {
        this.request.url = url;
        return this;
    }

    useMethod(method) {
        this.request.method = method;
        return this;
    }

    payload(payload) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

export default RequestBuilder;