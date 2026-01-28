export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  readTime: number;
  featured?: boolean;
}

interface GetArticlesParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

const API_URL = "{{CONTENT_API_URL}}";

/**
 * Transforma URLs relativas de imagens para usar o proxy ou URL completa
 */
function transformImageUrl(imageUrl: string | null): string | null {
  if (!imageUrl) return null;
  
  // Se já é uma URL completa (http/https), retorna como está
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Se é uma URL relativa começando com /api/content/images/
  if (imageUrl.startsWith('/api/content/images/')) {
    // Transforma para usar o proxy /api-proxy/
    return imageUrl.replace('/api/content/images/', '/api-proxy/content/images/');
  }
  
  // Se é qualquer outra URL relativa começando com /api/
  if (imageUrl.startsWith('/api/')) {
    return imageUrl.replace('/api/', '/api-proxy/');
  }
  
  return imageUrl;
}

/**
 * Transforma URLs de imagens dentro do conteúdo HTML
 */
function transformContentImages(content: string): string {
  if (!content) return content;
  
  // Substituir src="/api/content/images/..." por src="/api-proxy/content/images/..."
  let transformedContent = content.replace(
    /src="\/api\/content\/images\//g,
    'src="/api-proxy/content/images/'
  );
  
  // Substituir src='/api/content/images/...' por src='/api-proxy/content/images/...'
  transformedContent = transformedContent.replace(
    /src='\/api\/content\/images\//g,
    "src='/api-proxy/content/images/"
  );
  
  // Substituir qualquer outro /api/ por /api-proxy/
  transformedContent = transformedContent.replace(
    /src="\/api\//g,
    'src="/api-proxy/'
  );
  transformedContent = transformedContent.replace(
    /src='\/api\//g,
    "src='/api-proxy/"
  );
  
  return transformedContent;
}

/**
 * Processa um artigo para transformar URLs de imagens
 */
function processArticle(article: any): Article {
  return {
    ...article,
    imageUrl: transformImageUrl(article.imageUrl),
    content: transformContentImages(article.content || ''),
  };
}

export const ArticleService = {
  async getArticles(params: GetArticlesParams = {}): Promise<Article[]> {
    const { page = 1, limit = 12, search = "", category = "" } = params;
    
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(search && { search }),
        ...(category && { category }),
      });

      const response = await fetch(`${API_URL}/articles?${queryParams}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();
      const articles = data || [];
      return articles.map(processArticle);
    } catch (error) {
      console.error("ArticleService.getArticles error:", error);
      return [];
    }
  },

  async getFeaturedArticle(): Promise<Article | null> {
    try {
      const response = await fetch(`${API_URL}/articles/featured`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch featured article");
      }

      const data = await response.json();
      return data ? processArticle(data) : null;
    } catch (error) {
      console.error("ArticleService.getFeaturedArticle error:", error);
      return null;
    }
  },

  async getArticleBySlug(slug: string): Promise<Article | null> {
    try {
      const response = await fetch(`${API_URL}/articles/${slug}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch article");
      }

      const data = await response.json();
      return data ? processArticle(data) : null;
    } catch (error) {
      console.error("ArticleService.getArticleBySlug error:", error);
      return null;
    }
  },

  async getCategories(): Promise<string[]> {
    try {
      const response = await fetch(`${API_URL}/categories`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error("ArticleService.getCategories error:", error);
      return [];
    }
  },
};
