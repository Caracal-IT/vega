import { ModelService } from "./model.service";
import { Mapping } from "../model/http/Mapping";
import { Url } from "../model/http/Url";
export declare class HttpService {
    private modelService;
    constructor(modelService: ModelService);
    fetch(url: Url, mappings: Array<Mapping>): Promise<any>;
    private getConfig;
    private getBody;
    private setModelValues;
}
