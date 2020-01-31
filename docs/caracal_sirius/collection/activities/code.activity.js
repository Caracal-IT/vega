export class CodeActivity {
    constructor() {
        this.type = CodeActivity.type;
        this.execute = (context) => {
            this.eval(this.expression, context);
            if (this.next && this.next.length > 0)
                context.wfService.setNextAction(this.next, this);
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
