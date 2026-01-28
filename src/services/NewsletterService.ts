/**
 * NewsletterService - Este arquivo será SUBSTITUÍDO pelo do base-site durante scaffold
 * 
 * Mantido aqui apenas para garantir que os imports funcionem durante desenvolvimento.
 * O arquivo real será copiado de server/templates/base-site/src/services/NewsletterService.ts
 * 
 * O NewsletterService do base-site já inclui:
 * - websiteId: config.siteId (necessário para tracking)
 * - website_url: '' (honeypot field)
 */

// config será SUBSTITUÍDO pelo do base-site durante scaffold
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

// Versão temporária - será substituída pelo base-site
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
    // Este método será substituído pelo do base-site
    // O base-site já envia websiteId e website_url corretamente
    return {
      success: false,
      message: "NewsletterService será substituído durante scaffold",
    };
  }

  public validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export const NewsletterService = NewsletterServiceClass.getInstance();
