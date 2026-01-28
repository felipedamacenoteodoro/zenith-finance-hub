# Prompt para LangChain - Tradução de Templates

Este documento descreve como o LangChain deve traduzir o template após o download e união com o base-site.

## Processo de Tradução

Após o scaffold copiar os arquivos do `base-site` para o template baixado do GitHub:

1. **Detectar o Locale**: O locale já foi detectado durante a análise do nicho (ex: `pt-BR`, `en-US`, `es-ES`)
2. **Verificar se o arquivo de tradução existe**: Verificar se `src/locales/{locale}.json` já existe
3. **Se não existir, criar traduzindo do base**: Copiar `src/locales/pt-BR.json` e traduzir todos os valores
4. **Salvar o novo arquivo**: Salvar como `src/locales/{locale}.json`

## Prompt para a IA

```
Você precisa traduzir o template para o idioma {locale} detectado do nicho/domínio.

TAREFA:
1. Leia o arquivo src/locales/pt-BR.json (ou en-US.json se o locale base for inglês)
2. Traduza TODOS os valores (strings) para o idioma {locale}
3. MANTENHA todas as chaves JSON exatamente iguais (não traduza as chaves)
4. Salve o resultado em src/locales/{locale}.json

REGRAS IMPORTANTES:
- NÃO altere a estrutura das chaves (ex: "common.loading" deve permanecer "common.loading")
- Traduza APENAS os valores (strings entre aspas)
- Mantenha placeholders como {{query}} intactos
- Mantenha formatação e pontuação apropriada para o idioma
- Se houver termos técnicos ou nomes próprios, mantenha-os em inglês quando apropriado

EXEMPLO:
Entrada (pt-BR.json):
{
  "common": {
    "loading": "Carregando...",
    "search": "Buscar"
  },
  "home": {
    "title": "Bem-vindo"
  }
}

Saída (es-ES.json):
{
  "common": {
    "loading": "Cargando...",
    "search": "Buscar"
  },
  "home": {
    "title": "Bienvenido"
  }
}
```

## Locales Suportados

- `pt-BR` - Português do Brasil (padrão/base)
- `en-US` - Inglês dos Estados Unidos
- `es-ES` - Espanhol da Espanha
- `es-MX` - Espanhol do México
- `fr-FR` - Francês da França
- `de-DE` - Alemão
- `it-IT` - Italiano
- `ja-JP` - Japonês
- `zh-CN` - Chinês Simplificado

## Verificação

Após criar o arquivo de tradução, verifique:
- ✅ Todas as chaves foram mantidas
- ✅ Todos os valores foram traduzidos
- ✅ Placeholders {{param}} foram preservados
- ✅ JSON é válido (sem erros de sintaxe)
- ✅ Arquivo foi salvo em `src/locales/{locale}.json`

## Integração no Fluxo LangChain

O locale já está disponível em `site.defaultLocale` após `ensureSiteProvisioned()`.

```typescript
// No LangChainService após scaffold
const locale = site?.defaultLocale || 'pt-BR';

// Verificar se arquivo de tradução existe
const localeFile = `src/locales/${locale}.json`;
if (!existsSync(join(projectDir, localeFile))) {
  // Criar tradução usando IA
  await translateTemplate(projectDir, locale, 'pt-BR');
}
```
