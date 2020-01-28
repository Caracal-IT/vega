export class Context {
    constructor(model, modelService, wfService, http, container) {
        this.model = model;
        this.modelService = modelService;
        this.wfService = wfService;
        this.http = http;
        this.container = container;
    }
}
