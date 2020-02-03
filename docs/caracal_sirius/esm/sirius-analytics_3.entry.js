import { r as registerInstance, h, c as createEvent } from './core-6488342f.js';

class AnalyticsService {
    sendMessage(event) {
        this.sendPostMessage(event.detail);
    }
    send(type, path) {
        const wfElement = path.find(i => i.hasAttribute && i.hasAttribute("wf-element"));
        if (!wfElement)
            return;
        const payload = this.createPayload(type, wfElement, path);
        if (payload) {
            this.sendPostMessage({
                type: payload.type,
                process: payload.process,
                activity: payload.activity,
                control: payload.control,
                valueHash: payload.valueHash,
                path: payload.wfPath.map(this.getName)
            });
        }
    }
    getPath(event) {
        return event.composedPath(event);
    }
    sendPostMessage(message) {
        const msg = Object.assign(Object.assign({}, message), { timestamp: Date.now() });
        console.log("ANALYTICS", msg);
        window.postMessage(msg, "*");
    }
    getName(item) {
        if (item.id)
            return item.id;
        if (item.page && item.page.name)
            return item.page.name;
        return "";
    }
    createPayload(type, wfElement, path) {
        const p = path.filter(i => i.nodeName && i.nodeName.indexOf("document-fragment") === -1);
        const wfPage = p.find(i => i.localName === "sirius-page");
        if (!wfPage)
            return null;
        const activity = Object.assign({}, wfPage.page);
        const wfPath = p.slice(0, p.indexOf(wfPage) + 1);
        if (!activity.name)
            return null;
        const process = activity.context.wfService.process.name;
        const act = activity.name;
        const control = wfElement.id;
        const valueHash = this.getHashCode(wfElement.value);
        return { type, process, activity: act, control, valueHash, wfPath };
    }
    getHashCode(value) {
        let hash = 0;
        let chr;
        if (!value || value.length === 0)
            return hash;
        for (let i = 0; i < value.length; i++) {
            chr = value.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
    ;
}

const SiriusAnalytics = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async analyticsHandler(event) {
        const path = SiriusAnalytics.analyticsService.getPath(event);
        if (SiriusAnalytics.lastPath[0] === path[0])
            return;
        SiriusAnalytics.lastPath = path;
        const wfElement = path.find((i) => i.hasAttribute && i.hasAttribute("wf-element"));
        if (!wfElement)
            return;
        path[0].addEventListener("blur", this.onBlur);
        SiriusAnalytics.analyticsService.send("click", path);
    }
    wfMessage(event) {
        SiriusAnalytics.analyticsService.sendMessage(event);
    }
    onBlur(event) {
        SiriusAnalytics.analyticsService.send("blur", SiriusAnalytics.lastPath);
        event.target.removeEventListener("blur", this.onBlur);
    }
};
SiriusAnalytics.lastPath = [null];
SiriusAnalytics.analyticsService = new AnalyticsService();

const SiriusPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async inputHandler(event) {
        this.modelService.setModelValue(event.target["id"], event.target["value"]);
        if (!this.page.isDirty)
            return;
        await this.page.validate(this.page.context);
    }
    renderItem(item) {
        return [
            h(item.tag, Object.assign({ "wf-element": true, id: item.id, data: item, error: item["error"], errorMsg: item["errorMessage"], onInput: this.inputHandler.bind(this) }, item, { context: this.page["context"], value: this.modelService.getComponentModelValue(item), caption: this.modelService.getInterpolatedValue(item["caption"]) })),
            item.validators ? h("span", null, item["errorMessage"]) : null
        ];
    }
    render() {
        if (this.page && this.page.components)
            return this.page.components.map(this.renderItem.bind(this));
    }
    static get style() { return "input[wf-element][data-error-style=true]{border:1px solid #000}[wf-element]{margin:0 2px}input[wf-element][error=true][data-error-style=true]{border:1px solid var(--error-color,red);background-color:var(--error-bg-color,pink)}span{display:inline-block;color:var(--error-color,red)}"; }
};

class IPC {
    constructor(parent, process, next) {
        this.parent = parent;
        this.process = process;
        this.next = next;
    }
}

class ValidationError extends Error {
    constructor() {
        super(...arguments);
        this.type = "ValidationError";
    }
}

class Validator {
    constructor(name) {
        this.name = name;
    }
}

class RequiredValidator extends Validator {
    validate(context, component, config) {
        const value = context.modelService.getModelValue(component.id);
        if (value == null || value == undefined || value.toString().trim().length == 0) {
            component["error"] = "true";
            component["errorMessage"] = config.message;
            return false;
        }
        return true;
    }
}

class Validators {
    constructor(context, component) {
        this.context = context;
        this.component = component;
    }
    static validate(context, component) {
        const validators = new Validators(context, component);
        const isValid = validators.validate();
        context.container.page = Object.assign({}, context.container.page);
        return isValid;
    }
    validate() {
        this.setErrorState(null);
        if (this.hasValidators())
            return this.executeValidators();
        return true;
    }
    hasValidators() {
        return this.component
            && this.component.validators
            && this.component.validators.length > 0;
    }
    executeValidators() {
        for (const config of this.component.validators) {
            const v = Validators.RegisteredValidators.find(v => v.name === config.name);
            if (v && !v.validate(this.context, this.component, config))
                return false;
        }
        return true;
    }
    setErrorState(errorMessage) {
        this.component["error"] = errorMessage && errorMessage.length > 0;
        this.component["errorMessage"] = errorMessage;
    }
}
Validators.RegisteredValidators = [
    new RequiredValidator("Required")
];

class PageActivity {
    constructor() {
        this.type = PageActivity.type;
        this.execute = (context) => {
            this.context = context;
            this.isDirty = false;
            this.components
                .filter(i => i.validators)
                .forEach(component => {
                component["error"] = "false";
                component["errorMessage"] = "";
            });
            setTimeout(this.reload.bind(this), 10);
        };
        this.validate = (context) => {
            return new Promise((resolve, reject) => {
                const validatedComponents = this.components.filter(i => i.validators);
                let isValid = true;
                this.isDirty = true;
                for (var component of validatedComponents)
                    isValid = isValid && Validators.validate(context, component);
                if (isValid)
                    resolve(true);
                else
                    reject(new ValidationError("Validation Failed"));
            });
        };
    }
    static create(act) {
        return Object.assign(new PageActivity(), act);
    }
    reload() {
        this.context.container.page = null;
        setTimeout(() => this.context.container.page = this, 15);
    }
}
PageActivity.type = "page-activity";

class CodeActivity {
    constructor() {
        this.type = CodeActivity.type;
        this.execute = (context) => {
            this.eval(this.expression, context);
            if (this.next && this.next.length > 0)
                context.wfService.setNextAction(this.next, this);
        };
    }
    static create(act) {
        return Object.assign(new CodeActivity(), act);
    }
    eval(expression, context) {
        const f = new Function('context', 'model', expression);
        return f(context, context.model);
    }
}
CodeActivity.type = "code-activity";

class DecisionActivity extends CodeActivity {
    constructor() {
        super(...arguments);
        this.type = DecisionActivity.type;
        this.execute = (context) => {
            const expression = `return ${this.left} ${this.equality} ${this.right};`;
            const result = super.eval(expression, context);
            if (result)
                context.wfService.setNextAction(this.trueAction, this);
            else
                context.wfService.setNextAction(this.falseAction, this);
        };
    }
    static create(act) {
        return Object.assign(new DecisionActivity(), act);
    }
}
DecisionActivity.type = "decision-activity";

class Url {
    constructor(rawUrl, method) {
        this.rawUrl = rawUrl;
        this.method = method;
    }
    get url() {
        return this.rawUrl;
    }
    get headers() {
        return {
            'Content-Type': 'application/json',
            'api-key': this.apiKey
        };
    }
}

class ModelUrl extends Url {
    constructor(rawUrl, method, modelService) {
        super(rawUrl, method);
        this.modelService = modelService;
    }
    get url() {
        return this.getUrlWithValuesFromModel();
    }
    getUrlWithValuesFromModel() {
        let newUrl = this.rawUrl;
        newUrl
            .match(/{[\w|\.]+}/g)
            .map(this.createValueItem.bind(this))
            .forEach((m) => newUrl = newUrl.replace(m.key, m.value || ''));
        return newUrl;
    }
    createValueItem(key) {
        const name = key.substring(1, key.length - 1);
        const value = this.modelService.getValue(name, this.modelService.getModel());
        return { key, value };
    }
}

class ApiActivity {
    constructor() {
        this.type = ApiActivity.type;
        this.execute = (context) => {
            const url = new ModelUrl(this.url, this.method, context.modelService);
            return context
                .http
                .fetch(url, this.mappings)
                .then(() => context.wfService.setNextAction(this.next, this));
        };
    }
    static create(act) {
        return Object.assign(new ApiActivity(), act);
    }
}
ApiActivity.type = "api-activity";

class AssignActivity {
    constructor() {
        this.type = AssignActivity.type;
        this.execute = (context) => {
            let value = this.value || "";
            if (this.value.startsWith("{") && this.value.endsWith("}"))
                value = context.modelService.getValue(this.value.substring(1, this.value.length - 1), context.model);
            context.modelService.setModelValue(this.key, value);
            context.wfService.setNextAction(this.next, this);
        };
    }
    static create(act) {
        return Object.assign(new AssignActivity(), act);
    }
}
AssignActivity.type = "assign-activity";

class IPCActivity {
    constructor() {
        this.type = IPCActivity.type;
        this.execute = (context) => {
            return context.container.ipc(this.process, this.next);
        };
    }
    static create(act) {
        return Object.assign(new IPCActivity(), act);
    }
}
IPCActivity.type = "ipc-activity";

class CompletedActivity {
    constructor() {
        this.type = CompletedActivity.type;
        this.execute = (context) => {
            return context.container.completed(context.container.process);
        };
    }
    static create(act) {
        return Object.assign(new CompletedActivity(), act);
    }
}
CompletedActivity.type = "completed-activity";

class RedirectActivity {
    constructor() {
        this.type = RedirectActivity.type;
        this.execute = (context) => {
            const sessionId = context.container.wfSessionId;
            context.container.dehydrate(sessionId);
            if (this.url.indexOf("?") === -1)
                document.location.href = `${this.url}?sessionId=${sessionId}`;
            else
                document.location.href = `${this.url}&sessionId=${sessionId}`;
        };
    }
    static create(act) {
        return Object.assign(new RedirectActivity(), act);
    }
}
RedirectActivity.type = "redirect-activity";

class ActivityFactory {
    static linkActivities(process) {
        process
            .activities
            .forEach(p => {
            const act = ActivityFactory.activities.find(a => a.type === p.type);
            if (act && act.create)
                Object.assign(p, act.create(p));
        });
    }
}
ActivityFactory.activities = [
    { type: PageActivity.type, create: PageActivity.create },
    { type: CodeActivity.type, create: CodeActivity.create },
    { type: DecisionActivity.type, create: DecisionActivity.create },
    { type: AssignActivity.type, create: AssignActivity.create },
    { type: ApiActivity.type, create: ApiActivity.create },
    { type: IPCActivity.type, create: IPCActivity.create },
    { type: CompletedActivity.type, create: CompletedActivity.create },
    { type: RedirectActivity.type, create: RedirectActivity.create }
];

class WFService {
    setNextAction(name, source) {
        this.action = name;
        if (this.wfChangeHandler)
            this.wfChangeHandler(this.action, this.process, source);
    }
    setProcess(process) {
        this.process = process;
    }
    getProcess() {
        return this.process;
    }
    addActivity(type, create) {
        const act = ActivityFactory.activities.find(a => a.type === type);
        if (!act)
            ActivityFactory.activities.push({ type, create });
    }
    parse(processDef) {
        try {
            const process = JSON.parse(processDef);
            ActivityFactory.linkActivities(process);
            return process;
        }
        catch (ex) {
            console.error(ex);
            return null;
        }
    }
}

var HttpVerb;
(function (HttpVerb) {
    HttpVerb["GET"] = "get";
    HttpVerb["POST"] = "post";
    HttpVerb["PUT"] = "put";
    HttpVerb["DELETE"] = "delete";
    HttpVerb["PATCH"] = "patch";
})(HttpVerb || (HttpVerb = {}));

var MappingDirection;
(function (MappingDirection) {
    MappingDirection["In"] = "in";
    MappingDirection["Out"] = "out";
    MappingDirection["InOut"] = "inout";
})(MappingDirection || (MappingDirection = {}));

class HttpService {
    constructor(modelService) {
        this.modelService = modelService;
    }
    async fetchData(url, body = null) {
        return this.fetch(url, null, body, false);
    }
    async fetch(url, mappings = null, body = null, setModel = true) {
        const response = await fetch(url.url, this.getConfig(url, mappings, body));
        const data = await response.json();
        if (!this.modelService || !setModel)
            return data;
        return this.setModelValues(data, mappings);
    }
    getConfig(url, mappings, body = null) {
        return {
            method: url.method,
            mode: 'cors',
            headers: url.headers,
            redirect: 'follow',
            referrer: 'no-referrer',
            body: body ? JSON.stringify(body) : this.getBody(url, mappings)
        };
    }
    getBody(url, mappings) {
        if (url.method === HttpVerb.GET || url.method === HttpVerb.DELETE)
            return null;
        let body = {};
        const model = this.modelService.getModel();
        mappings
            .filter(m => m.direction === MappingDirection.Out || m.direction === MappingDirection.InOut)
            .forEach(m => Object.assign(body, { [m.client]: this.modelService.getValue(m.client, model) }));
        return JSON.stringify(body);
    }
    setModelValues(data, mappings) {
        if (!mappings || mappings.length === 0)
            return Object.keys(data).forEach(k => this.modelService.setModelValue(k, data[k]));
        mappings
            .filter(m => m.direction === MappingDirection.Out || m.direction === MappingDirection.InOut)
            .forEach(m => this.modelService.setModelValue(m.client, this.modelService.getValue(m.remote, data)));
    }
}

class ModelService {
    constructor() {
        this.model = {};
        this.onInput = this.inputHandler.bind(this);
    }
    setModelValue(name, value) {
        this.model = this.merge(this.model, name, value);
        if (this.modelChangedHandler)
            this.modelChangedHandler(this.model);
    }
    getComponentModelValue(component) {
        const model = this.getModel();
        let value;
        if (component && component.id && model)
            value = this.getModelValue(component.id);
        if (value === undefined && component.value) {
            value = component.value;
            this.setModelValue(component.id, value);
        }
        return value;
    }
    getModelValue(key) {
        return this.getValue(key, this.getModel());
    }
    getInterpolatedValue(value) {
        if (!value)
            return value;
        const myRegexp = /\{\{(?:(\w|\.)+)\}\}/g;
        const match = value.match(myRegexp);
        if (!match || match.length === 0)
            return value;
        return match.reduce((prev, curr) => this.replaceAll(prev, curr), value);
    }
    getModel() {
        return Object.assign({}, this.model);
    }
    setModel(model) {
        this.model = Object.assign({}, model);
    }
    getValue(key, model) {
        return key.split(".").reduce((total, currentElement) => total ? total[currentElement] : undefined, model);
    }
    replaceAll(value, key) {
        const newValue = this.getModelValue(key.substring(2, key.length - 2));
        return value.replace(key, newValue);
    }
    inputHandler(event) {
        const target = event.currentTarget;
        const wfElement = target.closest("[wf-element]");
        this.setModelValue(wfElement.id, wfElement["value"]);
    }
    merge(model, name, value) {
        if (!name)
            return;
        let newModel = Object.assign({}, model);
        name
            .split(".")
            .reduce((total, current, index, arr) => {
            total[current] = index == arr.length - 1 ? value : Object.assign({}, total[current]);
            return total[current];
        }, newModel);
        return newModel;
    }
}

class PersistanceService {
    setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key) {
        const value = sessionStorage.getItem(key);
        if (!value)
            return null;
        return JSON.parse(value);
    }
    clear() {
        sessionStorage.clear();
    }
}

var MessageType;
(function (MessageType) {
    MessageType["StartLoading"] = "START_LOADING";
    MessageType["EndLoading"] = "END_LOADING";
    MessageType["Error"] = "ERROR";
    MessageType["ValidationError"] = "VALIDATION_ERROR";
    MessageType["Workflow_Changing"] = "WORKFLOW_CHANGING";
    MessageType["Workflow_Changed"] = "WORKFLOW_CHANGED";
})(MessageType || (MessageType = {}));

class Message {
    constructor(messageType, description, stack) {
        this.messageType = messageType;
        this.description = description;
        this.stack = stack;
    }
}

class Context {
    constructor(model, modelService, wfService, http, container) {
        this.model = model;
        this.modelService = modelService;
        this.wfService = wfService;
        this.http = http;
        this.container = container;
    }
}

class WFHandler {
    constructor(http, wfService, modelService, container) {
        this.http = http;
        this.wfService = wfService;
        this.modelService = modelService;
        this.container = container;
        this.hasError = false;
        this.context = new Context({}, this.modelService, this.wfService, this.http, this.container);
    }
    handle() {
        this.wfService.wfChangeHandler = this.handleWfChange.bind(this);
        this.modelService.modelChangedHandler = this.handleModelChanged.bind(this);
    }
    handleWfChange(action, process, source) {
        this.hasError = false;
        this.currProcess = process;
        this.currAction = action || "start";
        setTimeout(() => {
            this.setWorkflowStatus();
            this.sendMessage(new Message(MessageType.Workflow_Changing, this.getWorkflowStatus()));
            this.executeActivity(source);
        }, 10);
    }
    handleModelChanged(model) {
        this.context.model = model;
    }
    executeActivity(source) {
        if (!this.hasActivities())
            return;
        const act = this.currProcess.activities.find((p) => p.name === this.currAction);
        if (this.canExecute(act)) {
            this.hasError = false;
            this.sendMessage(new Message(MessageType.StartLoading, "Loading..."));
            this.validate(source)
                .then(() => act.execute(this.context))
                .then(() => this.actionExecuted())
                .catch((error) => this.handleError(error));
        }
    }
    async validate(source) {
        if (this.shouldSkipValidate(source))
            return true;
        const act = this.currProcess.activities.find((p) => p.name === this.lastAction);
        if (act && act.validate)
            return act.validate(this.context);
    }
    shouldSkipValidate(source) {
        return (source && source.data && source.data.noValidate)
            || (this.currAction === this.lastAction);
    }
    actionExecuted() {
        this.sendMessage(new Message(MessageType.EndLoading));
        this.sendMessage(new Message(MessageType.Workflow_Changed, this.getWorkflowStatus()));
        if (!this.hasError)
            this.lastAction = this.currAction;
    }
    handleError(error) {
        this.hasError = true;
        this.sendMessage(new Message(MessageType.EndLoading));
        this.modelService.setModelValue("message", new Message(MessageType.EndLoading, error.message));
        if (error instanceof ValidationError)
            this.sendMessage(new Message(MessageType.ValidationError, error.message, error.stack));
        else
            this.sendMessage(new Message(MessageType.Error, error.message, error.stack));
        this.sendMessage(new Message(MessageType.Workflow_Changed, this.getWorkflowStatus()));
    }
    hasActivities() {
        return this.currProcess && this.currProcess.activities;
    }
    canExecute(act) {
        return act && act.execute;
    }
    sendMessage(message) {
        const msg = Object.assign(Object.assign({}, message), { process: this.wfProcess, activity: this.wfAction, wfSessionId: this.context.container.wfSessionId });
        this.modelService.setModelValue("message", msg);
        this.context.container.wfMessage.emit(msg);
    }
    setWorkflowStatus() {
        this.wfAction = this.currAction;
        this.wfProcess = this.currProcess.name;
    }
    getWorkflowStatus() {
        return JSON.stringify({
            process: this.wfProcess,
            activity: this.wfAction
        });
    }
}

class WFLoaderHandler {
    constructor(http) {
        this.http = http;
    }
    load(process) {
        const url = new Url(`${this.baseUrl}\\${process}`, HttpVerb.GET);
        url.apiKey = this.apiKey;
        return this.http
            .fetchData(url);
    }
}

const SiriusWf = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ipcHistory = [];
        this.wfMessage = createEvent(this, "wfMessage", 7);
    }
    validateName(newValue, oldValue) {
        if (newValue === oldValue || newValue === "")
            return;
        this.loadUrl(newValue);
    }
    async addActivity(type, create) {
        this.wfService.addActivity(type, create);
    }
    async goto(activity) {
        this.wfService.setNextAction(activity, this);
    }
    async loadProcess(processDef, activity = "start") {
        if (typeof processDef === 'object')
            processDef = JSON.stringify(processDef);
        const process = this.wfService.parse(processDef);
        if (!process)
            return;
        this.page = null;
        this.wfService.setProcess(process);
        this.goto(activity);
    }
    async loadUrl(process, activity = "start") {
        try {
            await this.loadProcess(await this.wfLoaderHandler.load(process), activity);
            this.process = process;
            return this.wfService.getProcess();
        }
        catch (Exception) { }
    }
    async hydrate(process, sessionId, activity = "start") {
        this.wfSessionId = sessionId;
        const ipc = this.persistance.getItem(`${sessionId}_IPC`) || [];
        const model = this.persistance.getItem(`${sessionId}_MODEL`) || this.modelService.getModel();
        this.loadUrl(process, activity);
        this.ipcHistory = ipc;
        this.modelService.setModel(model);
    }
    async dehydrate(sessionId) {
        this.persistance.clear();
        this.persistance.setItem(`${sessionId}_IPC`, this.ipcHistory);
        this.persistance.setItem(`${sessionId}_MODEL`, this.modelService.getModel());
    }
    async ipc(process, next = null) {
        try {
            this.ipcHistory.push(new IPC(this.process, process, next));
            this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
            await this.loadUrl(process, "start");
        }
        catch (Exception) { }
    }
    async completed(process) {
        const lastProcess = this.ipcHistory.pop();
        this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
        if (!lastProcess || lastProcess.process !== process) {
            this.ipcHistory = [];
            this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
            return;
        }
        try {
            await this.loadUrl(lastProcess.parent, lastProcess.next || "start");
        }
        catch (Exception) { }
    }
    async componentWillLoad() {
        this.persistance = new PersistanceService();
        this.wfSessionId = this.wfSessionId || this.UUID();
        this.wfService = new WFService();
        this.modelService = new ModelService();
        this.http = new HttpService(this.modelService);
        this.wfHandler = new WFHandler(this.http, this.wfService, this.modelService, this);
        this.wfHandler.handle();
        this.wfLoaderHandler = new WFLoaderHandler(this.http);
        this.wfLoaderHandler.apiKey = this.apiKey;
        this.wfLoaderHandler.baseUrl = this.baseUrl;
        if (this.process)
            this.loadUrl(this.process);
    }
    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    render() {
        return h("sirius-page", { page: this.page, modelService: this.modelService });
    }
    static get watchers() { return {
        "process": ["validateName"]
    }; }
};

export { SiriusAnalytics as sirius_analytics, SiriusPage as sirius_page, SiriusWf as sirius_wf };
