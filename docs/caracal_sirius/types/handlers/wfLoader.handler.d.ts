import { HttpService } from './../services/http.service';
export declare class WFLoaderHandler {
    private http;
    baseUrl: string;
    apiKey: string;
    constructor(http: HttpService);
    load(process: string): Promise<object>;
}
