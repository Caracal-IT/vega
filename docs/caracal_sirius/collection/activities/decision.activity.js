import { CodeActivity } from './code.activity';
export class DecisionActivity extends CodeActivity {
    constructor() {
        super(...arguments);
        this.type = DecisionActivity.type;
        this.execute = (context) => {
            const expression = `return ${this.left} ${this.equality} ${this.right};`;
            const result = super.eval(expression, context);
            if (result)
                context.wfService.setNextAction(this.trueAction, this);
            else
                context.wfService.setNextAction(this.falseAction, this);
        };
    }
    static create(act) {
        return Object.assign(new DecisionActivity(), act);
    }
}
DecisionActivity.type = "decision-activity";
