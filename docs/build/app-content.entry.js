import { r as registerInstance, h, c as getElement } from './core-0df78be8.js';

const AppContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const urlParams = new URLSearchParams(window.location.search);
        const process = urlParams.get('process');
        const activity = urlParams.get('activity') || "start";
        const sessionId = urlParams.get('sessionId');
        const wf = this.el.shadowRoot.querySelector("sirius-wf");
        if (sessionId !== null)
            wf.setAttribute("wf-session-id", sessionId);
        if (process && activity)
            wf.hydrate(process, sessionId, activity);
    }
    render() {
        if (this.match && this.match.params.process) {
            return (h("sirius-wf", { "api-key": "da3156ae-fb51-4d09-80da-8f06b2d23504", process: this.match.params.process + ".wf.json", "base-url": "../wf/" }));
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  padding: 5px;\n}\n\nsirius-wf {\n  position:relative;\n  display: block;\n  top:40px;\n  text-align:center;\n  line-height:36px;\n  margin:auto;\n  width:450px;\n  min-height: 100px;\n  border:1px solid black;\n  border-radius:10px;\n  padding:5px;\n}"; }
};

export { AppContent as app_content };
