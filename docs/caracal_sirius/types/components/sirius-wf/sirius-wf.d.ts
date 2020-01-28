import { EventEmitter } from "../../stencil.core";
import { Page } from "../../model/Page.model";
import { Process } from "../../model/Process.model";
import { WFService } from "../../services/wf.service";
import { WFHandler } from "../../handlers/wf.handler";
import { Context } from "../../model/Context.model";
import { ModelService } from "../../services/model.service";
export declare class SiriusWf {
    context: Context;
    wfService: WFService;
    modelService: ModelService;
    wfHandler: WFHandler;
    wfMessage: EventEmitter;
    page: Page;
    addActivity(type: string, create: any): Promise<void>;
    goto(activity: string): Promise<void>;
    loadProcess(process: Process): Promise<void>;
    parse(processDef: string): Promise<Process>;
    load(processDef: string | object): Promise<void>;
    componentWillLoad(): Promise<void>;
    render(): any;
}
