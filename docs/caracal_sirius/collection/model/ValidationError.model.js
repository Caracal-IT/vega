export class ValidationError extends Error {
    constructor() {
        super(...arguments);
        this.type = "ValidationError";
    }
}
