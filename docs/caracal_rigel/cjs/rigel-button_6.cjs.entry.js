'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-e539ec59.js');

const RigelButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    clickHandler() {
        if (this.hasContext)
            this.context.wfService.setNextAction(this.next);
    }
    render() {
        return core.h("button", { onClick: this.clickHandler.bind(this) }, this.caption);
    }
    hasContext() {
        return this.context && this.context.wfService && this.context.wfService.setNextAction;
    }
    static get style() { return "button{cursor:pointer;color:var(--primary-color,#fff);background-color:var(--primary-bg-color,purple);min-width:9rem;border:1px solid var(--primary-border-color,#757575);border-radius:5px;padding:.5rem;margin:0 .1rem;font:inherit;font-size:1rem}button:hover{color:var(--primary-alt-color,#000);background-color:var(--primary-alt-bg-color,plum);-webkit-box-shadow:3px 4px 4px rgba(0,0,0,.5);box-shadow:3px 4px 4px rgba(0,0,0,.5)}button:active:hover{-webkit-box-shadow:1px 2px 2px rgba(0,0,0,.5);box-shadow:1px 2px 2px rgba(0,0,0,.5)}button:focus{outline:none;-webkit-box-shadow:3px 4px 4px rgba(0,0,0,.5);box-shadow:3px 4px 4px rgba(0,0,0,.5)}"; }
};

const RigelCheck = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h(core.Host, null, core.h("label", { class: "container" }, this.caption, core.h("input", { type: "checkbox", checked: this.checked }), core.h("span", { class: "checkmark" })));
    }
    static get style() { return ".container{display:block;position:relative;padding-left:1.7rem;cursor:pointer;font-size:1.1rem;color:var(--primary-bg-color,purple);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:20px;width:20px;background-color:#eee}.container:hover input~.checkmark{background-color:#ccc}.container input:checked~.checkmark{background-color:var(--primary-bg-color,purple)}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{left:6px;top:3px;width:5px;height:8px;border:solid var(--primary-color,#fff);border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}"; }
};

const RigelField = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h(core.Host, null, core.h("input", { type: this.type, value: this.value, onInput: (e) => this.value = e.target.value, required: true }), core.h("span", { class: "bar" }), core.h("label", null, this.caption));
    }
    static get style() { return "*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:inline-block;margin:1rem 0 .3rem;width:350px}input{font-size:1rem;padding:.8rem .8rem .8rem .4rem;display:block;width:100%;border:none;border-bottom:1px solid var(--primary-border-color,#757575)}input:focus{outline:none}label{color:var(--placeholder-color,#999);font-size:1.2rem;font-weight:400;position:absolute;pointer-events:none;left:.4rem;top:.8rem;transition:all .2s ease;-moz-transition:.2s ease all;-webkit-transition:all .2s ease}input:focus~label,input:valid~label{top:-.7rem;font-size:.8rem;color:var(--primary-bg-color,purple)}.bar{position:relative;display:block;width:100%}.bar:after,.bar:before{content:\"\";height:2px;width:0;bottom:1px;position:absolute;background:var(--primary-bg-color,purple);transition:all .2s ease;-moz-transition:.2s ease all;-webkit-transition:all .2s ease}.bar:before{left:50%}.bar:after{right:50%}input:focus~.bar:after,input:focus~.bar:before{width:50%}\@-webkit-keyframes inputHighlighter{0%{background:var(--primary-bg-color,purple)}to{width:0;background:transparent}}\@-moz-keyframes inputHighlighter{0%{background:var(--primary-bg-color,purple)}to{width:0;background:transparent}}\@keyframes inputHighlighter{0%{background:var(--primary-bg-color,purple)}to{width:0;background:transparent}}"; }
};

const RigelHeader = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.tag = '';
    }
    render() {
        this.tag = `h${this.size || 1}`;
        return core.h(core.Host, null, core.h(this.tag, null, this.caption));
    }
    static get style() { return ":host{color:var(--primary-bg-color,purple)}"; }
};

const RigelLabel = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.tag = '';
    }
    render() {
        return core.h(core.Host, null, core.h("label", null, this.caption));
    }
    static get style() { return ":host{color:var(--secondary-bg-color,#555)}"; }
};

const RigelRadio = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
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
        return core.h(core.Host, null, core.h("label", { class: "container" }, this.caption, core.h("input", { type: "radio", name: "radio", onInput: this.inputHandler.bind(this), checked: this.checked }), core.h("span", { class: "checkmark" })));
    }
    static get style() { return ".container{display:block;position:relative;padding-left:1.7rem;padding-bottom:.6rem;cursor:pointer;font-size:1.1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark{position:absolute;top:0;left:0;height:20px;width:20px;background-color:#eee;border-radius:50%}.container:hover input~.checkmark{background-color:#ccc}.container input:checked~.checkmark{background-color:var(--primary-bg-color,purple)}.checkmark:after{content:\"\";position:absolute;display:none}.container input:checked~.checkmark:after{display:block}.container .checkmark:after{top:5px;left:5px;width:9px;height:9px;border-radius:50%;background:var(--primary-color,#fff)}"; }
};

exports.rigel_button = RigelButton;
exports.rigel_check = RigelCheck;
exports.rigel_field = RigelField;
exports.rigel_header = RigelHeader;
exports.rigel_label = RigelLabel;
exports.rigel_radio = RigelRadio;