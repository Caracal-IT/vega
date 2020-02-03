import { AnalyticsService } from "../../services/analytics.service";
export class SiriusAnalytics {
    async analyticsHandler(event) {
        const path = SiriusAnalytics.analyticsService.getPath(event);
        if (SiriusAnalytics.lastPath[0] === path[0])
            return;
        SiriusAnalytics.lastPath = path;
        const wfElement = path.find((i) => i.hasAttribute && i.hasAttribute("wf-element"));
        if (!wfElement)
            return;
        path[0].addEventListener("blur", this.onBlur);
        SiriusAnalytics.analyticsService.send("click", path);
    }
    wfMessage(event) {
        SiriusAnalytics.analyticsService.sendMessage(event);
    }
    onBlur(event) {
        SiriusAnalytics.analyticsService.send("blur", SiriusAnalytics.lastPath);
        event.target.removeEventListener("blur", this.onBlur);
    }
    static get is() { return "sirius-analytics"; }
    static get listeners() { return [{
            "name": "click",
            "method": "analyticsHandler",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "wfMessage",
            "method": "wfMessage",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
SiriusAnalytics.lastPath = [null];
SiriusAnalytics.analyticsService = new AnalyticsService();
