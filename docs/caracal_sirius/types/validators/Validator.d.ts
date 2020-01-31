import { WebComponent } from './../model/WebComponent.model';
import { Context } from '../model/Context.model';
export declare abstract class Validator {
    name: string;
    constructor(name: string);
    abstract validate(context: Context, component: WebComponent, config: any): boolean;
}
