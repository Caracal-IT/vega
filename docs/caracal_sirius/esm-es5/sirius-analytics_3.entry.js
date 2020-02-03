var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, c as createEvent } from './core-6488342f.js';
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService() {
    }
    AnalyticsService.prototype.sendMessage = function (event) {
        this.sendPostMessage(event.detail);
    };
    AnalyticsService.prototype.send = function (type, path) {
        var wfElement = path.find(function (i) { return i.hasAttribute && i.hasAttribute("wf-element"); });
        if (!wfElement)
            return;
        var payload = this.createPayload(type, wfElement, path);
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
    };
    AnalyticsService.prototype.getPath = function (event) {
        return event.composedPath(event);
    };
    AnalyticsService.prototype.sendPostMessage = function (message) {
        var msg = Object.assign(Object.assign({}, message), { timestamp: Date.now() });
        console.log("ANALYTICS", msg);
        window.postMessage(msg, "*");
    };
    AnalyticsService.prototype.getName = function (item) {
        if (item.id)
            return item.id;
        if (item.page && item.page.name)
            return item.page.name;
        return "";
    };
    AnalyticsService.prototype.createPayload = function (type, wfElement, path) {
        var p = path.filter(function (i) { return i.nodeName && i.nodeName.indexOf("document-fragment") === -1; });
        var wfPage = p.find(function (i) { return i.localName === "sirius-page"; });
        if (!wfPage)
            return null;
        var activity = Object.assign({}, wfPage.page);
        var wfPath = p.slice(0, p.indexOf(wfPage) + 1);
        if (!activity.name)
            return null;
        var process = activity.context.wfService.process.name;
        var act = activity.name;
        var control = wfElement.id;
        var valueHash = this.getHashCode(wfElement.value);
        return { type: type, process: process, activity: act, control: control, valueHash: valueHash, wfPath: wfPath };
    };
    AnalyticsService.prototype.getHashCode = function (value) {
        var hash = 0;
        var chr;
        if (!value || value.length === 0)
            return hash;
        for (var i = 0; i < value.length; i++) {
            chr = value.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    ;
    return AnalyticsService;
}());
var SiriusAnalytics = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.analyticsHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var path, wfElement;
            return __generator(this, function (_a) {
                path = SiriusAnalytics.analyticsService.getPath(event);
                if (SiriusAnalytics.lastPath[0] === path[0])
                    return [2 /*return*/];
                SiriusAnalytics.lastPath = path;
                wfElement = path.find(function (i) { return i.hasAttribute && i.hasAttribute("wf-element"); });
                if (!wfElement)
                    return [2 /*return*/];
                path[0].addEventListener("blur", this.onBlur);
                SiriusAnalytics.analyticsService.send("click", path);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.wfMessage = function (event) {
        SiriusAnalytics.analyticsService.sendMessage(event);
    };
    class_1.prototype.onBlur = function (event) {
        SiriusAnalytics.analyticsService.send("blur", SiriusAnalytics.lastPath);
        event.target.removeEventListener("blur", this.onBlur);
    };
    return class_1;
}());
SiriusAnalytics.lastPath = [null];
SiriusAnalytics.analyticsService = new AnalyticsService();
var SiriusPage = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
    }
    class_2.prototype.inputHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modelService.setModelValue(event.target["id"], event.target["value"]);
                        if (!this.page.isDirty)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.page.validate(this.page.context)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.renderItem = function (item) {
        return [
            h(item.tag, Object.assign({ "wf-element": true, id: item.id, data: item, error: item["error"], errorMsg: item["errorMessage"], onInput: this.inputHandler.bind(this) }, item, { context: this.page["context"], value: this.modelService.getComponentModelValue(item), caption: this.modelService.getInterpolatedValue(item["caption"]) })),
            item.validators ? h("span", null, item["errorMessage"]) : null
        ];
    };
    class_2.prototype.render = function () {
        if (this.page && this.page.components)
            return this.page.components.map(this.renderItem.bind(this));
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return "input[wf-element][data-error-style=true]{border:1px solid #000}[wf-element]{margin:0 2px}input[wf-element][error=true][data-error-style=true]{border:1px solid var(--error-color,red);background-color:var(--error-bg-color,pink)}span{display:inline-block;color:var(--error-color,red)}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var IPC = /** @class */ (function () {
    function IPC(parent, process, next) {
        this.parent = parent;
        this.process = process;
        this.next = next;
    }
    return IPC;
}());
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError() {
        var _this = _super.apply(this, arguments) || this;
        _this.type = "ValidationError";
        return _this;
    }
    return ValidationError;
}(Error));
var Validator = /** @class */ (function () {
    function Validator(name) {
        this.name = name;
    }
    return Validator;
}());
var RequiredValidator = /** @class */ (function (_super) {
    __extends(RequiredValidator, _super);
    function RequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequiredValidator.prototype.validate = function (context, component, config) {
        var value = context.modelService.getModelValue(component.id);
        if (value == null || value == undefined || value.toString().trim().length == 0) {
            component["error"] = "true";
            component["errorMessage"] = config.message;
            return false;
        }
        return true;
    };
    return RequiredValidator;
}(Validator));
var Validators = /** @class */ (function () {
    function Validators(context, component) {
        this.context = context;
        this.component = component;
    }
    Validators.validate = function (context, component) {
        var validators = new Validators(context, component);
        var isValid = validators.validate();
        context.container.page = Object.assign({}, context.container.page);
        return isValid;
    };
    Validators.prototype.validate = function () {
        this.setErrorState(null);
        if (this.hasValidators())
            return this.executeValidators();
        return true;
    };
    Validators.prototype.hasValidators = function () {
        return this.component
            && this.component.validators
            && this.component.validators.length > 0;
    };
    Validators.prototype.executeValidators = function () {
        var _loop_1 = function (config) {
            var v = Validators.RegisteredValidators.find(function (v) { return v.name === config.name; });
            if (v && !v.validate(this_1.context, this_1.component, config))
                return { value: false };
        };
        var this_1 = this;
        for (var _i = 0, _a = this.component.validators; _i < _a.length; _i++) {
            var config = _a[_i];
            var state_1 = _loop_1(config);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return true;
    };
    Validators.prototype.setErrorState = function (errorMessage) {
        this.component["error"] = errorMessage && errorMessage.length > 0;
        this.component["errorMessage"] = errorMessage;
    };
    return Validators;
}());
Validators.RegisteredValidators = [
    new RequiredValidator("Required")
];
var PageActivity = /** @class */ (function () {
    function PageActivity() {
        var _this = this;
        this.type = PageActivity.type;
        this.execute = function (context) {
            _this.context = context;
            _this.isDirty = false;
            _this.components
                .filter(function (i) { return i.validators; })
                .forEach(function (component) {
                component["error"] = "false";
                component["errorMessage"] = "";
            });
            setTimeout(_this.reload.bind(_this), 10);
        };
        this.validate = function (context) {
            return new Promise(function (resolve, reject) {
                var validatedComponents = _this.components.filter(function (i) { return i.validators; });
                var isValid = true;
                _this.isDirty = true;
                for (var _i = 0, validatedComponents_1 = validatedComponents; _i < validatedComponents_1.length; _i++) {
                    var component = validatedComponents_1[_i];
                    isValid = isValid && Validators.validate(context, component);
                }
                if (isValid)
                    resolve(true);
                else
                    reject(new ValidationError("Validation Failed"));
            });
        };
    }
    PageActivity.create = function (act) {
        return Object.assign(new PageActivity(), act);
    };
    PageActivity.prototype.reload = function () {
        var _this = this;
        this.context.container.page = null;
        setTimeout(function () { return _this.context.container.page = _this; }, 15);
    };
    return PageActivity;
}());
PageActivity.type = "page-activity";
var CodeActivity = /** @class */ (function () {
    function CodeActivity() {
        var _this = this;
        this.type = CodeActivity.type;
        this.execute = function (context) {
            _this.eval(_this.expression, context);
            if (_this.next && _this.next.length > 0)
                context.wfService.setNextAction(_this.next, _this);
        };
    }
    CodeActivity.create = function (act) {
        return Object.assign(new CodeActivity(), act);
    };
    CodeActivity.prototype.eval = function (expression, context) {
        var f = new Function('context', 'model', expression);
        return f(context, context.model);
    };
    return CodeActivity;
}());
CodeActivity.type = "code-activity";
var DecisionActivity = /** @class */ (function (_super) {
    __extends(DecisionActivity, _super);
    function DecisionActivity() {
        var _this = _super.apply(this, arguments) || this;
        _this.type = DecisionActivity.type;
        _this.execute = function (context) {
            var expression = "return " + _this.left + " " + _this.equality + " " + _this.right + ";";
            var result = _super.prototype.eval.call(_this, expression, context);
            if (result)
                context.wfService.setNextAction(_this.trueAction, _this);
            else
                context.wfService.setNextAction(_this.falseAction, _this);
        };
        return _this;
    }
    DecisionActivity.create = function (act) {
        return Object.assign(new DecisionActivity(), act);
    };
    return DecisionActivity;
}(CodeActivity));
DecisionActivity.type = "decision-activity";
var Url = /** @class */ (function () {
    function Url(rawUrl, method) {
        this.rawUrl = rawUrl;
        this.method = method;
    }
    Object.defineProperty(Url.prototype, "url", {
        get: function () {
            return this.rawUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Url.prototype, "headers", {
        get: function () {
            return {
                'Content-Type': 'application/json',
                'api-key': this.apiKey
            };
        },
        enumerable: true,
        configurable: true
    });
    return Url;
}());
var ModelUrl = /** @class */ (function (_super) {
    __extends(ModelUrl, _super);
    function ModelUrl(rawUrl, method, modelService) {
        var _this = _super.call(this, rawUrl, method) || this;
        _this.modelService = modelService;
        return _this;
    }
    Object.defineProperty(ModelUrl.prototype, "url", {
        get: function () {
            return this.getUrlWithValuesFromModel();
        },
        enumerable: true,
        configurable: true
    });
    ModelUrl.prototype.getUrlWithValuesFromModel = function () {
        var newUrl = this.rawUrl;
        newUrl
            .match(/{[\w|\.]+}/g)
            .map(this.createValueItem.bind(this))
            .forEach(function (m) { return newUrl = newUrl.replace(m.key, m.value || ''); });
        return newUrl;
    };
    ModelUrl.prototype.createValueItem = function (key) {
        var name = key.substring(1, key.length - 1);
        var value = this.modelService.getValue(name, this.modelService.getModel());
        return { key: key, value: value };
    };
    return ModelUrl;
}(Url));
var ApiActivity = /** @class */ (function () {
    function ApiActivity() {
        var _this = this;
        this.type = ApiActivity.type;
        this.execute = function (context) {
            var url = new ModelUrl(_this.url, _this.method, context.modelService);
            return context
                .http
                .fetch(url, _this.mappings)
                .then(function () { return context.wfService.setNextAction(_this.next, _this); });
        };
    }
    ApiActivity.create = function (act) {
        return Object.assign(new ApiActivity(), act);
    };
    return ApiActivity;
}());
ApiActivity.type = "api-activity";
var AssignActivity = /** @class */ (function () {
    function AssignActivity() {
        var _this = this;
        this.type = AssignActivity.type;
        this.execute = function (context) {
            var value = _this.value || "";
            if (_this.value.startsWith("{") && _this.value.endsWith("}"))
                value = context.modelService.getValue(_this.value.substring(1, _this.value.length - 1), context.model);
            context.modelService.setModelValue(_this.key, value);
            context.wfService.setNextAction(_this.next, _this);
        };
    }
    AssignActivity.create = function (act) {
        return Object.assign(new AssignActivity(), act);
    };
    return AssignActivity;
}());
AssignActivity.type = "assign-activity";
var IPCActivity = /** @class */ (function () {
    function IPCActivity() {
        var _this = this;
        this.type = IPCActivity.type;
        this.execute = function (context) {
            return context.container.ipc(_this.process, _this.next);
        };
    }
    IPCActivity.create = function (act) {
        return Object.assign(new IPCActivity(), act);
    };
    return IPCActivity;
}());
IPCActivity.type = "ipc-activity";
var CompletedActivity = /** @class */ (function () {
    function CompletedActivity() {
        this.type = CompletedActivity.type;
        this.execute = function (context) {
            return context.container.completed(context.container.process);
        };
    }
    CompletedActivity.create = function (act) {
        return Object.assign(new CompletedActivity(), act);
    };
    return CompletedActivity;
}());
CompletedActivity.type = "completed-activity";
var RedirectActivity = /** @class */ (function () {
    function RedirectActivity() {
        var _this = this;
        this.type = RedirectActivity.type;
        this.execute = function (context) {
            var sessionId = context.container.wfSessionId;
            context.container.dehydrate(sessionId);
            if (_this.url.indexOf("?") === -1)
                document.location.href = _this.url + "?sessionId=" + sessionId;
            else
                document.location.href = _this.url + "&sessionId=" + sessionId;
        };
    }
    RedirectActivity.create = function (act) {
        return Object.assign(new RedirectActivity(), act);
    };
    return RedirectActivity;
}());
RedirectActivity.type = "redirect-activity";
var ActivityFactory = /** @class */ (function () {
    function ActivityFactory() {
    }
    ActivityFactory.linkActivities = function (process) {
        process
            .activities
            .forEach(function (p) {
            var act = ActivityFactory.activities.find(function (a) { return a.type === p.type; });
            if (act && act.create)
                Object.assign(p, act.create(p));
        });
    };
    return ActivityFactory;
}());
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
var WFService = /** @class */ (function () {
    function WFService() {
    }
    WFService.prototype.setNextAction = function (name, source) {
        this.action = name;
        if (this.wfChangeHandler)
            this.wfChangeHandler(this.action, this.process, source);
    };
    WFService.prototype.setProcess = function (process) {
        this.process = process;
    };
    WFService.prototype.getProcess = function () {
        return this.process;
    };
    WFService.prototype.addActivity = function (type, create) {
        var act = ActivityFactory.activities.find(function (a) { return a.type === type; });
        if (!act)
            ActivityFactory.activities.push({ type: type, create: create });
    };
    WFService.prototype.parse = function (processDef) {
        try {
            var process = JSON.parse(processDef);
            ActivityFactory.linkActivities(process);
            return process;
        }
        catch (ex) {
            console.error(ex);
            return null;
        }
    };
    return WFService;
}());
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
var HttpService = /** @class */ (function () {
    function HttpService(modelService) {
        this.modelService = modelService;
    }
    HttpService.prototype.fetchData = function (url, body) {
        if (body === void 0) { body = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch(url, null, body, false)];
            });
        });
    };
    HttpService.prototype.fetch = function (url, mappings, body, setModel) {
        if (mappings === void 0) { mappings = null; }
        if (body === void 0) { body = null; }
        if (setModel === void 0) { setModel = true; }
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url.url, this.getConfig(url, mappings, body))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (!this.modelService || !setModel)
                            return [2 /*return*/, data];
                        return [2 /*return*/, this.setModelValues(data, mappings)];
                }
            });
        });
    };
    HttpService.prototype.getConfig = function (url, mappings, body) {
        if (body === void 0) { body = null; }
        return {
            method: url.method,
            mode: 'cors',
            headers: url.headers,
            redirect: 'follow',
            referrer: 'no-referrer',
            body: body ? JSON.stringify(body) : this.getBody(url, mappings)
        };
    };
    HttpService.prototype.getBody = function (url, mappings) {
        var _this = this;
        if (url.method === HttpVerb.GET || url.method === HttpVerb.DELETE)
            return null;
        var body = {};
        var model = this.modelService.getModel();
        mappings
            .filter(function (m) { return m.direction === MappingDirection.Out || m.direction === MappingDirection.InOut; })
            .forEach(function (m) {
            var _a;
            return Object.assign(body, (_a = {}, _a[m.client] = _this.modelService.getValue(m.client, model), _a));
        });
        return JSON.stringify(body);
    };
    HttpService.prototype.setModelValues = function (data, mappings) {
        var _this = this;
        if (!mappings || mappings.length === 0)
            return Object.keys(data).forEach(function (k) { return _this.modelService.setModelValue(k, data[k]); });
        mappings
            .filter(function (m) { return m.direction === MappingDirection.Out || m.direction === MappingDirection.InOut; })
            .forEach(function (m) { return _this.modelService.setModelValue(m.client, _this.modelService.getValue(m.remote, data)); });
    };
    return HttpService;
}());
var ModelService = /** @class */ (function () {
    function ModelService() {
        this.model = {};
        this.onInput = this.inputHandler.bind(this);
    }
    ModelService.prototype.setModelValue = function (name, value) {
        this.model = this.merge(this.model, name, value);
        if (this.modelChangedHandler)
            this.modelChangedHandler(this.model);
    };
    ModelService.prototype.getComponentModelValue = function (component) {
        var model = this.getModel();
        var value;
        if (component && component.id && model)
            value = this.getModelValue(component.id);
        if (value === undefined && component.value) {
            value = component.value;
            this.setModelValue(component.id, value);
        }
        return value;
    };
    ModelService.prototype.getModelValue = function (key) {
        return this.getValue(key, this.getModel());
    };
    ModelService.prototype.getInterpolatedValue = function (value) {
        var _this = this;
        if (!value)
            return value;
        var myRegexp = /\{\{(?:(\w|\.)+)\}\}/g;
        var match = value.match(myRegexp);
        if (!match || match.length === 0)
            return value;
        return match.reduce(function (prev, curr) { return _this.replaceAll(prev, curr); }, value);
    };
    ModelService.prototype.getModel = function () {
        return Object.assign({}, this.model);
    };
    ModelService.prototype.setModel = function (model) {
        this.model = Object.assign({}, model);
    };
    ModelService.prototype.getValue = function (key, model) {
        return key.split(".").reduce(function (total, currentElement) { return total ? total[currentElement] : undefined; }, model);
    };
    ModelService.prototype.replaceAll = function (value, key) {
        var newValue = this.getModelValue(key.substring(2, key.length - 2));
        return value.replace(key, newValue);
    };
    ModelService.prototype.inputHandler = function (event) {
        var target = event.currentTarget;
        var wfElement = target.closest("[wf-element]");
        this.setModelValue(wfElement.id, wfElement["value"]);
    };
    ModelService.prototype.merge = function (model, name, value) {
        if (!name)
            return;
        var newModel = Object.assign({}, model);
        name
            .split(".")
            .reduce(function (total, current, index, arr) {
            total[current] = index == arr.length - 1 ? value : Object.assign({}, total[current]);
            return total[current];
        }, newModel);
        return newModel;
    };
    return ModelService;
}());
var PersistanceService = /** @class */ (function () {
    function PersistanceService() {
    }
    PersistanceService.prototype.setItem = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    PersistanceService.prototype.getItem = function (key) {
        var value = sessionStorage.getItem(key);
        if (!value)
            return null;
        return JSON.parse(value);
    };
    PersistanceService.prototype.clear = function () {
        sessionStorage.clear();
    };
    return PersistanceService;
}());
var MessageType;
(function (MessageType) {
    MessageType["StartLoading"] = "START_LOADING";
    MessageType["EndLoading"] = "END_LOADING";
    MessageType["Error"] = "ERROR";
    MessageType["ValidationError"] = "VALIDATION_ERROR";
    MessageType["Workflow_Changing"] = "WORKFLOW_CHANGING";
    MessageType["Workflow_Changed"] = "WORKFLOW_CHANGED";
})(MessageType || (MessageType = {}));
var Message = /** @class */ (function () {
    function Message(messageType, description, stack) {
        this.messageType = messageType;
        this.description = description;
        this.stack = stack;
    }
    return Message;
}());
var Context = /** @class */ (function () {
    function Context(model, modelService, wfService, http, container) {
        this.model = model;
        this.modelService = modelService;
        this.wfService = wfService;
        this.http = http;
        this.container = container;
    }
    return Context;
}());
var WFHandler = /** @class */ (function () {
    function WFHandler(http, wfService, modelService, container) {
        this.http = http;
        this.wfService = wfService;
        this.modelService = modelService;
        this.container = container;
        this.hasError = false;
        this.context = new Context({}, this.modelService, this.wfService, this.http, this.container);
    }
    WFHandler.prototype.handle = function () {
        this.wfService.wfChangeHandler = this.handleWfChange.bind(this);
        this.modelService.modelChangedHandler = this.handleModelChanged.bind(this);
    };
    WFHandler.prototype.handleWfChange = function (action, process, source) {
        var _this = this;
        this.hasError = false;
        this.currProcess = process;
        this.currAction = action || "start";
        setTimeout(function () {
            _this.setWorkflowStatus();
            _this.sendMessage(new Message(MessageType.Workflow_Changing, _this.getWorkflowStatus()));
            _this.executeActivity(source);
        }, 10);
    };
    WFHandler.prototype.handleModelChanged = function (model) {
        this.context.model = model;
    };
    WFHandler.prototype.executeActivity = function (source) {
        var _this = this;
        if (!this.hasActivities())
            return;
        var act = this.currProcess.activities.find(function (p) { return p.name === _this.currAction; });
        if (this.canExecute(act)) {
            this.hasError = false;
            this.sendMessage(new Message(MessageType.StartLoading, "Loading..."));
            this.validate(source)
                .then(function () { return act.execute(_this.context); })
                .then(function () { return _this.actionExecuted(); })
                .catch(function (error) { return _this.handleError(error); });
        }
    };
    WFHandler.prototype.validate = function (source) {
        return __awaiter(this, void 0, void 0, function () {
            var act;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.shouldSkipValidate(source))
                    return [2 /*return*/, true];
                act = this.currProcess.activities.find(function (p) { return p.name === _this.lastAction; });
                if (act && act.validate)
                    return [2 /*return*/, act.validate(this.context)];
                return [2 /*return*/];
            });
        });
    };
    WFHandler.prototype.shouldSkipValidate = function (source) {
        return (source && source.data && source.data.noValidate)
            || (this.currAction === this.lastAction);
    };
    WFHandler.prototype.actionExecuted = function () {
        this.sendMessage(new Message(MessageType.EndLoading));
        this.sendMessage(new Message(MessageType.Workflow_Changed, this.getWorkflowStatus()));
        if (!this.hasError)
            this.lastAction = this.currAction;
    };
    WFHandler.prototype.handleError = function (error) {
        this.hasError = true;
        this.sendMessage(new Message(MessageType.EndLoading));
        this.modelService.setModelValue("message", new Message(MessageType.EndLoading, error.message));
        if (error instanceof ValidationError)
            this.sendMessage(new Message(MessageType.ValidationError, error.message, error.stack));
        else
            this.sendMessage(new Message(MessageType.Error, error.message, error.stack));
        this.sendMessage(new Message(MessageType.Workflow_Changed, this.getWorkflowStatus()));
    };
    WFHandler.prototype.hasActivities = function () {
        return this.currProcess && this.currProcess.activities;
    };
    WFHandler.prototype.canExecute = function (act) {
        return act && act.execute;
    };
    WFHandler.prototype.sendMessage = function (message) {
        var msg = Object.assign(Object.assign({}, message), { process: this.wfProcess, activity: this.wfAction, wfSessionId: this.context.container.wfSessionId });
        this.modelService.setModelValue("message", msg);
        this.context.container.wfMessage.emit(msg);
    };
    WFHandler.prototype.setWorkflowStatus = function () {
        this.wfAction = this.currAction;
        this.wfProcess = this.currProcess.name;
    };
    WFHandler.prototype.getWorkflowStatus = function () {
        return JSON.stringify({
            process: this.wfProcess,
            activity: this.wfAction
        });
    };
    return WFHandler;
}());
var WFLoaderHandler = /** @class */ (function () {
    function WFLoaderHandler(http) {
        this.http = http;
    }
    WFLoaderHandler.prototype.load = function (process) {
        var url = new Url(this.baseUrl + "\\" + process, HttpVerb.GET);
        url.apiKey = this.apiKey;
        return this.http
            .fetchData(url);
    };
    return WFLoaderHandler;
}());
var SiriusWf = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        this.ipcHistory = [];
        this.wfMessage = createEvent(this, "wfMessage", 7);
    }
    class_3.prototype.validateName = function (newValue, oldValue) {
        if (newValue === oldValue || newValue === "")
            return;
        this.loadUrl(newValue);
    };
    class_3.prototype.addActivity = function (type, create) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.wfService.addActivity(type, create);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.goto = function (activity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.wfService.setNextAction(activity, this);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.loadProcess = function (processDef, activity) {
        if (activity === void 0) { activity = "start"; }
        return __awaiter(this, void 0, void 0, function () {
            var process;
            return __generator(this, function (_a) {
                if (typeof processDef === 'object')
                    processDef = JSON.stringify(processDef);
                process = this.wfService.parse(processDef);
                if (!process)
                    return [2 /*return*/];
                this.page = null;
                this.wfService.setProcess(process);
                this.goto(activity);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.loadUrl = function (process, activity) {
        if (activity === void 0) { activity = "start"; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, Exception_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = this.loadProcess;
                        return [4 /*yield*/, this.wfLoaderHandler.load(process)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent(), activity])];
                    case 2:
                        _b.sent();
                        this.process = process;
                        return [2 /*return*/, this.wfService.getProcess()];
                    case 3:
                        Exception_1 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.hydrate = function (process, sessionId, activity) {
        if (activity === void 0) { activity = "start"; }
        return __awaiter(this, void 0, void 0, function () {
            var ipc, model;
            return __generator(this, function (_a) {
                this.wfSessionId = sessionId;
                ipc = this.persistance.getItem(sessionId + "_IPC") || [];
                model = this.persistance.getItem(sessionId + "_MODEL") || this.modelService.getModel();
                this.loadUrl(process, activity);
                this.ipcHistory = ipc;
                this.modelService.setModel(model);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.dehydrate = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.persistance.clear();
                this.persistance.setItem(sessionId + "_IPC", this.ipcHistory);
                this.persistance.setItem(sessionId + "_MODEL", this.modelService.getModel());
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.ipc = function (process, next) {
        if (next === void 0) { next = null; }
        return __awaiter(this, void 0, void 0, function () {
            var Exception_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.ipcHistory.push(new IPC(this.process, process, next));
                        this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
                        return [4 /*yield*/, this.loadUrl(process, "start")];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        Exception_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.completed = function (process) {
        return __awaiter(this, void 0, void 0, function () {
            var lastProcess, Exception_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lastProcess = this.ipcHistory.pop();
                        this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
                        if (!lastProcess || lastProcess.process !== process) {
                            this.ipcHistory = [];
                            this.persistance.setItem("WF_SIRIUS_IPC", this.ipcHistory);
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.loadUrl(lastProcess.parent, lastProcess.next || "start")];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        Exception_3 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.UUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    class_3.prototype.render = function () {
        return h("sirius-page", { page: this.page, modelService: this.modelService });
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "process": ["validateName"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
export { SiriusAnalytics as sirius_analytics, SiriusPage as sirius_page, SiriusWf as sirius_wf };
