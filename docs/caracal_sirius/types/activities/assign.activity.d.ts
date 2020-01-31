import { Context } from './../model/Context.model';
import { Activity } from "../model/activity.model";
export declare class AssignActivity implements Activity {
    static type: string;
    static create(act: Activity): AssignActivity & Activity;
    type: string;
    key: string;
    value: string;
    next: string;
    execute: (context: Context) => void;
}
