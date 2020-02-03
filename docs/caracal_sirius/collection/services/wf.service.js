import { ActivityFactory } from "../activities/factory.activity";
export class WFService {
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
