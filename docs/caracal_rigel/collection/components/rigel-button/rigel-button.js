import { h } from "@stencil/core";
export class RigelButton {
    clickHandler() {
        if (this.hasContext)
            this.context.wfService.setNextAction(this.next, this);
    }
    render() {
        return h("button", { onClick: this.clickHandler.bind(this) }, this.caption);
    }
    hasContext() {
        return this.context && this.context.wfService && this.context.wfService.setNextAction;
    }
    static get is() { return "rigel-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rigel-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["rigel-button.css"]
    }; }
    static get properties() { return {
        "caption": {
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
            "attribute": "caption",
            "reflect": false
        },
        "next": {
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
            "attribute": "next",
            "reflect": false
        },
        "context": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Context",
                "resolved": "Context",
                "references": {
                    "Context": {
                        "location": "import",
                        "path": "../../types/model/Context.model"
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
