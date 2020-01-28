import { Process } from "../model/Process.model";
import { ApiActivity } from './api.activity';
export declare class ActivityFactory {
    static activities: {
        type: string;
        create: typeof ApiActivity.create;
    }[];
    static linkActivities(process: Process): void;
}
