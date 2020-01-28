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
import { r as registerInstance, h, c as createEvent } from './core-c51dcb90.js';
var SiriusPage = /** @class */ (function () {
    function SiriusPage(hostRef) {
        registerInstance(this, hostRef);
    }
    SiriusPage.prototype.inputHandler = function (event) {
        this.modelService.setModelValue(event.target["id"], event.target["value"]);
    };
    SiriusPage.prototype.render = function () {
        var _this = this;
        var renderItem = function (item) { return h(item.tag, Object.assign({ "wf-element": true, onInput: _this.inputHandler.bind(_this) }, item, { context: _this.page["context"], value: _this.modelService.getComponentModelValue(item) })); };
        if (this.page && this.page.components)
            return this.page.components.map(renderItem);
    };
    return SiriusPage;
}());
var PageActivity = /** @class */ (function () {
    function PageActivity() {
        var _this = this;
        this.type = PageActivity.type;
        this.execute = function (context) {
            context.container.page = Object.assign(Object.assign({}, _this), { context: context });
        };
    }
    PageActivity.create = function (act) {
        return Object.assign(new PageActivity(), act);
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
            context.wfService.setNextAction(_this.next);
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
                context.wfService.setNextAction(_this.trueAction);
            else
                context.wfService.setNextAction(_this.falseAction);
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
                'Content-Type': 'application/json'
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
                .then(function () { return context.wfService.setNextAction(_this.next); });
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
            context.wfService.setNextAction(_this.next);
        };
    }
    AssignActivity.create = function (act) {
        return Object.assign(new AssignActivity(), act);
    };
    return AssignActivity;
}());
AssignActivity.type = "assign-activity";
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
    { type: ApiActivity.type, create: ApiActivity.create }
];
var WFService = /** @class */ (function () {
    function WFService() {
    }
    WFService.prototype.setNextAction = function (name) {
        this.action = name;
        if (this.wfChangeHandler)
            this.wfChangeHandler(this.action, this.process);
    };
    WFService.prototype.setProcess = function (process) {
        this.process = process;
        if (this.wfChangeHandler)
            this.wfChangeHandler(this.action, this.process);
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
            console.log(ex);
            return null;
        }
    };
    return WFService;
}());
var MessageType;
(function (MessageType) {
    MessageType["StartLoading"] = "START_LOADING";
    MessageType["EndLoading"] = "END_LOADING";
    MessageType["Error"] = "ERROR";
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
    HttpService.prototype.fetch = function (url, mappings) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url.url, this.getConfig(url, mappings))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, this.setModelValues(data, mappings)];
                }
            });
        });
    };
    HttpService.prototype.getConfig = function (url, mappings) {
        return {
            method: url.method,
            mode: 'cors',
            headers: url.headers,
            redirect: 'follow',
            referrer: 'no-referrer',
            body: this.getBody(url, mappings)
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
var WFHandler = /** @class */ (function () {
    function WFHandler(wfService, modelService, container) {
        this.wfService = wfService;
        this.modelService = modelService;
        this.container = container;
        this.hasError = false;
        this.http = new HttpService(this.modelService);
        this.context = new Context({}, this.modelService, this.wfService, this.http, this.container);
    }
    WFHandler.prototype.handle = function () {
        this.wfService.wfChangeHandler = this.handleWfChange.bind(this);
        this.modelService.modelChangedHandler = this.handleModelChanged.bind(this);
    };
    WFHandler.prototype.handleWfChange = function (action, process) {
        this.currProcess = process;
        this.currAction = action || "start";
        this.executeActivity();
    };
    WFHandler.prototype.handleModelChanged = function (model) {
        this.context.model = model;
    };
    WFHandler.prototype.executeActivity = function () {
        var _this = this;
        if (!this.hasActivities())
            return;
        var act = this.currProcess.activities.find(function (p) { return p.name === _this.currAction; });
        var model = this.context.model;
        if (this.canExecute(act)) {
            this.hasError = false;
            this.sendMessage(new Message(MessageType.StartLoading, "Loading..."));
            this.tryExecute(act)
                .then(function () { return _this.actionExecuted(act, model); })
                .catch(function (error) {
                _this.modelService.setModelValue("message", new Message(MessageType.EndLoading));
                _this.handleError(error);
            });
        }
    };
    WFHandler.prototype.tryExecute = function (act) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, act.execute(this.context)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        this.handleError(ex_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WFHandler.prototype.actionExecuted = function (act, model) {
        if (this.hasError)
            return;
        this.sendMessage(new Message(MessageType.EndLoading));
        this.goToNextAction(act, model);
    };
    WFHandler.prototype.goToNextAction = function (act, model) {
        if (act.components)
            this.lastAction = this.currAction;
        else if (model !== this.context.model)
            this.wfService.setNextAction(this.lastAction);
        else
            this.wfService.setNextAction(null);
    };
    WFHandler.prototype.handleError = function (error) {
        this.hasError = true;
        this.sendMessage(new Message(MessageType.Error, error.message, error.stack));
        console.log("ERROR OCCURED", error);
        console.dir(error);
    };
    WFHandler.prototype.hasActivities = function () {
        return this.currProcess && this.currProcess.activities;
    };
    WFHandler.prototype.canExecute = function (act) {
        return act && act.execute;
    };
    WFHandler.prototype.sendMessage = function (msg) {
        this.modelService.setModelValue("message", msg);
        this.context.container.wfMessage.emit(msg);
    };
    return WFHandler;
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
    ModelService.prototype.getModel = function () {
        return Object.assign({}, this.model);
    };
    ModelService.prototype.getValue = function (key, model) {
        return key.split(".").reduce(function (total, currentElement) { return total ? total[currentElement] : undefined; }, model);
    };
    ModelService.prototype.inputHandler = function (event) {
        var target = event.currentTarget;
        var wfElement = target.closest("[wf-element]");
        this.setModelValue(wfElement.id, wfElement["value"]);
    };
    ModelService.prototype.merge = function (model, name, value) {
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
var SiriusWf = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.wfMessage = createEvent(this, "wfMessage", 7);
    }
    class_1.prototype.addActivity = function (type, create) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.wfService.addActivity(type, create);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.goto = function (activity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.wfService.setNextAction(activity);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.loadProcess = function (process) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.page = null;
                this.wfService.setProcess(process);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.parse = function (processDef) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.wfService.parse(processDef)];
            });
        });
    };
    class_1.prototype.load = function (processDef) {
        return __awaiter(this, void 0, void 0, function () {
            var process;
            return __generator(this, function (_a) {
                if (typeof processDef === 'object')
                    processDef = JSON.stringify(processDef);
                process = this.wfService.parse(processDef);
                if (!process)
                    return [2 /*return*/];
                return [2 /*return*/, this.loadProcess(process)];
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.wfService = new WFService();
                this.modelService = new ModelService();
                this.wfHandler = new WFHandler(this.wfService, this.modelService, this);
                this.wfHandler.handle();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return h("sirius-page", { page: this.page, modelService: this.modelService });
    };
    return class_1;
}());
export { SiriusPage as sirius_page, SiriusWf as sirius_wf };
