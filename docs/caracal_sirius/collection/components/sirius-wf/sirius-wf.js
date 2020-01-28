import { h } from "@stencil/core";
import { WFService } from "../../services/wf.service";
import { WFHandler } from "../../handlers/wf.handler";
import { ModelService } from "../../services/model.service";
export class SiriusWf {
    async addActivity(type, create) {
        this.wfService.addActivity(type, create);
    }
    async goto(activity) {
        this.wfService.setNextAction(activity);
    }
    async loadProcess(process) {
        this.page = null;
        this.wfService.setProcess(process);
    }
    async parse(processDef) {
        return this.wfService.parse(processDef);
    }
    async load(processDef) {
        if (typeof processDef === 'object')
            processDef = JSON.stringify(processDef);
        const process = this.wfService.parse(processDef);
        if (!process)
            return;
        return this.loadProcess(process);
    }
    async componentWillLoad() {
        this.wfService = new WFService();
        this.modelService = new ModelService();
        this.wfHandler = new WFHandler(this.wfService, this.modelService, this);
        this.wfHandler.handle();
    }
    render() {
        return h("sirius-page", { page: this.page, modelService: this.modelService });
    }
    static get is() { return "sirius-wf"; }
    static get encapsulation() { return "shadow"; }
    static get states() { return {
        "page": {}
    }; }
    static get events() { return [{
            "method": "wfMessage",
            "name": "wfMessage",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "addActivity": {
            "complexType": {
                "signature": "(type: string, create: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "goto": {
            "complexType": {
                "signature": "(activity: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "loadProcess": {
            "complexType": {
                "signature": "(process: Process) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Process": {
                        "location": "import",
                        "path": "../../model/Process.model"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "parse": {
            "complexType": {
                "signature": "(processDef: string) => Promise<Process>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Process": {
                        "location": "import",
                        "path": "../../model/Process.model"
                    }
                },
                "return": "Promise<Process>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "load": {
            "complexType": {
                "signature": "(processDef: string | object) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
