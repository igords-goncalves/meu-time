# Semana 1 - Mini-spec + Prompt

## Requisito escolhido (Issue #1)

Issue/task referente para criação de branch: #41

- Só deve ser possível selecionar um time pertencente à liga selecionada.
- Não deve ser possível selecionar uma liga sem ter selecionado um país anteriormente.
- Não deve ser possível selecionar um time sem ter selecionado uma liga anteriormente.

## Mini-spec

### 1. Não permitir selecionar uma liga sem ter selecionado um país anteriormente

#### Entrada

- País não selecionado: `selectedCountry = null`.
- Sem país selecionado, `LeaguesSlide` não é renderizado em tela.

#### Regra

- A seção de seleção de ligas deve manter apenas título e mensagem orientativa.
- A mensagem deve ser: “Selecione uma liga na lista e defina uma temporada para listar os times abaixo.”.

#### Saída esperada

- Sem país selecionado: não existe caminho de interação para selecionar liga.
- Com país selecionado e sem liga selecionada: `LeaguesSlide` é renderizado mantendo título e mensagem.

#### Erros/estados vazios/fallbacks

- Se a API de ligas falhar após selecionar país/temporada, exibir estado de erro da seção de ligas.
- Se a API retornar vazio, exibir estado vazio de ligas sem travar o fluxo.

### 2. Não permitir selecionar um time sem ter selecionado uma liga anteriormente

#### Entrada

- Liga não selecionada: `selectedLeague = null`.
- Sem liga selecionada, `TeamsTable` não é renderizada em tela.

#### Regra

- A seção da tabela de times deve manter apenas título e mensagem orientativa.
- A mensagem deve ser: “Clique em + detalhes de um time para ver mais informações.”.

#### Saída esperada

- Sem liga selecionada: não existe caminho de interação para selecionar time.
- Com liga selecionada e sem time selecionado: `TeamsTable` é renderizada mantendo título e mensagem.

#### Erros/estados vazios/fallbacks

- Se a API de times falhar com liga selecionada, exibir estado de erro da tabela.
- Se a API retornar vazio, exibir estado vazio sem selecionar time automaticamente.

### 3. Somente os times pertencentes à liga selecionada devem ser exibidos na tabela de times

#### Entrada

- Liga selecionada, por exemplo:
  `selectedLeague = { id: 39, name: "Premier League", country: "England" }`.
- `TeamsTable` é renderizada em tela.

#### Regra

- A tabela de times deve exibir somente os times pertencentes à liga selecionada.
- Ao trocar de liga, o `selectedTeam` anterior deve ser limpo para evitar inconsistência.

#### Saída esperada

- Com liga selecionada: `TeamsTable` exibe somente os times da liga atual.
- Ao trocar liga: nenhum time da liga anterior permanece selecionado.

#### Erros/estados vazios/fallbacks

- Se a API retornar vazio para a liga selecionada, manter `selectedTeam = null` e exibir estado vazio.

## Critérios de aceite (objetivos)

1. Com `selectedCountry = null`, não existe caminho de interação que permita selecionar liga.
2. Com `selectedLeague = null`, não existe caminho de interação que permita selecionar time.
3. Com liga selecionada, a tabela lista somente times da liga corrente.
4. Ao trocar liga, qualquer `selectedTeam` anterior é limpo antes de nova seleção.
