import { Context } from "../model/Context.model";
import { HttpVerb } from "../model/http/HttpVerb";
import { Mapping } from "../model/http/Mapping";
export declare class ApiActivity {
    static type: string;
    static create(act: any): any;
    url: string;
    method: HttpVerb;
    mappings: Array<Mapping>;
    next: string;
    type: string;
    execute: (context: Context) => Promise<void>;
}
