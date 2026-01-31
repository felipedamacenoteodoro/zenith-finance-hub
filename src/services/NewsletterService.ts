/**
 * NewsletterService - This file will be REPLACED by the one from base-site during scaffold
 *
 * Kept here only to ensure imports work during development.
 * The real file will be copied from server/templates/base-site/src/services/NewsletterService.ts
 *
 * The base-site NewsletterService already includes:
 * - websiteId: config.siteId (needed for tracking)
 * - website_url: '' (honeypot field)
 */

// config will be REPLACED by the one from base-site during scaffold
import { config } from "@/lib/config";

export interface NewsletterSubscription {
  email: string;
  name?: string;
  source?: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

// Temporary version - will be replaced by base-site
class NewsletterServiceClass {
  private static instance: NewsletterServiceClass;

  private constructor() {}

  public static getInstance(): NewsletterServiceClass {
    if (!NewsletterServiceClass.instance) {
      NewsletterServiceClass.instance = new NewsletterServiceClass();
    }
    return NewsletterServiceClass.instance;
  }

  public async subscribe(data: NewsletterSubscription): Promise<NewsletterResponse> {
    // This method will be replaced by the one from base-site
    // The base-site already sends websiteId and website_url correctly
    return {
      success: false,
      message: "NewsletterService will be replaced during scaffold",
    };
  }

  public validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export const NewsletterService = NewsletterServiceClass.getInstance();
