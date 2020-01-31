import { Context } from './../model/Context.model';
import { Activity } from "../model/activity.model";
export declare class CompletedActivity implements Activity {
    static type: string;
    static create(act: Activity): CompletedActivity & Activity;
    type: string;
    execute: (context: Context) => Promise<void>;
}
