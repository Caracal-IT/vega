import { r as registerInstance, h } from './core-0df78be8.js';

const AppMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("stencil-route-link", { url: '/vega' }, h("i", { class: "material-icons" }, "home"), "Home"), h("stencil-route-link", { url: '/content/login' }, h("i", { class: "material-icons" }, "lock_open"), "Login"), h("stencil-route-link", { url: '/content/register' }, h("i", { class: "material-icons" }, "account_box"), "Register"), h("stencil-route-link", { url: '/content/banking' }, h("i", { class: "material-icons" }, "account_balance"), "Banking")));
    }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n\ndiv {\n  height: calc(100% - 5px);\n  padding-top: 5px;\n  padding-left: 5px;\n  font-size: 1.2rem;\n}\n\na {\n  display: block;\n  text-decoration: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  line-height: 2rem;\n}"; }
};

export { AppMenu as app_menu };
