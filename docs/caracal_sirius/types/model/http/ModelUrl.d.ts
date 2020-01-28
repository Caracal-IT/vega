import { ModelService } from "../../services/model.service";
import { Url } from "./Url";
import { HttpVerb } from "./HttpVerb";
export declare class ModelUrl extends Url {
    private modelService;
    constructor(rawUrl: string, method: HttpVerb, modelService: ModelService);
    get url(): string;
    private getUrlWithValuesFromModel;
    private createValueItem;
}
