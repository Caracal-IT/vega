export declare class ModelService {
    modelChangedHandler: (arg0: {}) => void;
    model: {};
    setModelValue(name: string, value: any): void;
    onInput: any;
    getComponentModelValue(component: any): any;
    getModelValue(key: any): any;
    getModel(): any;
    getValue(key: string, model: any): any;
    private inputHandler;
    private merge;
}
