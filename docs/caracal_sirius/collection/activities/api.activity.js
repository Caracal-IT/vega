import { ModelUrl } from "../model/http/ModelUrl";
export class ApiActivity {
    constructor() {
        this.type = ApiActivity.type;
        this.execute = (context) => {
            const url = new ModelUrl(this.url, this.method, context.modelService);
            return context
                .http
                .fetch(url, this.mappings)
                .then(() => context.wfService.setNextAction(this.next));
        };
    }
    static create(act) {
        return Object.assign(new ApiActivity(), act);
    }
}
ApiActivity.type = "api-activity";
