import { AnalyticsService } from "../../services/analytics.service";
export class SiriusAnalytics {
    async analyticsHandler(event) {
        const wfElement = event.path.find((i) => i.hasAttribute && i.hasAttribute("wf-element"));
        if (!wfElement)
            return;
        event.path[0].addEventListener("blur", this.onBlur);
        SiriusAnalytics.analyticsService.send("click", event);
    }
    onBlur(event) {
        event.target.removeEventListener("blur", this.onBlur);
        SiriusAnalytics.analyticsService.send("blur", event);
    }
    static get is() { return "sirius-analytics"; }
    static get listeners() { return [{
            "name": "click",
            "method": "analyticsHandler",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
SiriusAnalytics.analyticsService = new AnalyticsService();
