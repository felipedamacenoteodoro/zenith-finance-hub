import { useEffect } from "react";
// AnalyticsService will be REPLACED by the one from base-site during scaffold
import { AnalyticsService } from "@/services/AnalyticsService";
// AdService will be REPLACED by the one from base-site during scaffold
import { AdService } from "@/services/AdService";

export const Scripts = () => {
  useEffect(() => {
    // Initialize Analytics (PostHog) - AnalyticsService will be copied from base-site
    AnalyticsService?.initialize().catch((err: any) =>
      console.warn("Failed to init analytics:", err)
    );

    // Initialize Revive Ads - AdService will be copied from base-site
    AdService?.initialize();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};
