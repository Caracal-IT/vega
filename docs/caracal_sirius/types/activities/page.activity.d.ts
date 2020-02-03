import { Page } from '../model/Page.model';
import { WebComponent } from '../model/WebComponent.model';
import { Activity } from '../model/activity.model';
import { Context } from '../model/Context.model';
export declare class PageActivity implements Activity, Page {
    components: WebComponent[];
    context: Context;
    isDirty: boolean;
    static type: string;
    static create(act: Activity): PageActivity & Activity;
    type: string;
    execute: (context: Context) => void;
    reload(): void;
    validate: (context: Context) => Promise<boolean>;
}
