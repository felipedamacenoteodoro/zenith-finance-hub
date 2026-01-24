import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Sidebar } from "@/components/Sidebar";
import { AdSpot } from "@/components/AdSpot";
import { ArticleService, Article } from "@/services/ArticleService";

const Articles = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("categoria") || "";
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    ArticleService.getArticles({ page, limit: 12, category })
      .then((articles) => setArticles(articles || []))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, [page, category]);

  return (
    <Layout>
      <SEO
        title={category ? `${category} - Artigos` : "Artigos"}
        description="Confira todos os artigos sobre finanças, investimentos, mercado e economia. Análises profundas e dicas práticas para suas decisões financeiras."
      />

      <div className="container py-8">
        <section className="mb-8">
          <h1 className="im-headline-hero mb-4">
            {category ? category : "Todos os Artigos"}
          </h1>
          <p className="im-body text-muted-foreground max-w-2xl">
            {category
              ? `Artigos sobre ${category.toLowerCase()} para manter você informado.`
              : "Explore nossa coleção completa de artigos sobre finanças e investimentos."}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ArticleGrid articles={articles} loading={loading} />

            {/* In-Article Ad */}
            <AdSpot position="in-content" zoneId="{{REVIVE_ZONE_INARTICLE_1}}" className="w-full" />

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-secondary text-foreground rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition-colors"
                data-bvx-track="ARTICLES_PREV_PAGE"
              >
                Anterior
              </button>
              <span className="px-4 py-2 text-muted-foreground">Página {page}</span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={articles.length < 12}
                className="px-4 py-2 bg-secondary text-foreground rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition-colors"
                data-bvx-track="ARTICLES_NEXT_PAGE"
              >
                Próxima
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
