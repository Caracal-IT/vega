import { SiriusWf } from '../components/sirius-wf/sirius-wf';
import { WFService } from "../services/wf.service";
import { ModelService } from "../services/model.service";
import { Context } from "../model/Context.model";
import { HttpService } from "../services/http.service";
import { Process } from "../model/Process.model";
export declare class WFHandler {
    private http;
    private wfService;
    private modelService;
    private container;
    context: Context;
    currProcess: Process;
    currAction: string;
    lastAction: string;
    hasError: boolean;
    constructor(http: HttpService, wfService: WFService, modelService: ModelService, container: SiriusWf);
    handle(): void;
    private handleWfChange;
    private handleModelChanged;
    private executeActivity;
    private validate;
    private shouldSkipValidate;
    private actionExecuted;
    private handleError;
    private hasActivities;
    private canExecute;
    private sendMessage;
}
