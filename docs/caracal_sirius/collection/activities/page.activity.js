import { ValidationError } from '../model/ValidationError.model';
import { Validators } from '../validators/Validators';
export class PageActivity {
    constructor() {
        this.type = PageActivity.type;
        this.execute = (context) => {
            this.context = context;
            this.isDirty = false;
            this.components
                .filter(i => i.validators)
                .forEach(component => {
                component["error"] = "false";
                component["errorMessage"] = "";
            });
            setTimeout(this.reload.bind(this), 10);
        };
        this.validate = (context) => {
            return new Promise((resolve, reject) => {
                const validatedComponents = this.components.filter(i => i.validators);
                let isValid = true;
                this.isDirty = true;
                for (var component of validatedComponents)
                    isValid = isValid && Validators.validate(context, component);
                if (isValid)
                    resolve(true);
                else
                    reject(new ValidationError("Validation Failed"));
            });
        };
    }
    static create(act) {
        return Object.assign(new PageActivity(), act);
    }
    reload() {
        this.context.container.page = null;
        setTimeout(() => this.context.container.page = this, 15);
    }
}
PageActivity.type = "page-activity";
