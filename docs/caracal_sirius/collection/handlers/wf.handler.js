import { MessageType } from '../model/messages/message-type.model';
import { Message } from '../model/messages/message.model';
import { Context } from "../model/Context.model";
import { HttpService } from "../services/http.service";
export class WFHandler {
    constructor(wfService, modelService, container) {
        this.wfService = wfService;
        this.modelService = modelService;
        this.container = container;
        this.hasError = false;
        this.http = new HttpService(this.modelService);
        this.context = new Context({}, this.modelService, this.wfService, this.http, this.container);
    }
    handle() {
        this.wfService.wfChangeHandler = this.handleWfChange.bind(this);
        this.modelService.modelChangedHandler = this.handleModelChanged.bind(this);
    }
    handleWfChange(action, process) {
        this.currProcess = process;
        this.currAction = action || "start";
        this.executeActivity();
    }
    handleModelChanged(model) {
        this.context.model = model;
    }
    executeActivity() {
        if (!this.hasActivities())
            return;
        const act = this.currProcess.activities.find((p) => p.name === this.currAction);
        const model = this.context.model;
        if (this.canExecute(act)) {
            this.hasError = false;
            this.sendMessage(new Message(MessageType.StartLoading, "Loading..."));
            this.tryExecute(act)
                .then(() => this.actionExecuted(act, model))
                .catch((error) => {
                this.modelService.setModelValue("message", new Message(MessageType.EndLoading));
                this.handleError(error);
            });
        }
    }
    async tryExecute(act) {
        try {
            await act.execute(this.context);
        }
        catch (ex) {
            this.handleError(ex);
        }
    }
    actionExecuted(act, model) {
        if (this.hasError)
            return;
        this.sendMessage(new Message(MessageType.EndLoading));
        this.goToNextAction(act, model);
    }
    goToNextAction(act, model) {
        if (act.components)
            this.lastAction = this.currAction;
        else if (model !== this.context.model)
            this.wfService.setNextAction(this.lastAction);
        else
            this.wfService.setNextAction(null);
    }
    handleError(error) {
        this.hasError = true;
        this.sendMessage(new Message(MessageType.Error, error.message, error.stack));
        console.log("ERROR OCCURED", error);
        console.dir(error);
    }
    hasActivities() {
        return this.currProcess && this.currProcess.activities;
    }
    canExecute(act) {
        return act && act.execute;
    }
    sendMessage(msg) {
        this.modelService.setModelValue("message", msg);
        this.context.container.wfMessage.emit(msg);
    }
}
