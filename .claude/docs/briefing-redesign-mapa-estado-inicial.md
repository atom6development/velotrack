# Briefing — Redesign Velotrack · Mapa (estado inicial)

Origem: mapeamento das telas de produção (track.velotrack.com.br) feito em 2026-09-24.
Figma do mapeamento: https://www.figma.com/design/u6wzdDpS3LszbeoBYzYK0j (section "02 · Central de Monitoramento – Mapa e Veículo").

## Contexto

- Sistema de rastreamento veicular. Perfil logado: **Central de Monitoramento (MCE)** — operador que atende vários clientes.
- O mapa é a tela inicial pós-login. No estado inicial não há veículos: o operador precisa buscar (placa, cliente...) para carregar a lista e iniciar o "atendimento" a um cliente.
- Buscar sem termo retorna erro "É necessário fazer um filtro de pesquisa para buscar os equipamentos."

## Estrutura atual da tela

- Topbar: logo, "Central De Monitoramento", itens Mapa, Cerca (Inserir cerca / Inserir ponto), Limite de velocidade, Dashboard, Dashboard OS, Auto, Atualizar, sino de alertas, menu do usuário ("Bem Vindo" → Editar Perfil, Sair).
- Sidebar de ícones com flyouts: Controle, Cadastros, Relatórios, Configuração, Controle de Alertas.
- Mapa Google (Mapa/Satélite, fullscreen, street view).
- Rodapé: abas Veículos/Rota, busca + Filtrar/Excel/Limpar, "Mostrar até 50 veículos no mapa", contador de veículos, tabela (Código, Veículo, Localização, Km/h, Odômetro, GPS, Ign., Temp., Bat. Int., Bat. Ext., Data, Cliente).

## Problemas levantados (oportunidades de UI)

1. Mapa abre em zoom continental e sem veículos; não há estado vazio orientando o usuário.
2. Tabela mostra só cabeçalho vazio, sem mensagem.
3. Topbar com 9 itens em cores diferentes sem lógica semântica; página ativa pouco evidente.
4. "Bem Vindo" quebra em duas linhas e não mostra o nome do usuário.
5. Sidebar só com ícones, sem labels/tooltip.
6. Mistura de fonte serifada padrão do navegador com sans-serif.
7. Cabeçalhos da tabela em azul "link" sem indicação de ordenação.
8. Campo de busca sem placeholder (não diz o que pode ser buscado).
9. Erro de busca vazia aparece longe do campo, sobre o menu do usuário.
