import { ActivityFactory } from "../activities/factory.activity";
export class WFService {
    setNextAction(name) {
        this.action = name;
        if (this.wfChangeHandler)
            this.wfChangeHandler(this.action, this.process);
    }
    setProcess(process) {
        this.process = process;
        if (this.wfChangeHandler)
            this.wfChangeHandler(this.action, this.process);
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
            console.log(ex);
            return null;
        }
    }
}
