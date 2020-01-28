import { Host, h } from "@stencil/core";
export class RigelHeader {
    constructor() {
        this.tag = '';
    }
    render() {
        this.tag = `h${this.size || 1}`;
        return h(Host, null,
            h(this.tag, null, this.caption));
    }
    static get is() { return "rigel-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rigel-header.css"]
    }; }
    static get styleUrls() { return {
        "$": ["rigel-header.css"]
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
        "size": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false
        }
    }; }
}
