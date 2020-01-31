export class Url {
    constructor(rawUrl, method) {
        this.rawUrl = rawUrl;
        this.method = method;
    }
    get url() {
        return this.rawUrl;
    }
    get headers() {
        return {
            'Content-Type': 'application/json',
            'api-key': this.apiKey
        };
    }
}
