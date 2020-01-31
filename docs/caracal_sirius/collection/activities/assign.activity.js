export class AssignActivity {
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
