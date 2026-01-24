import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { ArticleService, Article } from "@/services/ArticleService";

export const HeroFeature = () => {
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ArticleService.getFeaturedArticle()
      .then((article) => setFeaturedArticle(article))
      .catch(() => setFeaturedArticle(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div id="bvx-hero-feature" className="card-finance-featured overflow-hidden animate-pulse">
        {/* BVX_CONTENT_FEATURE */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-video md:aspect-auto bg-muted rounded-lg" />
          <div className="flex flex-col justify-center p-6 space-y-4">
            <div className="h-6 bg-muted rounded w-24" />
            <div className="h-10 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (!featuredArticle) {
    return (
      <div id="bvx-hero-feature" className="card-finance-featured p-12 text-center">
        {/* BVX_CONTENT_FEATURE */}
        <h2 className="headline-lg mb-4">Bem-vindo ao {"{{PROJECT_NAME}}"}</h2>
        <p className="body-md text-muted-foreground">
          Seu portal de notícias e análises do mercado financeiro.
        </p>
      </div>
    );
  }

  return (
    <div id="bvx-hero-feature">
      {/* BVX_CONTENT_FEATURE */}
      <ArticleCard article={featuredArticle} featured />
    </div>
  );
};
