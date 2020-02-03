import { r as registerInstance, h } from './core-0df78be8.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("app-loader", null), h("header", null, h("h1", null, "Stencil App Starter")), h("aside", null, h("app-menu", null)), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'app-home', exact: true }), h("stencil-route", { url: '/content/:process', component: 'app-content' }))))));
    }
    static get style() { return "div {\n  height: 100vh;\n}\n\nheader {\n  background: #5851ff;\n  color: white;\n  height: 56px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nh1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n}\n\naside {\n  position: absolute;\n  display: inline-block;\n  width: 200px;\n  height: calc(100% - 56px);\n  border-right: 1px solid #5851ff;\n}\n\nmain {\n  position: relative;\n  display: inline-block;\n  left: 200px;\n  width: calc(100% - 220px);\n  padding: 10px;\n}"; }
};

export { AppRoot as app_root };
