import { HttpVerb } from "./HttpVerb";
export declare class Url {
    rawUrl: string;
    method: HttpVerb;
    apiKey: string;
    constructor(rawUrl: string, method: HttpVerb);
    get url(): string;
    get headers(): {
        'Content-Type': string;
        'api-key': string;
    };
}
