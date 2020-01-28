import { h } from "@stencil/core";
export class SiriusPage {
    inputHandler(event) {
        this.modelService.setModelValue(event.target["id"], event.target["value"]);
    }
    render() {
        const renderItem = (item) => h(item.tag, Object.assign({ "wf-element": true, onInput: this.inputHandler.bind(this) }, item, { context: this.page["context"], value: this.modelService.getComponentModelValue(item) }));
        if (this.page && this.page.components)
            return this.page.components.map(renderItem);
    }
    static get is() { return "sirius-page"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "page": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Page",
                "resolved": "Page",
                "references": {
                    "Page": {
                        "location": "import",
                        "path": "../../model/Page.model"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "modelService": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ModelService",
                "resolved": "ModelService",
                "references": {
                    "ModelService": {
                        "location": "import",
                        "path": "../../services/model.service"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
