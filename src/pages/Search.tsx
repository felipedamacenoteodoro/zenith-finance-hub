import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArticleGrid } from "@/components/ArticleGrid";
import { AdSpot } from "@/components/AdSpot";
import { ArticleService, Article } from "@/services/ArticleService";
// useSearchTracking será SUBSTITUÍDO pelo do base-site durante scaffold
import { useSearchTracking, trackSearchResultClick } from "@/hooks/useSearchTracking";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      ArticleService.getArticles({ search: query, limit: 12 })
        .then((articles) => setArticles(articles || []))
        .catch(() => setArticles([]))
        .finally(() => setLoading(false));
    } else {
      setArticles([]);
      setLoading(false);
    }
  }, [query]);

  // Rastrear busca automaticamente (hook será copiado do base-site)
  useSearchTracking(query, articles.length, "search-page");

  return (
    <Layout>
      <SEO
        title={query ? `Busca: ${query}` : "Busca"}
        description={`Resultados da busca por "${query}" no portal de finanças.`}
      />

      <div className="container py-8">
        <section className="mb-8">
          <h1 className="im-headline-hero mb-4 flex items-center gap-4">
            <SearchIcon className="h-8 w-8 text-primary" />
            Resultados da Busca
          </h1>

          {query && (
            <p className="body-lg text-muted-foreground">
              {loading
                ? "Buscando..."
                : articles.length > 0
                ? `${articles.length} resultado${articles.length > 1 ? "s" : ""} para "${query}"`
                : `Nenhum resultado encontrado para "${query}"`}
            </p>
          )}
        </section>

        {!query ? (
          <div className="bg-card border border-border rounded p-12 text-center">
            <SearchIcon className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h2 className="im-headline-section mb-2">Digite algo para buscar</h2>
            <p className="text-muted-foreground">
              Use a barra de busca no cabeçalho para encontrar artigos.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {articles.length > 0 ? (
              <div id="bvx-main-grid" className="space-y-6">
                {articles.map((article, index) => (
                  <article
                    key={article.id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <Link
                      to={`/artigo/${article.slug}`}
                      onClick={() => {
                        trackSearchResultClick(query, index, article.title);
                      }}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                      {article.excerpt && (
                        <p className="text-muted-foreground mb-2">{article.excerpt}</p>
                      )}
                      {article.publishedAt && (
                        <time className="text-sm text-muted-foreground">
                          {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
                        </time>
                      )}
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <ArticleGrid articles={articles} loading={loading} />
            )}

            {/* In-Article Ad */}
            <AdSpot position="in-content" zoneId="{{REVIVE_ZONE_INARTICLE_1}}" className="w-full" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
