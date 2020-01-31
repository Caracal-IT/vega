import { PageActivity } from "./page.activity";
import { DecisionActivity } from './decision.activity';
import { ApiActivity } from './api.activity';
import { CodeActivity } from "./code.activity";
import { AssignActivity } from "./assign.activity";
import { IPCActivity } from "./ipc.activity";
import { CompletedActivity } from "./completed.activity";
import { RedirectActivity } from "./redirect.activity";
export class ActivityFactory {
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
