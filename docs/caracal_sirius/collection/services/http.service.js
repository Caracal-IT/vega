import { HttpVerb } from "../model/http/HttpVerb";
import { MappingDirection } from "../model/http/MappingDirection";
export class HttpService {
    constructor(modelService) {
        this.modelService = modelService;
    }
    async fetch(url, mappings) {
        const response = await fetch(url.url, this.getConfig(url, mappings));
        const data = await response.json();
        return this.setModelValues(data, mappings);
    }
    getConfig(url, mappings) {
        return {
            method: url.method,
            mode: 'cors',
            headers: url.headers,
            redirect: 'follow',
            referrer: 'no-referrer',
            body: this.getBody(url, mappings)
        };
    }
    getBody(url, mappings) {
        if (url.method === HttpVerb.GET || url.method === HttpVerb.DELETE)
            return null;
        let body = {};
        const model = this.modelService.getModel();
        mappings
            .filter(m => m.direction === MappingDirection.Out || m.direction === MappingDirection.InOut)
            .forEach(m => Object.assign(body, { [m.client]: this.modelService.getValue(m.client, model) }));
        return JSON.stringify(body);
    }
    setModelValues(data, mappings) {
        if (!mappings || mappings.length === 0)
            return Object.keys(data).forEach(k => this.modelService.setModelValue(k, data[k]));
        mappings
            .filter(m => m.direction === MappingDirection.Out || m.direction === MappingDirection.InOut)
            .forEach(m => this.modelService.setModelValue(m.client, this.modelService.getValue(m.remote, data)));
    }
}
