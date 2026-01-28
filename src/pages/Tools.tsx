import { Calculator, PieChart, TrendingUp, Wallet, Target, BarChart3 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { AdSpot } from "@/components/AdSpot";
// trackToolUsed será SUBSTITUÍDO pelo do base-site durante scaffold
import { trackToolUsed } from "@/hooks/useToolTracking";

const tools = [
  {
    icon: Calculator,
    title: "Calculadora de Juros Compostos",
    description: "Simule o crescimento do seu dinheiro ao longo do tempo com juros compostos.",
    available: false,
  },
  {
    icon: PieChart,
    title: "Simulador de Investimentos",
    description: "Compare diferentes tipos de investimentos e veja qual é o melhor para você.",
    available: false,
  },
  {
    icon: TrendingUp,
    title: "Análise de Ações",
    description: "Acompanhe indicadores fundamentalistas e técnicos das principais ações.",
    available: false,
  },
  {
    icon: Wallet,
    title: "Planejador de Orçamento",
    description: "Organize suas finanças pessoais e controle seus gastos mensais.",
    available: false,
  },
  {
    icon: Target,
    title: "Metas Financeiras",
    description: "Defina e acompanhe suas metas de economia e investimento.",
    available: false,
  },
  {
    icon: BarChart3,
    title: "Comparador de Fundos",
    description: "Compare rentabilidade, taxas e riscos de fundos de investimento.",
    available: false,
  },
];

const Tools = () => {
  return (
    <Layout>
      <SEO
        title="Ferramentas Financeiras"
        description="Utilize nossas ferramentas gratuitas para calcular juros, simular investimentos e planejar suas finanças pessoais."
      />

      <div className="container py-8">
        <section className="mb-12">
          <h1 className="headline-xl mb-4">Ferramentas Financeiras</h1>
          <p className="body-lg text-muted-foreground max-w-2xl">
            Utilize nossas ferramentas gratuitas para tomar decisões financeiras mais inteligentes.
            Calculadoras, simuladores e muito mais.
          </p>
        </section>

        {/* Ad Spot */}
        <AdSpot position="in-content" zoneId="{{REVIVE_ZONE_INARTICLE_1}}" className="w-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="card-finance p-6 relative overflow-hidden"
            >
              {!tool.available && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded-full text-muted-foreground">
                    Em breve
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <tool.icon className="h-6 w-6 text-primary" />
              </div>

              <h2 className="headline-sm mb-2">{tool.title}</h2>
              <p className="body-sm text-muted-foreground">{tool.description}</p>

              <button
                className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold text-sm transition-colors ${
                  tool.available
                    ? "btn-finance"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
                disabled={!tool.available}
                onClick={() => {
                  if (tool.available) {
                    // Rastrear uso da ferramenta (função será copiada do base-site)
                    trackToolUsed(
                      tool.title.toLowerCase().replace(/\s/g, "_"),
                      "calculator",
                      "finance",
                      `/ferramentas/${tool.title.toLowerCase().replace(/\s/g, "-")}`
                    );
                  }
                }}
                data-bvx-track={`TOOL_${tool.title.toUpperCase().replace(/\s/g, "_")}`}
              >
                {tool.available ? "Acessar" : "Disponível em breve"}
              </button>
            </div>
          ))}
        </div>

        {/* Ad Spot */}
        <AdSpot position="in-content" zoneId="{{REVIVE_ZONE_INARTICLE_2}}" className="w-full mt-8" />
      </div>
    </Layout>
  );
};

export default Tools;
