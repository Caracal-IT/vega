import { AnalyticsService } from "../../services/analytics.service";
export declare class SiriusAnalytics {
    static lastPath: any;
    static analyticsService: AnalyticsService;
    analyticsHandler(event: any): Promise<void>;
    wfMessage(event: any): void;
    onBlur(event: Event): void;
}
