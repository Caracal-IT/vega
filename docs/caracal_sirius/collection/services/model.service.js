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
    getInterpolatedValue(value) {
        if (!value)
            return value;
        const myRegexp = /\{\{(?:\w+)\}\}/g;
        const match = value.match(myRegexp);
        if (!match || match.length === 0)
            return value;
        return match.reduce((prev, curr) => this.replaceAll(prev, curr), value);
    }
    getModel() {
        return Object.assign({}, this.model);
    }
    setModel(model) {
        this.model = Object.assign({}, model);
    }
    getValue(key, model) {
        return key.split(".").reduce((total, currentElement) => total ? total[currentElement] : undefined, model);
    }
    replaceAll(value, key) {
        const newValue = this.getModelValue(key.substring(2, key.length - 2));
        return value.replace(key, newValue);
    }
    inputHandler(event) {
        const target = event.currentTarget;
        const wfElement = target.closest("[wf-element]");
        this.setModelValue(wfElement.id, wfElement["value"]);
    }
    merge(model, name, value) {
        if (!name)
            return;
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
