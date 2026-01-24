import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 font-display text-xl font-bold text-foreground hover:text-primary transition-colors mb-4"
              data-bvx-track="FOOTER_LOGO"
            >
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>{"{{PROJECT_LOGO}}"}</span>
            </Link>
            <p className="text-muted-foreground body-sm max-w-md">
              Seu portal de informações financeiras. Análises, notícias e ferramentas para ajudar você a tomar melhores decisões financeiras.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_HOME">
                Início
              </Link>
              <Link to="/artigos" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_ARTICLES">
                Artigos
              </Link>
              <Link to="/ferramentas" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_TOOLS">
                Ferramentas
              </Link>
              <Link to="/busca" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_SEARCH">
                Busca
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/privacidade" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_PRIVACY">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_TERMS">
                Termos de Uso
              </Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_ABOUT">
                Sobre Nós
              </Link>
              <Link to="/contato" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_CONTACT">
                Contato
              </Link>
              <Link to="/sitemap" className="text-muted-foreground hover:text-foreground text-sm transition-colors" data-bvx-track="FOOTER_NAV_SITEMAP">
                Mapa do Site
              </Link>
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            O site pode incluir erros técnicos, tipográficos ou fotográficos. 
            Não garantimos que qualquer material no site seja preciso, completo ou atual. 
            As informações fornecidas não constituem aconselhamento financeiro, de investimento ou jurídico.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} {"{{PROJECT_NAME}}"}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
