export class IPCActivity {
    constructor() {
        this.type = IPCActivity.type;
        this.execute = (context) => {
            return context.container.ipc(this.process, this.next);
        };
    }
    static create(act) {
        return Object.assign(new IPCActivity(), act);
    }
}
IPCActivity.type = "ipc-activity";
