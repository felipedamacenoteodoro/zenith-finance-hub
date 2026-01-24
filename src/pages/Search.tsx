import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArticleGrid } from "@/components/ArticleGrid";
import { AdSpot } from "@/components/AdSpot";
import { ArticleService, Article } from "@/services/ArticleService";

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

  return (
    <Layout>
      <SEO
        title={query ? `Busca: ${query}` : "Busca"}
        description={`Resultados da busca por "${query}" no portal de finanças.`}
      />

      <div className="container py-8">
        <section className="mb-8">
          <h1 className="headline-xl mb-4 flex items-center gap-4">
            <SearchIcon className="h-10 w-10 text-primary" />
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
          <div className="card-finance p-12 text-center">
            <SearchIcon className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h2 className="headline-md mb-2">Digite algo para buscar</h2>
            <p className="text-muted-foreground">
              Use a barra de busca no cabeçalho para encontrar artigos.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <ArticleGrid articles={articles} loading={loading} />

            {/* In-Article Ad */}
            <AdSpot position="in-content" zoneId="{{REVIVE_ZONE_INARTICLE_1}}" className="w-full" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
