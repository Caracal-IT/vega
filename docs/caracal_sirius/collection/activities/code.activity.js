export class CodeActivity {
    constructor() {
        this.type = CodeActivity.type;
        this.execute = (context) => {
            this.eval(this.expression, context);
            context.wfService.setNextAction(this.next);
        };
    }
    static create(act) {
        return Object.assign(new CodeActivity(), act);
    }
    eval(expression, context) {
        const f = new Function('context', 'model', expression);
        return f(context, context.model);
    }
}
CodeActivity.type = "code-activity";
