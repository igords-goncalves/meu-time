# Documentação técnica

## Visão Geral

**Meu Time** é uma aplicação baseada em React que permite aos usuários explorar dados de futebol (países, ligas, times) usando a [API-Sports Football API (v3)](https://api-sports.io/documentation/football/v3).
O projeto utiliza uma estrutura de código legada com React Context para gerenciamento de estado e hooks personalizados para consumo de API.

## Stack Tecnológico

- **Core:** React 18, TypeScript, Vite
- **Roteamento:** React Router DOM v6
- **Estilos:** Sass (`.scss`), CSS Modules (implícito), alguns estilos inline
- **Cliente HTTP:** Axios
- **Bibliotecas UI:** `react-slick` (carrossel), `react-toastify` (notificações), `lucide-react` (ícones), `framer-motion` (animações)

## Estrutura do Projeto

```
src/
├── assets/                 # Ativos estáticos (ícones, imagens)
│   └── icons/
├── components/             # Componentes UI reutilizáveis
│   ├── __common__/         # Átomos/moléculas genéricas (Button, Input, etc.)
│   │   ├── Button/
│   │   ├── Divider/
│   │   ├── Error/
│   │   ├── Form/
│   │   ├── Image/
│   │   ├── Link/
│   │   └── Slider/
│   │   └── Pagination/
│   ├── __layout__/         # Componentes de layout (Grid)
│   └── __templates__/      # Organismos complexos (NavBar, Footer, Main)
├── core/                   # Lógica de negócio e estado global
│   ├── context/            # Definições de React Context e Providers
│   │   ├── AuthContext.tsx
│   │   ├── AuthProvider.tsx
│   │   ├── CodeCountryContext.tsx
│   │   ├── CodeCountryProvider.tsx
│   │   ├── CountryContext.tsx
│   │   ├── CountryProvider.tsx
│   │   ├── LeagueContext.tsx
│   │   └── LeagueProvider.tsx
│   └── services/           # Configuração de API (Axios)
├── hooks/                  # Custom hooks (chamadas API, acesso a context)
│   ├── useApi.ts
│   ├── useAuthContext.ts
│   ├── useCodeCountry.ts
│   ├── useCountryContext.ts
│   ├── useFetchCountries.ts
│   ├── useFocusInput.ts
│   ├── useLeaguesContext.ts
│   └── useSelectLeaguests.ts
├── pages/                  # Visualizações de rotas (Login, Home, Dashboard)
│   ├── Home/
│   │   ├── components/
│   │   │   ├── CountriesSlide/
│   │   │   ├── CountrySelector/
│   │   │   ├── LeagueSelector/
│   │   │   ├── LeaguesSlide/
│   │   │   ├── TeamCell/
│   │   │   └── TeamsTable/
│   │   └── style.scss
│   ├── Login/
│   │   └── components/
│   └── Dashboard/
│       └── components/
├── Providers/              # Wrapper de Provider principal
├── router/                 # Definições de rotas
├── types/                  # Interfaces/tipos TypeScript
├── constants/              # Constantes e valores de configuração
└── utils/                  # Funções auxiliares
```

## Estratégia de Consumo de API

### Configuração

A conexão com API é gerenciada por um criador customizado de instância Axios:

- **Arquivo:** `src/core/services/createAxiosInstanc.ts`
- **Base URL:** `https://v3.football.api-sports.io`
- **Autenticação:** Requer header `x-apisports-key`.

### Padrão de Uso

1. **Autenticação:** A chave de API é armazenada em `sessionStorage` e gerenciada pelo `AuthProvider`.
2. **Hook:** `useApi` (`src/hooks/useApi.ts`) é a interface principal para fazer requisições. Ele recupera a chave de API do `AuthContext` e cria uma instância Axios autenticada dinamicamente.
3. **Endpoints:**
   - `GET /status`: Valida chave de API/status.
   - `GET /countries`: Obtém países disponíveis.
   - `GET /leagues`: Obtém ligas, opcionalmente filtradas por país.
   - `GET /teams`: Obtém times, filtrados por liga e temporada.

## Gerenciamento de Estado (Estratégia Context)

A aplicação utiliza um padrão aninhado de Provider definido em `src/Providers/Provider.tsx`.
O estado é descentralizado entre contextos específicos de domínio:

1. **AuthProvider** (`src/core/context/AuthProvider.tsx`):

   - Gerencia: `apiKey`, objeto `user`.
   - Persistência: `sessionStorage`.
   - Ações: `login`, `logout`.

2. **CountryProvider** & **CodeCountryProvider**:

   - Gerencia: Dados do país selecionado e códigos de países.

3. **LeagueProvider** (`src/core/context/LeagueProvider.tsx`):
   - Gerencia:
     - `leagues`: Lista de ligas obtidas.
     - `season`: Temporada atualmente selecionada.
     - `selectedLeague`: ID da liga escolhida.
     - `selectedSeason`: ID da temporada escolhida.

## Fluxo de Desenvolvimento

- **Executar:** `npm run dev` (Vite)
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## Notas Críticas para Implementação

- **Código Legado:** Respeite a estrutura de pastas existente (p.ex., `__common__`, `__templates__`).
- **Estilos:** Continue usando arquivos `.scss` importados nos componentes.
- **Limites de API:** API-Sports tem limites de taxa de 100/dia; garanta cache ou busca eficiente quando possível (embora a implementação atual busque diretamente).
- **Tipos:** Garanta que todas as novas estruturas de dados tenham interfaces correspondentes em `src/types`.
