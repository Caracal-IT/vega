export class RedirectActivity {
    constructor() {
        this.type = RedirectActivity.type;
        this.execute = (context) => {
            const sessionId = this.UUID();
            context.container.dehydrate(sessionId);
            if (this.url.indexOf("?") === -1)
                document.location.href = `${this.url}?sessionId=${sessionId}`;
            else
                document.location.href = `${this.url}&sessionId=${sessionId}`;
        };
    }
    static create(act) {
        return Object.assign(new RedirectActivity(), act);
    }
    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
RedirectActivity.type = "redirect-activity";
