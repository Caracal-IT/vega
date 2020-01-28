export class ModelService {
    constructor() {
        this.model = {};
        this.onInput = this.inputHandler.bind(this);
    }
    setModelValue(name, value) {
        this.model = this.merge(this.model, name, value);
        if (this.modelChangedHandler)
            this.modelChangedHandler(this.model);
    }
    getComponentModelValue(component) {
        const model = this.getModel();
        let value;
        if (component && component.id && model)
            value = this.getModelValue(component.id);
        if (value === undefined && component.value) {
            value = component.value;
            this.setModelValue(component.id, value);
        }
        return value;
    }
    getModelValue(key) {
        return this.getValue(key, this.getModel());
    }
    getModel() {
        return Object.assign({}, this.model);
    }
    getValue(key, model) {
        return key.split(".").reduce((total, currentElement) => total ? total[currentElement] : undefined, model);
    }
    inputHandler(event) {
        const target = event.currentTarget;
        const wfElement = target.closest("[wf-element]");
        this.setModelValue(wfElement.id, wfElement["value"]);
    }
    merge(model, name, value) {
        let newModel = Object.assign({}, model);
        name
            .split(".")
            .reduce((total, current, index, arr) => {
            total[current] = index == arr.length - 1 ? value : Object.assign({}, total[current]);
            return total[current];
        }, newModel);
        return newModel;
    }
}
