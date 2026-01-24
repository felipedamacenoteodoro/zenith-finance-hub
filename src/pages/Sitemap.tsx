import { Link } from "react-router-dom";
import { Home, FileText, Wrench, Search, Shield, Scale, Users, Mail, Map } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";

const sitemapSections = [
  {
    title: "Páginas Principais",
    links: [
      { to: "/", label: "Página Inicial", icon: Home },
      { to: "/artigos", label: "Artigos", icon: FileText },
      { to: "/ferramentas", label: "Ferramentas", icon: Wrench },
      { to: "/busca", label: "Busca", icon: Search },
    ],
  },
  {
    title: "Institucional",
    links: [
      { to: "/sobre", label: "Sobre Nós", icon: Users },
      { to: "/contato", label: "Contato", icon: Mail },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacidade", label: "Política de Privacidade", icon: Shield },
      { to: "/termos", label: "Termos de Uso", icon: Scale },
      { to: "/sitemap", label: "Mapa do Site", icon: Map },
    ],
  },
];

const Sitemap = () => {
  return (
    <Layout>
      <SEO
        title="Mapa do Site"
        description="Navegue por todas as páginas do {{PROJECT_NAME}}. Encontre facilmente artigos, ferramentas e informações."
      />

      <div className="container py-8 max-w-4xl">
        <section className="text-center mb-12">
          <h1 className="headline-xl mb-4">Mapa do Site</h1>
          <p className="body-lg text-muted-foreground">
            Encontre todas as páginas do {"{{PROJECT_NAME}}"} organizadas por categoria.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sitemapSections.map((section) => (
            <div key={section.title} className="card-finance p-6">
              <h2 className="headline-sm mb-6">{section.title}</h2>
              <nav className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    data-bvx-track={`SITEMAP_${link.label.toUpperCase().replace(/\s/g, "_")}`}
                  >
                    <link.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Feed Link */}
        <section className="mt-12">
          <div className="card-finance p-6 text-center">
            <h2 className="headline-sm mb-4">Feed de Artigos</h2>
            <p className="body-sm text-muted-foreground mb-4">
              Acesse nosso feed de artigos para integração com leitores RSS ou aplicativos.
            </p>
            <a
              href="{{CONTENT_API_URL}}/feed/rss"
              target="_blank"
              rel="noopener noreferrer"
              className="link-finance"
              data-bvx-track="SITEMAP_RSS_FEED"
            >
              {"{{CONTENT_API_URL}}/feed/rss"}
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-8">
          <div className="p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              O site pode incluir erros técnicos, tipográficos ou fotográficos. 
              Não garantimos que qualquer material no site seja preciso, completo ou atual.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sitemap;
