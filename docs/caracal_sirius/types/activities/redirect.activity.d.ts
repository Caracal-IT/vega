import { Context } from './../model/Context.model';
import { Activity } from "../model/activity.model";
export declare class RedirectActivity implements Activity {
    static type: string;
    static create(act: Activity): RedirectActivity & Activity;
    type: string;
    url: string;
    execute: (context: Context) => void;
    UUID(): string;
}
