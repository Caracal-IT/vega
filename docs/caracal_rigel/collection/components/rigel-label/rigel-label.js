import { Host, h } from "@stencil/core";
export class RigelLabel {
    constructor() {
        this.tag = '';
    }
    render() {
        return h(Host, null,
            h("label", null, this.caption));
    }
    static get is() { return "rigel-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rigel-label.css"]
    }; }
    static get styleUrls() { return {
        "$": ["rigel-label.css"]
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
        }
    }; }
}
