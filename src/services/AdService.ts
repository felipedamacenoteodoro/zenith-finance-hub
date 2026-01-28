/**
 * STUB - Este arquivo será SUBSTITUÍDO pelo do base-site durante scaffold
 * Mantido aqui apenas para garantir que os imports funcionem durante desenvolvimento local
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
    // Stub - implementação real será copiada do base-site
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('[AdService Stub] Initialized');
    }
  }
}

export const AdService = AdServiceClass.getInstance();
