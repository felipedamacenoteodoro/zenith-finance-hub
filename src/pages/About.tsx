import { Target, Users, TrendingUp, Shield } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Newsletter } from "@/components/Newsletter";

const values = [
  {
    icon: Target,
    title: "Precisão",
    description:
      "Comprometemo-nos com a precisão e veracidade de todas as informações que publicamos, sempre baseadas em fontes confiáveis.",
  },
  {
    icon: Users,
    title: "Acessibilidade",
    description:
      "Tornamos o conhecimento financeiro acessível a todos, independente do nível de experiência com investimentos.",
  },
  {
    icon: TrendingUp,
    title: "Educação",
    description:
      "Acreditamos que a educação financeira é a base para decisões de investimento mais conscientes e seguras.",
  },
  {
    icon: Shield,
    title: "Independência",
    description:
      "Mantemos independência editorial, sem vínculos com instituições financeiras que possam influenciar nosso conteúdo.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="Sobre Nós"
        description="Conheça o {{PROJECT_NAME}}, seu portal de confiança para informações financeiras, análises de mercado e educação sobre investimentos."
      />

      <div className="container py-8">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="headline-xl mb-6">
            Sobre o <span className="text-accent-gradient">{"{{PROJECT_NAME}}"}</span>
          </h1>
          <p className="body-lg text-muted-foreground">
            Somos um portal dedicado a democratizar o acesso à informação financeira de qualidade. 
            Nossa missão é empoderar você com conhecimento para tomar decisões financeiras mais 
            inteligentes e alcançar seus objetivos.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <div className="card-finance-featured p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="headline-lg mb-4">Nossa Missão</h2>
                <p className="body-md text-muted-foreground mb-4">
                  O {"{{PROJECT_NAME}}"} nasceu da crença de que todos merecem acesso a informações 
                  financeiras claras e imparciais. Em um mundo onde decisões financeiras impactam 
                  diretamente a qualidade de vida, nosso papel é ser a ponte entre o complexo 
                  mundo dos investimentos e o investidor comum.
                </p>
                <p className="body-md text-muted-foreground">
                  Analisamos o mercado, traduzimos jargões financeiros e oferecemos ferramentas 
                  práticas para que você possa construir seu patrimônio com segurança e confiança.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="headline-lg text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-finance p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="headline-sm mb-2">{value.title}</h3>
                <p className="body-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="headline-lg text-center mb-8">O Que Oferecemos</h2>
          <div className="space-y-6">
            <div className="card-finance p-6">
              <h3 className="headline-sm mb-2">Análises de Mercado</h3>
              <p className="body-md text-muted-foreground">
                Cobertura diária dos principais acontecimentos do mercado financeiro brasileiro 
                e internacional, com análises aprofundadas e contextualizadas.
              </p>
            </div>
            <div className="card-finance p-6">
              <h3 className="headline-sm mb-2">Educação Financeira</h3>
              <p className="body-md text-muted-foreground">
                Artigos e guias para todos os níveis, desde conceitos básicos de finanças 
                pessoais até estratégias avançadas de investimento.
              </p>
            </div>
            <div className="card-finance p-6">
              <h3 className="headline-sm mb-2">Ferramentas Práticas</h3>
              <p className="body-md text-muted-foreground">
                Calculadoras, simuladores e ferramentas interativas para ajudar você a 
                planejar e acompanhar suas finanças.
              </p>
            </div>
            <div className="card-finance p-6">
              <h3 className="headline-sm mb-2">Newsletter Exclusiva</h3>
              <p className="body-md text-muted-foreground">
                Resumos semanais com as principais notícias e análises entregues diretamente 
                na sua caixa de entrada.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="headline-sm mb-4">Aviso Importante</h3>
            <p className="body-sm text-muted-foreground">
              O {"{{PROJECT_NAME}}"} fornece conteúdo exclusivamente informativo e educacional. 
              Não somos uma corretora, distribuidora ou consultoria de valores mobiliários. 
              As informações apresentadas não constituem recomendação de investimento. 
              Sempre consulte profissionais qualificados antes de tomar decisões financeiras.
            </p>
            <p className="body-sm text-muted-foreground mt-4">
              O site pode incluir erros técnicos, tipográficos ou fotográficos. 
              Não garantimos que qualquer material no site seja preciso, completo ou atual.
            </p>
          </div>
        </section>

        {/* Newsletter */}
        <section>
          <Newsletter />
        </section>
      </div>
    </Layout>
  );
};

export default About;
