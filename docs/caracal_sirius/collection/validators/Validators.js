import { RequiredValidator } from './RequiredValidator';
export class Validators {
    constructor(context, component) {
        this.context = context;
        this.component = component;
    }
    static validate(context, component) {
        const validators = new Validators(context, component);
        const isValid = validators.validate();
        context.container.page = Object.assign({}, context.container.page);
        return isValid;
    }
    validate() {
        this.setErrorState(null);
        if (this.hasValidators())
            return this.executeValidators();
        return true;
    }
    hasValidators() {
        return this.component
            && this.component.validators
            && this.component.validators.length > 0;
    }
    executeValidators() {
        for (const config of this.component.validators) {
            const v = Validators.RegisteredValidators.find(v => v.name === config.name);
            if (v && !v.validate(this.context, this.component, config))
                return false;
        }
        return true;
    }
    setErrorState(errorMessage) {
        this.component["error"] = errorMessage && errorMessage.length > 0;
        this.component["errorMessage"] = errorMessage;
    }
}
Validators.RegisteredValidators = [
    new RequiredValidator("Required")
];
