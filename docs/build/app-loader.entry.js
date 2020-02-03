import { r as registerInstance, h } from './core-0df78be8.js';

const AppLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    wfMessageHandler(event) {
        const message = event.detail;
        if (message.messageType === "START_LOADING")
            this.visible = true;
        if (message.messageType === "END_LOADING")
            this.visible = false;
    }
    render() {
        if (this.visible)
            return h("div", null);
    }
    static get style() { return "div {\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  z-index: 99999999;\n  background: rgba(0, 0, 0, 0.611);\n}\n\ndiv::after {\n  content: \"Loading...\";\n  position: absolute;\n  display: block;\n  background-color: white;\n  width: 6rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  font-weight: bolder;\n  font-size: 1.2rem;\n  color: blueviolet;\n  border: 1px solid black;\n  border-radius: 5px;\n\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}"; }
};

export { AppLoader as app_loader };
