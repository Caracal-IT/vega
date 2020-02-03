import { WebComponent } from '../model/WebComponent.model';
import { Context } from '../model/Context.model';
import { Validator } from './Validator';
export interface RequiredValidatorConfig {
    name: string;
    message: string;
}
export declare class RequiredValidator extends Validator {
    validate(context: Context, component: WebComponent, config: RequiredValidatorConfig): boolean;
}
