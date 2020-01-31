import { h } from "@stencil/core";
import { WFService } from "../../services/wf.service";
import { WFHandler } from "../../handlers/wf.handler";
import { ModelService } from "../../services/model.service";
import { WFLoaderHandler } from "../../handlers/wfLoader.handler";
import { HttpService } from "../../services/http.service";
import { PersistanceService } from "../../services/persistance.service";
export class SiriusWf {
    constructor() {
        this.ipcHistory = [];
    }
    async addActivity(type, create) {
        this.wfService.addActivity(type, create);
    }
    async goto(activity) {
        this.wfService.setNextAction(activity, this);
    }
    async loadProcess(process, activity = "start") {
        this.page = null;
        this.wfService.setProcess(process);
        this.goto(activity);
    }
    async parse(processDef) {
        return this.wfService.parse(processDef);
    }
    async load(processDef, activity = "start") {
        if (typeof processDef === 'object')
            processDef = JSON.stringify(processDef);
        const process = this.wfService.parse(processDef);
        if (!process)
            return;
        return this.loadProcess(process, activity);
    }
    async loadUrl(process, activity = "start") {
        try {
            await this.load(await this.wfLoaderHandler.load(process), activity);
            this.process = process;
        }
        catch (Exception) { }
    }
    async hydrate(process, sessionId, activity = "start") {
        const ipc = this.persistance.getItem(`${sessionId}_IPC`) || [];
        const model = this.persistance.getItem(`${sessionId}_MODEL`) || this.modelService.getModel();
        this.loadUrl(process, activity);
        this.ipcHistory = ipc;
        this.modelService.setModel(model);
    }
    async dehydrate(sessionId) {
        this.persistance.clear();
        this.persistance.setItem(`${sessionId}_IPC`, this.ipcHistory);
        this.persistance.setItem(`${sessionId}_MODEL`, this.modelService.getModel());
    }
    async ipc(process, next = null) {
        try {
            this.ipcHistory.push(new IPC(this.process, process, next));
            this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
            await this.loadUrl(process, "start");
        }
        catch (Exception) { }
    }
    async completed(process) {
        const lastProcess = this.ipcHistory.pop();
        this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
        if (!lastProcess || lastProcess.process !== process) {
            this.ipcHistory = [];
            this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
            return;
        }
        try {
            await this.loadUrl(lastProcess.parent, lastProcess.next || "start");
        }
        catch (Exception) { }
    }
    async componentWillLoad() {
        this.persistance = new PersistanceService();
        this.wfService = new WFService();
        this.modelService = new ModelService();
        this.http = new HttpService(this.modelService);
        this.wfHandler = new WFHandler(this.http, this.wfService, this.modelService, this);
        this.wfHandler.handle();
        this.wfLoaderHandler = new WFLoaderHandler(this.http);
        this.wfLoaderHandler.apiKey = this.apiKey;
        this.wfLoaderHandler.baseUrl = this.baseUrl;
        if (this.process)
            this.loadUrl(this.process);
    }
    render() {
        return h("sirius-page", { page: this.page, modelService: this.modelService });
    }
    static get is() { return "sirius-wf"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "baseUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "base-url",
            "reflect": false
        },
        "apiKey": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "api-key",
            "reflect": false
        },
        "process": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "process",
            "reflect": true
        }
    }; }
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
                "signature": "(process: Process, activity?: string) => Promise<void>",
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
                "signature": "(processDef: string | object, activity?: string) => Promise<void>",
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
        "loadUrl": {
            "complexType": {
                "signature": "(process: string, activity?: string) => Promise<void>",
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
        "hydrate": {
            "complexType": {
                "signature": "(process: string, sessionId: string, activity?: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
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
        "dehydrate": {
            "complexType": {
                "signature": "(sessionId: string) => Promise<void>",
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
class IPC {
    constructor(parent, process, next) {
        this.parent = parent;
        this.process = process;
        this.next = next;
    }
}
