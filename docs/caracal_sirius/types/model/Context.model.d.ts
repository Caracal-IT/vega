import { SiriusWf } from './../components/sirius-wf/sirius-wf';
import { ModelService } from './../services/model.service';
import { WFService } from './../services/wf.service';
import { HttpService } from '../services/http.service';
export declare class Context {
    model: any;
    modelService: ModelService;
    wfService: WFService;
    http: HttpService;
    container: SiriusWf;
    constructor(model: any, modelService: ModelService, wfService: WFService, http: HttpService, container: SiriusWf);
}
