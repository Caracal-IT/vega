export class AnalyticsService {
    send(type, event) {
        const wfElement = event.path.find((i) => i.hasAttribute && i.hasAttribute("wf-element"));
        if (!wfElement)
            return;
        const payload = this.createPayload(type, wfElement, event.path);
        if (payload) {
            console.log("ANALYTICS", payload);
            window.postMessage({
                type: payload.type,
                page: payload.page,
                control: payload.control,
                value: payload.value,
                path: payload.wfPath.map(this.getName)
            }, "*");
        }
    }
    getName(item) {
        if (item.id)
            return item.id;
        if (item.page && item.page.name)
            return item.page.name;
        return "";
    }
    createPayload(type, wfElement, path) {
        const p = path.filter((i) => i.nodeName && i.nodeName.indexOf("document-fragment") === -1);
        const wfPage = p.find((i) => i.localName === "sirius-page");
        if (!wfPage)
            return null;
        const activity = Object.assign({}, wfPage.page);
        const wfPath = p.slice(0, p.indexOf(wfPage) + 1);
        if (!activity.name)
            return null;
        const page = activity.name;
        const control = wfElement.id;
        const value = wfElement.value;
        return { type, page, control, value, wfPath };
    }
}
