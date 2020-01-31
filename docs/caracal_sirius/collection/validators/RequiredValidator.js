import { Validator } from './Validator';
export class RequiredValidator extends Validator {
    validate(context, component, config) {
        const value = context.modelService.getModelValue(component.id);
        if (value == null || value == undefined || value.toString().trim().length == 0) {
            component["error"] = "true";
            component["errorMessage"] = config.message;
            return false;
        }
        return true;
    }
}
