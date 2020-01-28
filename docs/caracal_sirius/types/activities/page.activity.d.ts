import { Page } from '../model/Page.model';
import { WebComponent } from '../model/WebComponent.model';
import { Activity } from '../model/activity';
import { Context } from '../model/Context.model';
export declare class PageActivity implements Activity, Page {
    components: WebComponent[];
    static type: string;
    static create(act: Activity): PageActivity & Activity;
    type: string;
    execute: (context: Context) => void;
}
