# Guia de Cores - Sistema de Personalização

Este template usa um sistema centralizado de cores que facilita a personalização pelo LangChain baseado no nicho/domínio.

## Arquivo Principal

**`src/lib/color-config.ts`** - Este é o arquivo que o LangChain deve modificar para personalizar as cores.

## Estrutura do Arquivo

O arquivo contém:

1. **Interface `ColorConfig`**: Define todas as cores disponíveis
2. **`defaultColorConfig`**: Configuração padrão (azul para finanças)
3. **`colorSchemesByNiche`**: Esquemas pré-definidos por nicho
4. **Funções auxiliares**: Para gerar CSS e converter cores

## Como o LangChain Deve Modificar

### Opção 1: Usar Esquema Pré-definido

Se o nicho tiver um esquema pré-definido, apenas adicionar no `.env`:
```
VITE_COLOR_NICHE=health
```

### Opção 2: Modificar o Arquivo Diretamente

Editar `src/lib/color-config.ts` e modificar o objeto `defaultColorConfig`:

```typescript
export const defaultColorConfig: ColorConfig = {
  // Mudar apenas as cores necessárias
  primary: '#10b981', // Verde para saúde
  primaryHover: '#059669',
  primaryLight: '#34d399',
  primaryDark: '#047857',
  // ... resto permanece igual
};
```

### Opção 3: Criar Novo Esquema

Adicionar um novo esquema em `colorSchemesByNiche`:

```typescript
export const colorSchemesByNiche: Record<string, Partial<ColorConfig>> = {
  // ... esquemas existentes
  
  meuNicho: {
    primary: '#8b5cf6', // Roxo
    primaryHover: '#7c3aed',
    primaryLight: '#a78bfa',
    primaryDark: '#6d28d9',
  },
};
```

## Cores Disponíveis

### Cores Primárias (Obrigatórias)
- `primary`: Cor principal do site
- `primaryForeground`: Texto sobre primary
- `primaryHover`: Cor no hover
- `primaryLight`: Versão clara
- `primaryDark`: Versão escura

### Cores Secundárias
- `secondary`: Cor secundária
- `secondaryForeground`: Texto sobre secondary
- `secondaryHover`: Cor no hover

### Cores de Fundo
- `background`: Fundo principal
- `backgroundCard`: Fundo de cards
- `backgroundMuted`: Fundo suave
- `backgroundAccent`: Fundo de destaque

### Cores de Texto
- `foreground`: Texto principal
- `foregroundMuted`: Texto secundário
- `foregroundSubtle`: Texto sutil

### Cores de Estado
- `success`: Verde para sucesso
- `warning`: Amarelo para avisos
- `error`: Vermelho para erros
- `info`: Azul para informações

### Cores de Borda
- `border`: Borda padrão
- `borderLight`: Borda clara
- `borderDark`: Borda escura

### Cores de Input
- `inputBackground`: Fundo do input
- `inputBorder`: Borda do input
- `inputFocus`: Cor do foco
- `inputPlaceholder`: Cor do placeholder

## Esquemas Pré-definidos

- `health`: Verde (#10b981)
- `technology`: Roxo (#8b5cf6)
- `education`: Laranja (#f59e0b)
- `fashion`: Rosa (#ec4899)
- `sports`: Vermelho (#ef4444)
- `food`: Laranja (#f97316)
- `news`: Azul escuro (#1e40af)

## Formato de Cores

Todas as cores devem estar em formato hexadecimal:
- ✅ Correto: `'#2563eb'`
- ❌ Incorreto: `'rgb(37, 99, 235)'` ou `'blue'`

## Exemplo de Prompt para LangChain

```
Modifique o arquivo src/lib/color-config.ts para personalizar as cores do site.

NICHO: Saúde/Health
COR PRINCIPAL: Verde (#10b981)

Ações:
1. Atualize o objeto defaultColorConfig com:
   - primary: '#10b981'
   - primaryHover: '#059669'
   - primaryLight: '#34d399'
   - primaryDark: '#047857'

2. Mantenha todas as outras cores inalteradas.
```

## Integração com Tailwind

As cores são automaticamente convertidas para HSL e injetadas como variáveis CSS que o Tailwind usa. Não é necessário modificar o `tailwind.config.ts` ou `index.css` diretamente.

## Verificação

Após modificar as cores:
1. ✅ Verifique se todas as cores estão em formato hexadecimal
2. ✅ Teste se o site carrega sem erros
3. ✅ Verifique se as cores aparecem corretamente nos componentes
