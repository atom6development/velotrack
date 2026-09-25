# Velotrack · Central de Monitoramento

Redesign da Central de Monitoramento do Velotrack (rastreamento de frotas): o operador busca
veículos/clientes, acompanha no mapa e inicia o atendimento. POC começando pela tela do mapa.

## Stack

Vite + React Router v7 + React + JavaScript + Tailwind CSS v4. MapLibre (tiles OpenFreeMap, sem
chave). Escolhido porque é ferramenta interna atrás de login — não precisa de SEO.

## Padrão da casa

Este projeto segue o padrão da Atom6 Studio. **Carregue a skill antes de mexer:**

- `atom6:vite-base` — estrutura de pastas, convenções, roteamento, auth, camada de dados
- `atom6:tailwind-v4` — tokens, tipografia, classes (antes de qualquer CSS)
- `atom6:ui-components` — Select, ícones Phosphor, escala de espaçamento

Regras invioláveis: mobile-first e responsivo em todos os breakpoints; componentes
reutilizáveis sem repetição; imagem com dimensão declarada; HTML semântico com `alt`
e navegação por teclado; **nada de `<select>` nativo** — use o `Select` da skill;
mínimo 44px de área clicável no mobile; quase nenhum comentário no código.
Toda rota interna fica dentro do `<ProtectedRoute />` em `src/router.jsx`.

## Identidade visual

- Marca: `brand` #e92d2c (vermelho do logo), `brand-steel` #6b7a8a (cinza-aço do logo).
  `primary` #d0211f é o vermelho de botão — derivado da marca para passar contraste AA com texto branco.
- Tema claro e escuro (padrão escuro): os valores crus ficam em `:root` / `[data-theme="dark"]`
  no `globals.css`; os tokens semânticos (`background`, `surface`, `border`, `heading`, `body`,
  `muted`…) trocam sozinhos. Preferência salva em `useUiStore` (persistida).
- Status do veículo: `status-moving`, `status-idle`, `status-off`, `status-offline` — cor
  sempre acompanhada de texto (`src/lib/vehicle-status.js`).
- Tipografia: Inter (via `@fontsource-variable/inter`). Ícones: Phosphor.
- Tom: sóbrio e operacional; cor reservada para marca, ação principal e status.
- Logo atual é um wordmark provisório em SVG (`Logo.jsx`) — trocar pelo SVG oficial quando chegar.

## Estrutura

- `/login` — login mockado (pública, `PublicOnlyRoute`)
- `/` — Mapa de monitoramento: busca (placeholder + validação no campo), estado vazio com
  sugestões, loading, erro, sem resultado, lista com filtro por status e marcadores no mapa
  com legenda. Rota carregada sob demanda (MapLibre é pesado).
- Menu lateral: só "Mapa" existe; os demais itens aparecem como "Em breve".
- 404 próprio.

## Perfis de usuário

Um perfil nesta POC: **Central de Monitoramento** (operador), que vê todos os clientes.

## Dados

Mockados em `src/lib/mocks/` (placas e clientes fictícios), atrás da camada de service
(`src/lib/api/vehicles.js`, `auth.js`) com Axios + TanStack Query — a tela não sabe se é mock
ou API. Estado de interface em Zustand (`useUiStore`, `useMonitoringStore`). Sem backend.

## Rodando

npm install && npm run dev — login: operador@velotrack.demo / 123456
