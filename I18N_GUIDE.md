# Guia de Internacionalização (i18n)

Este template usa um sistema de internacionalização baseado em arquivos JSON, facilitando a tradução pelo LangChain baseado no idioma detectado do nicho/domínio.

## Como Funciona

1. **Arquivos de Tradução**: Cada idioma tem um arquivo JSON em `src/locales/{locale}.json`
2. **Sistema i18n**: O serviço em `src/lib/i18n.ts` carrega e gerencia as traduções
3. **Hook React**: Use `useTranslation()` nos componentes para acessar traduções
4. **Locale Automático**: O locale é definido via `VITE_LOCALE` (configurado durante scaffold)

## Estrutura dos Arquivos de Tradução

Cada arquivo JSON segue uma estrutura hierárquica:

```json
{
  "common": {
    "loading": "Carregando...",
    "error": "Erro"
  },
  "nav": {
    "home": "Início",
    "articles": "Artigos"
  },
  "home": {
    "title": "Bem-vindo",
    "newsletter": {
      "title": "Newsletter Gratuita"
    }
  }
}
```

## Como a IA Deve Criar Novos Arquivos de Tradução

Quando o LangChain detectar um novo idioma (ex: `es-ES`, `fr-FR`), ele deve:

1. **Copiar o arquivo base** (`pt-BR.json` ou `en-US.json`)
2. **Traduzir todos os valores** mantendo a estrutura de chaves
3. **Salvar como** `src/locales/{locale}.json`

### Exemplo de Prompt para IA:

```
Traduza o arquivo src/locales/pt-BR.json para espanhol (es-ES).
Mantenha todas as chaves JSON exatamente iguais, traduzindo apenas os valores.
Salve o resultado em src/locales/es-ES.json.
```

## Como Usar nos Componentes

```tsx
import { useTranslation } from "@/lib/i18n";

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>
      <button>{t("common.submit")}</button>
    </div>
  );
}
```

## Traduções com Parâmetros

Para traduções que precisam de valores dinâmicos:

```json
{
  "search": {
    "resultsFor": "Resultados para {{query}}"
  }
}
```

```tsx
{t("search.resultsFor", { query: "finanças" })}
// Resultado: "Resultados para finanças"
```

## Locales Suportados

- `pt-BR` - Português do Brasil (padrão)
- `en-US` - Inglês dos Estados Unidos
- `es-ES` - Espanhol da Espanha
- `es-MX` - Espanhol do México
- `fr-FR` - Francês da França
- `de-DE` - Alemão
- `it-IT` - Italiano
- `ja-JP` - Japonês
- `zh-CN` - Chinês Simplificado

## Inicialização

O i18n é inicializado automaticamente no `main.tsx` usando `VITE_LOCALE`:

```tsx
const locale = import.meta.env.VITE_LOCALE || 'pt-BR';
i18n.init(locale).then(() => {
  // App inicia após i18n estar pronto
});
```

## Vantagens desta Abordagem

1. ✅ **Fácil para IA**: Apenas criar um arquivo JSON traduzido
2. ✅ **Estruturado**: Chaves organizadas por seção
3. ✅ **Type-safe**: TypeScript ajuda a evitar erros
4. ✅ **Performático**: Traduções carregadas uma vez e cacheadas
5. ✅ **Fallback**: Se um locale não existir, usa pt-BR como fallback
