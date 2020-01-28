import { ModelService } from "../../services/model.service";
import { Page } from "../../model/Page.model";
export declare class SiriusPage {
    page: Page;
    modelService: ModelService;
    inputHandler(event: Event): void;
    render(): any[];
}
