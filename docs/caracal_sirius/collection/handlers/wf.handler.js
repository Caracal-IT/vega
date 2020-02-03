import { MessageType } from '../model/messages/message-type.model';
import { Message } from '../model/messages/message.model';
import { Context } from "../model/Context.model";
import { ValidationError } from '../model/ValidationError.model';
export class WFHandler {
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
