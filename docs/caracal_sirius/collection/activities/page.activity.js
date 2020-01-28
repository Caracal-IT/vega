export class PageActivity {
    constructor() {
        this.type = PageActivity.type;
        this.execute = (context) => {
            context.container.page = Object.assign(Object.assign({}, this), { context: context });
        };
    }
    static create(act) {
        return Object.assign(new PageActivity(), act);
    }
}
PageActivity.type = "page-activity";
