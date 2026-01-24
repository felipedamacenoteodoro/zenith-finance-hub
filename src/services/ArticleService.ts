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
      return data || [];
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
      return data || null;
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
      return data || null;
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
