# Project Context & Documentation

## Overview
**Meu Time** is a React-based application that allows users to browse football data (countries, leagues, teams) using the [API-Sports Football API (v3)](https://api-sports.io/documentation/football/v3).
The project uses a legacy codebase structure with React Context for state management and custom hooks for API consumption.

## Tech Stack
- **Core:** React 18, TypeScript, Vite
- **Routing:** React Router DOM v6
- **Styling:** Sass (`.scss`), CSS Modules (implied), some inline styles
- **HTTP Client:** Axios
- **UI Libraries:** `react-slick` (carousel), `react-toastify` (notifications), `lucide-react` (icons), `framer-motion` (animations)

## Project Structure
```
src/
├── assets/          # Static assets (icons, images)
├── components/      # Reusable UI components
│   ├── __common__/  # Generic atoms/molecules (Button, Input, etc.)
│   ├── __layout__/  # Layout components (Grid)
│   └── __templates__/# Complex organisms (NavBar, Footer)
├── core/            # Business logic and global state
│   ├── context/     # React Context definitions and Providers
│   └── services/    # API configuration (Axios)
├── hooks/           # Custom hooks (API calls, context access)
├── pages/           # Route views (Login, Home, Dashboard)
├── Providers/       # Main Provider wrapper
├── router/          # Route definitions
├── types/           # TypeScript interfaces/types
└── utils/           # Helper functions
```

## API Consumption Strategy

### Configuration
The API connection is managed via a custom Axios instance creator:
- **File:** `src/core/services/createAxiosInstanc.ts`
- **Base URL:** `https://v3.football.api-sports.io`
- **Auth:** Requires `x-apisports-key` header.

### Usage Pattern
1. **Authentication:** The API key is stored in `sessionStorage` and managed by `AuthProvider`.
2. **Hook:** `useApi` (`src/hooks/useApi.ts`) is the primary interface for making requests. It retrieves the API key from `AuthContext` and creates an authenticated Axios instance on the fly.
3. **Endpoints:**
   - `GET /status`: Validates API key/status.
   - `GET /countries`: Fetches available countries.
   - `GET /leagues`: Fetches leagues, optionally filtered by country.
   - `GET /teams`: Fetches teams, filtered by league and season.

## State Management (Context Strategy)

The application uses a nested Provider pattern defined in `src/Providers/Provider.tsx`.
State is decentralized across domain-specific contexts:

1. **AuthProvider** (`src/core/context/AuthProvider.tsx`):
   - Manages: `apiKey`, `user` object.
   - Persistence: `sessionStorage`.
   - Actions: `login`, `logout`.

2. **CountryProvider** & **CodeCountryProvider**:
   - Manages: Selected country data and country codes.

3. **LeagueProvider** (`src/core/context/LeagueProvider.tsx`):
   - Manages: 
     - `leagues`: List of fetched leagues.
     - `season`: Currently selected season.
     - `selectedLeague`: ID of the chosen league.
     - `selectedSeason`: ID of the chosen season.

## Development Workflow
- **Run:** `npm run dev` (Vite)
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## Critical Notes for Implementation
- **Legacy Code:** Respect the existing folder structure (e.g., `__common__`, `__templates__`).
- **Styles:** Continue using `.scss` files imported into components.
- **API Limits:** API-Sports has rate limits; ensure caching or efficient fetching where possible (though current implementation fetches directly).
- **Types:** Ensure all new data structures have corresponding interfaces in `src/types`.
