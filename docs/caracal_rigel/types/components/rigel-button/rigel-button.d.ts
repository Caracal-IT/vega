import { Context } from '../../types/model/Context.model';
export declare class RigelButton {
    caption: string;
    next: string;
    context: Context;
    clickHandler(): void;
    render(): any;
    private hasContext;
}
