import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4" data-bvx-track="FOOTER_LOGO">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">$</span>
              </div>
              <span className="font-display text-lg font-bold text-background">
                {"{{PROJECT_LOGO}}"}
              </span>
            </Link>
            <p className="text-sm text-background/70">
              Seu portal de informações financeiras e análises de mercado.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-background">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_HOME">Início</Link>
              <Link to="/artigos" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_ARTICLES">Artigos</Link>
              <Link to="/ferramentas" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_TOOLS">Ferramentas</Link>
              <Link to="/busca" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_SEARCH">Busca</Link>
            </nav>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-background">Institucional</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/sobre" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_ABOUT">Sobre Nós</Link>
              <Link to="/contato" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_CONTACT">Contato</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-background">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/privacidade" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_PRIVACY">Privacidade</Link>
              <Link to="/termos" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_TERMS">Termos de Uso</Link>
              <Link to="/sitemap" className="text-sm text-background/70 hover:text-primary" data-bvx-track="FOOTER_NAV_SITEMAP">Mapa do Site</Link>
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-background/20 pt-6">
          <p className="text-xs text-background/50 text-center max-w-3xl mx-auto mb-4">
            O site pode incluir erros técnicos, tipográficos ou fotográficos. 
            Não garantimos que qualquer material no site seja preciso, completo ou atual. 
            As informações fornecidas não constituem aconselhamento financeiro, de investimento ou jurídico.
          </p>
          <p className="text-xs text-background/50 text-center">
            © {currentYear} {"{{PROJECT_NAME}}"}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
