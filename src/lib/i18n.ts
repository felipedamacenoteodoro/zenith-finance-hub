/**
 * Sistema de Internacionalização (i18n)
 * 
 * Este sistema permite que o template seja facilmente traduzido pelo LangChain
 * baseado no idioma detectado do nicho/domínio.
 * 
 * A IA só precisa criar um novo arquivo em src/locales/{locale}.json
 * traduzindo os textos do arquivo base (pt-BR.json ou en-US.json)
 */

export type Locale = 'pt-BR' | 'en-US' | 'es-ES' | string;

interface Translations {
  [key: string]: string | Translations;
}

// Cache de traduções carregadas
const translationsCache: Map<Locale, Translations> = new Map();

/**
 * Carrega as traduções de um locale específico
 */
async function loadTranslations(locale: Locale): Promise<Translations> {
  // Verifica cache
  if (translationsCache.has(locale)) {
    return translationsCache.get(locale)!;
  }

  try {
    // Tenta carregar o arquivo de tradução
    const module = await import(`../locales/${locale}.json`);
    const translations = module.default || module;
    translationsCache.set(locale, translations);
    return translations;
  } catch (error) {
    console.warn(`[i18n] Locale ${locale} não encontrado, usando pt-BR como fallback`);
    
    // Fallback para pt-BR
    if (locale !== 'pt-BR') {
      try {
        const fallback = await import('../locales/pt-BR.json');
        const translations = fallback.default || fallback;
        translationsCache.set(locale, translations);
        return translations;
      } catch {
        // Se pt-BR também não existir, retorna objeto vazio
        return {};
      }
    }
    
    return {};
  }
}

/**
 * Classe principal do sistema i18n
 */
class I18nService {
  private locale: Locale = 'pt-BR';
  private translations: Translations = {};
  private listeners: Set<() => void> = new Set();

  /**
   * Inicializa o sistema com um locale
   */
  async init(locale: Locale): Promise<void> {
    this.locale = locale;
    this.translations = await loadTranslations(locale);
    this.notifyListeners();
  }

  /**
   * Obtém uma tradução por chave (suporta notação de ponto: "home.title")
   */
  t(key: string, params?: Record<string, string | number>): string {
    const keys = key.split('.');
    let value: any = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Se não encontrar, retorna a chave
        console.warn(`[i18n] Tradução não encontrada: ${key}`);
        return key;
      }
    }

    if (typeof value !== 'string') {
      return key;
    }

    // Substitui parâmetros no formato {{param}}
    if (params) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
        return params[paramKey]?.toString() || match;
      });
    }

    return value;
  }

  /**
   * Obtém o locale atual
   */
  getLocale(): Locale {
    return this.locale;
  }

  /**
   * Registra um listener para mudanças de locale
   */
  onLocaleChange(callback: () => void): () => void {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(callback => callback());
  }
}

// Singleton
export const i18n = new I18nService();

// Import React para o hook
import React from 'react';

/**
 * Hook React para usar traduções
 */
export function useTranslation() {
  const [locale, setLocaleState] = React.useState<Locale>(i18n.getLocale());

  React.useEffect(() => {
    const unsubscribe = i18n.onLocaleChange(() => {
      setLocaleState(i18n.getLocale());
    });
    return unsubscribe;
  }, []);

  return {
    t: (key: string, params?: Record<string, string | number>) => i18n.t(key, params),
    locale,
  };
}
