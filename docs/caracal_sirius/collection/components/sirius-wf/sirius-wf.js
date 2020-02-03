import { h } from "@stencil/core";
import { IPC } from "../../model/ipc.model";
import { WFService } from "../../services/wf.service";
import { HttpService } from "../../services/http.service";
import { ModelService } from "../../services/model.service";
import { PersistanceService } from "../../services/persistance.service";
import { WFHandler } from "../../handlers/wf.handler";
import { WFLoaderHandler } from "../../handlers/wfLoader.handler";
export class SiriusWf {
    constructor() {
        this.ipcHistory = [];
    }
    validateName(newValue, oldValue) {
        if (newValue === oldValue || newValue === "")
            return;
        this.loadUrl(newValue);
    }
    async addActivity(type, create) {
        this.wfService.addActivity(type, create);
    }
    async goto(activity) {
        this.wfService.setNextAction(activity, this);
    }
    async loadProcess(processDef, activity = "start") {
        if (typeof processDef === 'object')
            processDef = JSON.stringify(processDef);
        const process = this.wfService.parse(processDef);
        if (!process)
            return;
        this.page = null;
        this.wfService.setProcess(process);
        this.goto(activity);
    }
    async loadUrl(process, activity = "start") {
        try {
            await this.loadProcess(await this.wfLoaderHandler.load(process), activity);
            this.process = process;
            return this.wfService.getProcess();
        }
        catch (Exception) { }
    }
    async hydrate(process, sessionId, activity = "start") {
        this.wfSessionId = sessionId;
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
        this.wfSessionId = this.wfSessionId || this.UUID();
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
    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    render() {
        return h("sirius-page", { page: this.page, modelService: this.modelService });
    }
    static get is() { return "sirius-wf"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "wfSessionId": {
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
            "attribute": "wf-session-id",
            "reflect": true
        },
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
                "signature": "(process: string, activity?: string) => Promise<import(\"D:/Development/Labs/Ettiene/sirius/src/model/Process.model\").Process>",
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
                        "location": "global"
                    }
                },
                "return": "Promise<Process>"
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
    static get watchers() { return [{
            "propName": "process",
            "methodName": "validateName"
        }]; }
}
