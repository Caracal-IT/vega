import { Host, h } from "@stencil/core";
export class RigelRadio {
    inputHandler() {
        window
            .document
            .querySelectorAll("rigel-radio")
            .forEach(this.setCheckedState.bind(this));
        this.checked = true;
    }
    setCheckedState(radioButton) {
        if (this.group && radioButton.group === this.group)
            radioButton.checked = false;
    }
    render() {
        return h(Host, null,
            h("label", { class: "container" },
                this.caption,
                h("input", { type: "radio", name: "radio", onInput: this.inputHandler.bind(this), checked: this.checked }),
                h("span", { class: "checkmark" })));
    }
    static get is() { return "rigel-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["rigel-radio.css"]
    }; }
    static get styleUrls() { return {
        "$": ["rigel-radio.css"]
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
        "group": {
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
            "attribute": "group",
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
