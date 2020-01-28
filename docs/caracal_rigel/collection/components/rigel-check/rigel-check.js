import { Host, h } from "@stencil/core";
export class RigelCheck {
    render() {
        return h(Host, null,
            h("label", { class: "container" },
                this.caption,
                h("input", { type: "checkbox", checked: this.checked }),
                h("span", { class: "checkmark" })));
    }
    static get is() { return "rigel-check"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rigel-check.css"]
    }; }
    static get styleUrls() { return {
        "$": ["rigel-check.css"]
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
        "checked": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "checked",
            "reflect": true
        }
    }; }
}
