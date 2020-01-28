import { Url } from "./Url";
export class ModelUrl extends Url {
    constructor(rawUrl, method, modelService) {
        super(rawUrl, method);
        this.modelService = modelService;
    }
    get url() {
        return this.getUrlWithValuesFromModel();
    }
    getUrlWithValuesFromModel() {
        let newUrl = this.rawUrl;
        newUrl
            .match(/{[\w|\.]+}/g)
            .map(this.createValueItem.bind(this))
            .forEach((m) => newUrl = newUrl.replace(m.key, m.value || ''));
        return newUrl;
    }
    createValueItem(key) {
        const name = key.substring(1, key.length - 1);
        const value = this.modelService.getValue(name, this.modelService.getModel());
        return { key, value };
    }
}
