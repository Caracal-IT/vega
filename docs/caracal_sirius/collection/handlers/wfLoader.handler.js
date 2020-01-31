import { Url } from '../model/http/Url';
import { HttpVerb } from '../model/http/HttpVerb';
export class WFLoaderHandler {
    constructor(http) {
        this.http = http;
    }
    load(process) {
        const url = new Url(`${this.baseUrl}\\${process}`, HttpVerb.GET);
        url.apiKey = this.apiKey;
        return this.http
            .fetchData(url);
    }
}
