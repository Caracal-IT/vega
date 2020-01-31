import { ModelService } from "../../services/model.service";
import { Page } from "../../model/Page.model";
import { WebComponent } from "../../model/WebComponent.model";
export declare class SiriusPage {
    page: Page;
    modelService: ModelService;
    inputHandler(event: Event): Promise<void>;
    renderItem(item: WebComponent): any[];
    render(): unknown[];
}
