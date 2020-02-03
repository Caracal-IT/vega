export class RedirectActivity {
    constructor() {
        this.type = RedirectActivity.type;
        this.execute = (context) => {
            const sessionId = context.container.wfSessionId;
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
}
RedirectActivity.type = "redirect-activity";
