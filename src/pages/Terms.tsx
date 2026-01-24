import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Termos de Uso"
        description="Leia os termos de uso do {{PROJECT_NAME}} e conheça as condições para utilização do nosso portal de finanças."
      />

      <div className="container py-8 max-w-4xl">
        <h1 className="headline-xl mb-8">Termos de Uso</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="body-lg text-muted-foreground">
              Bem-vindo ao {"{{PROJECT_NAME}}"}. Ao acessar e usar nosso site {"{{DOMAIN}}"}, você concorda 
              em cumprir e estar vinculado aos seguintes termos e condições de uso.
            </p>
            <p className="body-md text-muted-foreground">
              Última atualização: Janeiro de 2025
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">1. Aceitação dos Termos</h2>
            <p className="body-md text-muted-foreground">
              Ao acessar ou usar o {"{{PROJECT_NAME}}"}, você confirma que leu, entendeu e concorda em 
              estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte 
              destes termos, não deve usar nosso site.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">2. Descrição do Serviço</h2>
            <p className="body-md text-muted-foreground mb-4">
              O {"{{PROJECT_NAME}}"} é um portal de conteúdo informativo sobre finanças, investimentos, 
              economia e mercado financeiro. Oferecemos:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Artigos e análises sobre o mercado financeiro</li>
              <li>Notícias econômicas e de investimentos</li>
              <li>Ferramentas e calculadoras financeiras</li>
              <li>Newsletter com conteúdo exclusivo</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-md mb-4">3. Isenção de Responsabilidade Financeira</h2>
            <p className="body-md text-muted-foreground mb-4">
              <strong>IMPORTANTE:</strong> O conteúdo publicado no {"{{PROJECT_NAME}}"} tem caráter 
              exclusivamente informativo e educacional. Não constitui:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Aconselhamento financeiro profissional</li>
              <li>Recomendação de investimento</li>
              <li>Consultoria de valores mobiliários</li>
              <li>Orientação jurídica ou contábil</li>
            </ul>
            <p className="body-md text-muted-foreground mt-4">
              Decisões de investimento devem ser tomadas após consulta com profissionais 
              qualificados e registrados junto aos órgãos reguladores competentes.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">4. Propriedade Intelectual</h2>
            <p className="body-md text-muted-foreground mb-4">
              Todo o conteúdo do {"{{PROJECT_NAME}}"}, incluindo textos, gráficos, logotipos, ícones, 
              imagens e software, é de propriedade exclusiva do {"{{PROJECT_NAME}}"} ou de seus 
              licenciadores e está protegido pelas leis de direitos autorais.
            </p>
            <p className="body-md text-muted-foreground">
              É proibida a reprodução, distribuição, modificação ou uso comercial do conteúdo 
              sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">5. Uso Aceitável</h2>
            <p className="body-md text-muted-foreground mb-4">
              Ao usar nosso site, você concorda em:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Fornecer informações verdadeiras ao se cadastrar</li>
              <li>Não usar o site para atividades ilegais ou prejudiciais</li>
              <li>Não tentar acessar áreas restritas do sistema</li>
              <li>Não interferir no funcionamento do site</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-md mb-4">6. Cadastro e Newsletter</h2>
            <p className="body-md text-muted-foreground mb-4">
              Ao se inscrever em nossa newsletter, você:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Concorda em receber comunicações por e-mail do {"{{PROJECT_NAME}}"}</li>
              <li>Confirma que o endereço de e-mail fornecido é seu</li>
              <li>Pode cancelar sua inscrição a qualquer momento através do link nos e-mails</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-md mb-4">7. Publicidade</h2>
            <p className="body-md text-muted-foreground">
              O {"{{PROJECT_NAME}}"} exibe anúncios de terceiros para financiar suas operações. 
              Não somos responsáveis pelo conteúdo dos anúncios ou pelos produtos/serviços 
              anunciados. A exibição de um anúncio não implica endosso ou recomendação.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">8. Links Externos</h2>
            <p className="body-md text-muted-foreground">
              Nosso site pode conter links para sites de terceiros. Não temos controle sobre 
              o conteúdo ou práticas desses sites e não somos responsáveis por eles. O acesso 
              a sites externos é por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">9. Limitação de Responsabilidade</h2>
            <p className="body-md text-muted-foreground">
              Na máxima extensão permitida por lei, o {"{{PROJECT_NAME}}"} não será responsável por 
              quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes 
              resultantes do uso ou incapacidade de usar nosso site ou conteúdo.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">10. Modificações dos Termos</h2>
            <p className="body-md text-muted-foreground">
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
              Alterações entram em vigor imediatamente após sua publicação. O uso continuado 
              do site após modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">11. Lei Aplicável</h2>
            <p className="body-md text-muted-foreground">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
              Qualquer disputa será resolvida nos tribunais do Brasil.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">12. Contato</h2>
            <p className="body-md text-muted-foreground">
              Para questões relacionadas a estes Termos de Uso, entre em contato através 
              da nossa página de{" "}
              <a href="/contato" className="link-finance" data-bvx-track="TERMS_CONTACT_LINK">
                Contato
              </a>.
            </p>
          </section>

          <section className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              O site pode incluir erros técnicos, tipográficos ou fotográficos. 
              Não garantimos que qualquer material no site seja preciso, completo ou atual. 
              As informações fornecidas não constituem aconselhamento financeiro, de investimento ou jurídico.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
