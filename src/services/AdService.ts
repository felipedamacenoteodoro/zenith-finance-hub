/**
 * STUB - This file will be REPLACED by the one from base-site during scaffold
 * Kept here only to ensure imports work during local development
 */

class AdServiceClass {
  private static instance: AdServiceClass;

  private constructor() {}

  public static getInstance(): AdServiceClass {
    if (!AdServiceClass.instance) {
      AdServiceClass.instance = new AdServiceClass();
    }
    return AdServiceClass.instance;
  }

  public initialize(): void {
    // Stub - real implementation will be copied from base-site
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('[AdService Stub] Initialized');
    }
  }
}

export const AdService = AdServiceClass.getInstance();
