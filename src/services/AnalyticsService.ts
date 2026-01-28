/**
 * STUB - Este arquivo será SUBSTITUÍDO pelo do base-site durante scaffold
 * Mantido aqui apenas para garantir que os imports funcionem durante desenvolvimento local
 */

class AnalyticsServiceClass {
  private static instance: AnalyticsServiceClass;

  private constructor() {}

  public static getInstance(): AnalyticsServiceClass {
    if (!AnalyticsServiceClass.instance) {
      AnalyticsServiceClass.instance = new AnalyticsServiceClass();
    }
    return AnalyticsServiceClass.instance;
  }

  public async initialize(): Promise<void> {
    // Stub - implementação real será copiada do base-site
  }

  public capture(event: string, properties: Record<string, any> = {}): void {
    // Stub - implementação real será copiada do base-site
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('[AnalyticsService Stub]', event, properties);
    }
  }

  public captureArticleScrollDeep(
    articleId?: string,
    articleSlug?: string,
    scrollPercentage: number = 50
  ): void {
    this.capture('article_scroll_deep', {
      article_id: articleId,
      article_slug: articleSlug,
      scroll_percentage: scrollPercentage,
    });
  }
}

export const AnalyticsService = AnalyticsServiceClass.getInstance();
