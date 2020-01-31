import { Context } from './../model/Context.model';
import { Activity } from "../model/activity.model";
export declare class IPCActivity implements Activity {
    static type: string;
    static create(act: Activity): IPCActivity & Activity;
    type: string;
    process: string;
    next: string;
    execute: (context: Context) => Promise<void>;
}
