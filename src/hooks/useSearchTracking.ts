/**
 * STUB - Este arquivo será SUBSTITUÍDO pelo do base-site durante scaffold
 * Mantido aqui apenas para garantir que os imports funcionem durante desenvolvimento local
 */

export function useSearchTracking(
  searchQuery: string | null,
  resultsCount: number,
  searchLocation: string = 'search-page'
): void {
  // Stub - implementação real será copiada do base-site
  if (searchQuery && searchQuery.trim().length > 0) {
    // No-op durante desenvolvimento
  }
}

export function trackSearchResultClick(
  searchQuery: string,
  resultPosition: number,
  resultTitle: string
): void {
  // Stub - implementação real será copiada do base-site
  // No-op durante desenvolvimento
}
