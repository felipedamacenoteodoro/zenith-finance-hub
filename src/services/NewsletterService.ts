interface SubscribeParams {
  email: string;
  source?: string;
}

interface SubscribeResponse {
  success: boolean;
  message: string;
}

const API_URL = "{{CONTENT_API_URL}}";

export const NewsletterService = {
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  async subscribe(params: SubscribeParams): Promise<SubscribeResponse> {
    const { email, source = "website" } = params;

    if (!this.validateEmail(email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
      };
    }

    try {
      const response = await fetch(`${API_URL}/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Falha ao realizar inscrição");
      }

      return {
        success: true,
        message: "Inscrição realizada com sucesso!",
      };
    } catch (error) {
      console.error("NewsletterService.subscribe error:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erro ao processar inscrição. Tente novamente.",
      };
    }
  },
};
