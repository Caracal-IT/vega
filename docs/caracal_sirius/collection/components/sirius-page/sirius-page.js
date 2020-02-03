import { h } from "@stencil/core";
export class SiriusPage {
    async inputHandler(event) {
        this.modelService.setModelValue(event.target["id"], event.target["value"]);
        if (!this.page.isDirty)
            return;
        await this.page.validate(this.page.context);
    }
    renderItem(item) {
        return [
            h(item.tag, Object.assign({ "wf-element": true, id: item.id, data: item, error: item["error"], errorMsg: item["errorMessage"], onInput: this.inputHandler.bind(this) }, item, { context: this.page["context"], value: this.modelService.getComponentModelValue(item), caption: this.modelService.getInterpolatedValue(item["caption"]) })),
            item.validators ? h("span", null, item["errorMessage"]) : null
        ];
    }
    render() {
        if (this.page && this.page.components)
            return this.page.components.map(this.renderItem.bind(this));
    }
    static get is() { return "sirius-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["sirius-page.css"]
    }; }
    static get styleUrls() { return {
        "$": ["sirius-page.css"]
    }; }
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
