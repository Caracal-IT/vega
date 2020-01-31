import { AnalyticsService } from "../../services/analytics.service";
export declare class SiriusAnalytics {
    static analyticsService: AnalyticsService;
    analyticsHandler(event: any): Promise<void>;
    onBlur(event: any): void;
}
