import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <SEO
        title="Política de Privacidade"
        description="Conheça nossa política de privacidade e saiba como tratamos seus dados pessoais no {{PROJECT_NAME}}."
      />

      <div className="container py-8 max-w-4xl">
        <h1 className="headline-xl mb-8">Política de Privacidade</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="body-lg text-muted-foreground">
              Esta Política de Privacidade descreve como {"{{PROJECT_NAME}}"} ("nós", "nosso" ou "site") 
              coleta, usa e compartilha informações sobre você quando você visita nosso site 
              {"{{DOMAIN}}"}.
            </p>
            <p className="body-md text-muted-foreground">
              Última atualização: Janeiro de 2025
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">1. Informações que Coletamos</h2>
            <h3 className="headline-sm mb-2">1.1 Informações Fornecidas por Você</h3>
            <p className="body-md text-muted-foreground mb-4">
              Coletamos informações que você nos fornece diretamente, como:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Endereço de e-mail quando você se inscreve em nossa newsletter</li>
              <li>Informações de contato quando você nos envia uma mensagem</li>
              <li>Preferências de conteúdo e interesses</li>
            </ul>

            <h3 className="headline-sm mb-2 mt-6">1.2 Informações Coletadas Automaticamente</h3>
            <p className="body-md text-muted-foreground mb-4">
              Quando você visita nosso site, coletamos automaticamente certas informações, incluindo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Endereço IP e localização geográfica aproximada</li>
              <li>Tipo de navegador e sistema operacional</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Site de referência e termos de busca</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-md mb-4">2. Cookies e Tecnologias de Rastreamento</h2>
            <p className="body-md text-muted-foreground mb-4">
              <strong>Importante:</strong> Terceiros, incluindo Google, PostHog e parceiros de publicidade, 
              podem colocar e ler cookies no navegador dos usuários ou usar web beacons para coletar 
              informações como resultado de anúncios veiculados em nosso site.
            </p>
            <p className="body-md text-muted-foreground mb-4">
              Utilizamos os seguintes tipos de cookies:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
              <li><strong>Cookies de Análise:</strong> Nos ajudam a entender como os visitantes interagem com o site (ex: PostHog)</li>
              <li><strong>Cookies de Publicidade:</strong> Usados para exibir anúncios relevantes (ex: Google Ads, Revive Adserver)</li>
            </ul>
            <p className="body-md text-muted-foreground mt-4">
              Você pode controlar os cookies através das configurações do seu navegador. Note que 
              desabilitar cookies pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">3. Como Usamos Suas Informações</h2>
            <p className="body-md text-muted-foreground mb-4">
              Usamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Enviar nossa newsletter e atualizações sobre conteúdo financeiro</li>
              <li>Melhorar nosso site e a experiência do usuário</li>
              <li>Analisar tendências de uso e comportamento</li>
              <li>Exibir anúncios personalizados</li>
              <li>Responder às suas perguntas e solicitações</li>
              <li>Prevenir fraudes e atividades ilegais</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-md mb-4">4. Compartilhamento de Informações</h2>
            <p className="body-md text-muted-foreground mb-4">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Provedores de Serviço:</strong> Empresas que nos ajudam a operar o site, como serviços de hospedagem e análise</li>
              <li><strong>Parceiros de Publicidade:</strong> Para exibir anúncios relevantes em nosso site</li>
              <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger nossos direitos</li>
            </ul>
            <p className="body-md text-muted-foreground mt-4">
              Não vendemos suas informações pessoais a terceiros.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">5. Seus Direitos</h2>
            <p className="body-md text-muted-foreground mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar seu consentimento a qualquer momento</li>
              <li>Optar por não receber comunicações de marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="headline-md mb-4">6. Segurança</h2>
            <p className="body-md text-muted-foreground">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
              informações contra acesso não autorizado, alteração, divulgação ou destruição. 
              No entanto, nenhuma transmissão de dados pela Internet é 100% segura.
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">7. Alterações nesta Política</h2>
            <p className="body-md text-muted-foreground">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
              quaisquer alterações publicando a nova política nesta página e atualizando a data 
              de "última atualização".
            </p>
          </section>

          <section>
            <h2 className="headline-md mb-4">8. Contato</h2>
            <p className="body-md text-muted-foreground">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos 
              seus dados, entre em contato conosco através da nossa página de{" "}
              <a href="/contato" className="link-finance" data-bvx-track="PRIVACY_CONTACT_LINK">
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

export default Privacy;
