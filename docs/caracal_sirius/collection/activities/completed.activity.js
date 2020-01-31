export class CompletedActivity {
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
