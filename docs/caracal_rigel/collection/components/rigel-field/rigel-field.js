import { Host, h } from "@stencil/core";
export class RigelField {
    render() {
        return h(Host, null,
            h("input", { type: this.type, value: this.value, onInput: (e) => this.value = e.target.value, required: true }),
            h("span", { class: "bar" }),
            h("label", null, this.caption));
    }
    static get is() { return "rigel-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rigel-field.css"]
    }; }
    static get styleUrls() { return {
        "$": ["rigel-field.css"]
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
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "value": {
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
            "attribute": "value",
            "reflect": true
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
