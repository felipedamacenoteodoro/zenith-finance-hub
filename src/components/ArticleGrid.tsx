import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/services/ArticleService";

interface ArticleGridProps {
  articles: Article[];
  loading?: boolean;
}

export const ArticleGrid = ({ articles, loading = false }: ArticleGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card-finance overflow-hidden animate-pulse">
            <div className="aspect-video bg-muted" />
            <div className="p-5 space-y-3">
              <div className="h-4 bg-muted rounded w-20" />
              <div className="h-6 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground body-lg">
          Nenhum artigo encontrado.
        </p>
      </div>
    );
  }

  return (
    <div id="bvx-main-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* BVX_CONTENT_GRID */}
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
