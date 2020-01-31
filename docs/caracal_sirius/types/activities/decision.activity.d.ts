import { Context } from '../model/Context.model';
import { Activity } from "../model/activity.model";
import { CodeActivity } from './code.activity';
export declare class DecisionActivity extends CodeActivity {
    static type: string;
    static create(act: Activity): DecisionActivity & Activity;
    type: string;
    left: string;
    equality: string;
    right: string;
    trueAction: string;
    falseAction: string;
    execute: (context: Context) => void;
}
