import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArticleService, Article } from "@/services/ArticleService";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { AdSpot } from "@/components/AdSpot";
import { Newsletter } from "@/components/Newsletter";
// useScrollDepth será SUBSTITUÍDO pelo do base-site durante scaffold
import { useScrollDepth } from "@/hooks/useScrollDepth";
// AnalyticsService será SUBSTITUÍDO pelo do base-site durante scaffold
import { AnalyticsService } from "@/services/AnalyticsService";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

/**
 * ArticleDetail - Página de detalhe do artigo
 * 
 * JÁ INCLUI:
 * - AdSpot antes do conteúdo
 * - AdSpot depois do conteúdo
 * - Newsletter após o artigo
 * - SEO meta tags
 * - Analytics tracking (article_view e article_scroll_deep)
 */
export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const data = await ArticleService.getArticleBySlug(slug);
        if (data) {
          setArticle(data);
          // Rastrear visualização do artigo
          AnalyticsService?.capture("article_view", {
            article_slug: slug,
            article_title: data.title,
            article_category: data.category,
          });
        } else {
          setError("Artigo não encontrado");
        }
      } catch (err) {
        setError("Erro ao carregar artigo");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  // Rastrear scroll profundo no artigo (hook será copiado do base-site)
  if (article) {
    useScrollDepth(article.id, article.slug, true, 50);
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      </Layout>
    );
  }

  if (error || !article) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold mb-4">{error || "Artigo não encontrado"}</h1>
          <Link to="/artigos" className="text-primary hover:underline">
            Voltar para artigos
          </Link>
        </div>
      </Layout>
    );
  }

  const publishDate = article.publishedAt;

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.excerpt || article.title}
        image={article.imageUrl}
      />

      <article className="container max-w-4xl mx-auto py-8">
        {/* Back link */}
        <Link
          to="/artigos"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para artigos
        </Link>

        {/* AD SPOT: Before Article */}
        <AdSpot
          position="in-content"
          zoneId="{{REVIVE_ZONE_INARTICLE_1}}"
          className="mb-8"
        />

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="im-headline-hero mb-4">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
            {publishDate && (
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(publishDate).toLocaleDateString("pt-BR")}
              </span>
            )}
            {article.readTime && (
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime} min de leitura
              </span>
            )}
            {article.category && (
              <span className="px-2 py-1 bg-secondary rounded text-xs">
                {article.category}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto rounded-lg mb-8"
          />
        )}

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* AD SPOT: After Article */}
        <AdSpot
          position="in-content"
          zoneId="{{REVIVE_ZONE_INARTICLE_2}}"
          className="mt-8"
        />

        {/* Newsletter CTA */}
        <div className="mt-12 border-t pt-8">
          <Newsletter />
        </div>
      </article>
    </Layout>
  );
}
