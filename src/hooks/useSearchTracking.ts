/**
 * STUB - This file will be REPLACED by the one from base-site during scaffold
 * Kept here only to ensure imports work during local development
 */

export function useSearchTracking(
  searchQuery: string | null,
  resultsCount: number,
  searchLocation: string = 'search-page'
): void {
  // Stub - real implementation will be copied from base-site
  if (searchQuery && searchQuery.trim().length > 0) {
    // No-op during development
  }
}

export function trackSearchResultClick(
  searchQuery: string,
  resultPosition: number,
  resultTitle: string
): void {
  // Stub - real implementation will be copied from base-site
  // No-op during development
}
