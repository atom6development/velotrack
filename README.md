# Velotrack · Central de Monitoramento

POC do redesign da Central de Monitoramento do Velotrack. Nesta etapa: login e tela do mapa
(estado inicial, busca de veículos e resultados), com tema escuro e claro. Dados mockados.

## Rodando

```bash
nvm use        # Node 22+
npm install
npm run dev    # http://localhost:5173
```

Acesso de demonstração: `operador@velotrack.demo` / `123456`.

Experimente buscar por `Kwid`, `S10`, `Transportes Cerrado` ou uma parte da placa.

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run preview` — serve o build localmente
- `npm run lint` — ESLint
- `npm run format` — Prettier

## Dados

Mocks em `src/lib/mocks/` (placas e clientes fictícios), atrás da camada de service em
`src/lib/api/`. Para usar a API real, troque `VITE_USE_MOCKS` para `false` no `.env.local`.

O login é só proteção de navegação — a segurança de verdade é o backend validando cada request.
