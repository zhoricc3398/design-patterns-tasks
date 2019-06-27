import { IRequest } from "./Irequest";

export interface IRequestBuilder {
    forUrl: (url: string) => IRequestBuilder;
    useMethod: (method: string) => IRequestBuilder;
    payload: (payload: {}) => IRequestBuilder;
    build: () => IRequest;
}
