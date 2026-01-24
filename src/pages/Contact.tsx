import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) return;

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("{{CONTENT_API_URL}}/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao enviar mensagem");

      setSubmitted(true);
    } catch {
      setError("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contato"
        description="Entre em contato com a equipe do {{PROJECT_NAME}}. Estamos prontos para responder suas dúvidas e receber seu feedback."
      />

      <div className="container py-8 max-w-2xl">
        <section className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="headline-xl mb-4">Entre em Contato</h1>
          <p className="body-lg text-muted-foreground">
            Tem alguma dúvida, sugestão ou feedback? A equipe do {"{{PROJECT_NAME}}"} está 
            pronta para ajudar. Preencha o formulário abaixo e responderemos o mais breve possível.
          </p>
        </section>

        {submitted ? (
          <div className="card-finance-featured p-12 text-center animate-fade-in">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="headline-md mb-4">Mensagem Enviada!</h2>
            <p className="body-md text-muted-foreground">
              Obrigado por entrar em contato. Analisaremos sua mensagem e retornaremos em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-finance p-8 space-y-6">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seu nome"
                data-bvx-track="CONTACT_NAME_INPUT"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="seu@email.com"
                data-bvx-track="CONTACT_EMAIL_INPUT"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Assunto *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                data-bvx-track="CONTACT_SUBJECT_SELECT"
              >
                <option value="">Selecione um assunto</option>
                <option value="duvida">Dúvida</option>
                <option value="sugestao">Sugestão de Conteúdo</option>
                <option value="parceria">Parceria</option>
                <option value="erro">Reportar Erro</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Escreva sua mensagem..."
                data-bvx-track="CONTACT_MESSAGE_INPUT"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive animate-fade-in">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-finance w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              data-bvx-track="CONTACT_SUBMIT"
            >
              {loading ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Enviar Mensagem
                </>
              )}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Ao enviar esta mensagem, você concorda com nossa{" "}
              <a href="/privacidade" className="link-finance" data-bvx-track="CONTACT_PRIVACY_LINK">
                Política de Privacidade
              </a>
              .
            </p>
          </form>
        )}

        {/* Notice */}
        <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground text-center">
            O {"{{PROJECT_NAME}}"} não oferece atendimento por telefone ou presencial. 
            Todas as comunicações são realizadas exclusivamente por meio deste formulário 
            ou através de nossa newsletter.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
