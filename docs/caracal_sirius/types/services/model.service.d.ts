export declare class ModelService {
    modelChangedHandler: (arg0: {}) => void;
    model: {};
    setModelValue(name: string, value: any): void;
    onInput: any;
    getComponentModelValue(component: any): any;
    getModelValue(key: string): any;
    getInterpolatedValue(value: string): string;
    getModel(): any;
    setModel(model: any): void;
    getValue(key: string, model: any): any;
    private replaceAll;
    private inputHandler;
    private merge;
}
