import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";
import { AdSpot } from "./AdSpot";
import { ArticleService, Article } from "@/services/ArticleService";

export const Sidebar = () => {
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ArticleService.getArticles({ page: 1, limit: 5 })
      .then((articles) => setRecentArticles(articles || []))
      .catch(() => setRecentArticles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <aside className="space-y-8">
      {/* Ad Spot Sidebar */}
      <AdSpot position="sidebar" zoneId="{{REVIVE_ZONE_SIDEBAR}}" className="w-full" />

      {/* Recent Articles */}
      <div className="card-finance p-6">
        <h3 className="headline-sm mb-6 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Mais Lidas
        </h3>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : recentArticles.length > 0 ? (
          <div className="space-y-4">
            {recentArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/artigos/${article.slug}`}
                className="block group"
                data-bvx-track="SIDEBAR_ARTICLE_CLICK"
              >
                <div className="flex gap-3">
                  <span className="text-2xl font-bold text-muted-foreground/50 font-display">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {article.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Nenhum artigo disponível.</p>
        )}

        <Link
          to="/artigos"
          className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          data-bvx-track="SIDEBAR_VIEW_ALL"
        >
          Ver todos os artigos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Categories */}
      <div className="card-finance p-6">
        <h3 className="headline-sm mb-6">Categorias</h3>
        <div className="flex flex-wrap gap-2">
          {["Investimentos", "Mercado", "Economia", "Finanças Pessoais", "Criptomoedas"].map(
            (category) => (
              <Link
                key={category}
                to={`/artigos?categoria=${encodeURIComponent(category)}`}
                className="category-badge hover:bg-primary/20 transition-colors"
                data-bvx-track={`SIDEBAR_CATEGORY_${category.toUpperCase()}`}
              >
                {category}
              </Link>
            )
          )}
        </div>
      </div>
    </aside>
  );
};
