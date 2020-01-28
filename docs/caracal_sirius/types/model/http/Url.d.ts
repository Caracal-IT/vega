import { HttpVerb } from "./HttpVerb";
export declare class Url {
    rawUrl: string;
    method: HttpVerb;
    constructor(rawUrl: string, method: HttpVerb);
    get url(): string;
    get headers(): {
        'Content-Type': string;
    };
}
