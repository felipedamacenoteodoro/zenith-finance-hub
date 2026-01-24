import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { HeroFeature } from "@/components/HeroFeature";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Newsletter } from "@/components/Newsletter";
import { Sidebar } from "@/components/Sidebar";
import { AdSpot } from "@/components/AdSpot";
import { ArticleService, Article } from "@/services/ArticleService";

const Index = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ArticleService.getArticles({ page: 1, limit: 12 })
      .then((articles) => setArticles(articles || []))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <SEO
        title="Início"
        description="Seu portal de notícias e análises do mercado financeiro. Encontre as melhores dicas de investimento, análises de mercado e ferramentas para suas finanças."
      />

      <div className="container py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="sr-only">{"{{PROJECT_NAME}}"} - Portal de Finanças</h1>
          <HeroFeature />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="headline-md mb-6">Últimas Notícias</h2>
              <ArticleGrid articles={articles} loading={loading} />
            </section>

            {/* In-Article Ad 1 */}
            <AdSpot position="in-content" zoneId="{{REVIVE_ZONE_INARTICLE_1}}" className="w-full" />

            {/* Newsletter */}
            <section className="my-12">
              <Newsletter />
            </section>

            {/* In-Article Ad 2 */}
            <AdSpot position="in-content" zoneId="{{REVIVE_ZONE_INARTICLE_2}}" className="w-full" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
