import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { i18n } from "./lib/i18n";
import { generateColorCSS, getColorConfig } from "./lib/color-config";

// Inject color CSS variables (será customizado pelo LangChain)
const colorCSS = generateColorCSS(getColorConfig());
const style = document.createElement('style');
style.textContent = colorCSS;
document.head.appendChild(style);

// Inicializar i18n com o locale do ambiente (será definido durante scaffold)
const locale = import.meta.env.VITE_LOCALE || 'pt-BR';
i18n.init(locale).then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
