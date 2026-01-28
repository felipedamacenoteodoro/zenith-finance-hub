/**
 * STUB - Este arquivo será SUBSTITUÍDO pelo do base-site durante scaffold
 * Mantido aqui apenas para garantir que os imports funcionem durante desenvolvimento local
 */

export const config = {
  // Site
  siteId: import.meta.env.VITE_SITE_ID || '',
  siteName: import.meta.env.VITE_SITE_NAME || 'Site',
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  siteDescription: import.meta.env.VITE_SITE_DESCRIPTION || '',
  siteKeywords: import.meta.env.VITE_SITE_KEYWORDS || '',

  // API
  apiUrl: import.meta.env.VITE_API_URL || '',
  contentApiUrl: import.meta.env.VITE_CONTENT_API_BASE_URL || '',

  // Analytics (PostHog)
  posthogKey: import.meta.env.VITE_POSTHOG_KEY || '',
  posthogHost: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',

  // Ads (Revive)
  reviveUrl: import.meta.env.VITE_REVIVE_URL || '',
  reviveId: import.meta.env.VITE_REVIVE_ID || '',
  reviveZoneHeader: import.meta.env.VITE_REVIVE_ZONE_HEADER || '',
  reviveZoneSidebar: import.meta.env.VITE_REVIVE_ZONE_SIDEBAR || '',
  reviveZoneInArticle1: import.meta.env.VITE_REVIVE_ZONE_INARTICLE_1 || '',
  reviveZoneInArticle2: import.meta.env.VITE_REVIVE_ZONE_INARTICLE_2 || '',
  reviveZoneStickyFooter: import.meta.env.VITE_REVIVE_ZONE_STICKY_FOOTER || '',

  // Newsletter
  newsletterEndpoint: import.meta.env.VITE_NEWSLETTER_ENDPOINT || '',

  // Locale
  locale: import.meta.env.VITE_LOCALE || 'pt-BR',
} as const;

export type Config = typeof config;
