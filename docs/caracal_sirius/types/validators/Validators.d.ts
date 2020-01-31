import { WebComponent } from './../model/WebComponent.model';
import { Context } from '../model/Context.model';
import { Validator } from './Validator';
export declare class Validators {
    private context;
    private component;
    static RegisteredValidators: Array<Validator>;
    static validate(context: Context, component: WebComponent): boolean;
    constructor(context: Context, component: WebComponent);
    private validate;
    private hasValidators;
    private executeValidators;
    private setErrorState;
}
