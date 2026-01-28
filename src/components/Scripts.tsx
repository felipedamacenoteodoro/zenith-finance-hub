import { useEffect } from "react";
// AnalyticsService será SUBSTITUÍDO pelo do base-site durante scaffold
import { AnalyticsService } from "@/services/AnalyticsService";
// AdService será SUBSTITUÍDO pelo do base-site durante scaffold
import { AdService } from "@/services/AdService";

export const Scripts = () => {
  useEffect(() => {
    // Inicializar Analytics (PostHog) - AnalyticsService será copiado do base-site
    AnalyticsService?.initialize().catch((err: any) =>
      console.warn("Failed to init analytics:", err)
    );

    // Inicializar Revive Ads - AdService será copiado do base-site
    AdService?.initialize();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};
