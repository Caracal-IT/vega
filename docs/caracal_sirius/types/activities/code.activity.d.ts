import { Context } from './../model/Context.model';
import { Activity } from "../model/activity.model";
export declare class CodeActivity implements Activity {
    static type: string;
    static create(act: Activity): CodeActivity & Activity;
    type: string;
    expression: string;
    next: string;
    execute: (context: Context) => void;
    eval(expression: string, context: Context): any;
}
