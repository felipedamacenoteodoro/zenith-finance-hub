import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { NewsletterService } from "@/services/NewsletterService";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (honeypot) return;

    if (!NewsletterService.validateEmail(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    setLoading(true);
    setError("");

    const response = await NewsletterService.subscribe({
      email,
      source: "newsletter_section",
    });

    if (response.success) {
      setSubmitted(true);
    } else {
      setError(response.message);
    }
    setLoading(false);
  };

  return (
    <div id="bvx-newsletter-base" className="card-finance-featured p-8 md:p-12">
      {/* BVX_NEWSLETTER_WIDGET */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
          <Mail className="h-8 w-8 text-primary" />
        </div>

        <h2 className="headline-lg mb-4">
          Fique por dentro das novidades
        </h2>

        <p className="body-md text-muted-foreground mb-8">
          Receba análises exclusivas, dicas de investimento e as principais notícias do mercado financeiro diretamente no seu email.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-primary animate-fade-in">
            <CheckCircle className="h-6 w-6" />
            <span className="font-semibold">Inscrição realizada com sucesso!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            {/* Honeypot - hidden from users */}
            <input
              type="hidden"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              disabled={loading}
              data-bvx-track="NEWSLETTER_INPUT"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-finance px-8 disabled:opacity-50 disabled:cursor-not-allowed"
              data-bvx-track="NEWSLETTER_SUBMIT"
            >
              {loading ? "Enviando..." : "Assinar Grátis"}
            </button>
          </form>
        )}

        {error && (
          <div className="flex items-center justify-center gap-2 mt-4 text-destructive animate-fade-in">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-6">
          Ao se inscrever, você concorda com nossa{" "}
          <a href="/privacidade" className="link-finance" data-bvx-track="NEWSLETTER_PRIVACY_LINK">
            Política de Privacidade
          </a>
          . Você pode cancelar a qualquer momento.
        </p>
      </div>
    </div>
  );
};
