import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Article } from "@/services/ArticleService";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  if (featured) {
    return (
      <article className="card-finance-featured overflow-hidden group">
        <Link
          to={`/artigos/${article.slug}`}
          className="block"
          data-bvx-track="ARTICLE_FEATURED_CLICK"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video md:aspect-auto overflow-hidden rounded-lg">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>

            <div className="flex flex-col justify-center p-4 md:p-6">
              <span className="category-badge mb-4">{article.category}</span>

              <h2 className="headline-lg mb-4 group-hover:text-primary transition-colors">
                {article.title}
              </h2>

              <p className="body-md text-muted-foreground mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{formattedDate}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime} min
                  </span>
                </div>

                <span className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Ler mais
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="card-finance overflow-hidden group">
      <Link
        to={`/artigos/${article.slug}`}
        className="block"
        data-bvx-track="ARTICLE_CARD_CLICK"
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="p-5">
          <span className="category-badge mb-3">{article.category}</span>

          <h3 className="headline-sm mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="body-sm text-muted-foreground mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{formattedDate}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime} min
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};
