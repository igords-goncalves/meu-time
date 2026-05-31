# Plano de aprendizado: IA para Engenharia de Software (Projeto **Meu Time**)

## 1) Objetivo do plano

Esse documento pode ser entendido como um **framework operacional de engenharia de software com IA**. Este plano foi criado para transformar o projeto **Meu Time** em um laboratório prático de aprendizado de IA aplicada à engenharia de software.
A meta é sair de um uso pontual de IA (“gerar código”) para um fluxo profissional e repetível: **especificar, implementar, validar/revisar e evoluir** com apoio de IA.

---

## 2) Contexto base utilizado

- Documento de contexto técnico: `docs/project-context.md`
- Especificação funcional principal: Issue **#1**
  `RP - Requisitos do projeto Meu Time - V1.0.0`
- Pontos principais da stack:
  - React 18 + TypeScript + Vite
  - Context API + custom hooks
  - Axios para consumo da API-Football
  - SCSS para estilos

---

## 3) Resultado esperado de aprendizado

Ao final, você deve ser capaz de:

1. Escrever prompts técnicos com contexto e critérios objetivos.
2. Trabalhar em modo **Spec-Driven Development (SDD)**, quebrando requisitos em fatias pequenas.
3. Usar MCP do GitHub para buscar contexto, acompanhar execução e investigar falhas.
4. Implementar com IA sem perder controle de arquitetura, tipagem e regras de negócio.
5. Conduzir revisão técnica com IA focada em bugs e comportamento.
6. Padronizar templates para repetir o processo em qualquer feature futura.

---

## 4) Princípios do fluxo com IA

1. **Sempre começar pela especificação**
   Não começar “pelo código”. Primeiro: requisito, escopo, critérios de aceite.

2. **Fatiar para reduzir risco**
   Uma feature grande vira várias mini-entregas pequenas e testáveis.

3. **Prompt bom = resultado melhor**
   IA sem contexto gera respostas genéricas; com contexto, gera mudanças úteis.

4. **Validação é parte da entrega**
   Cada alteração deve passar por critérios técnicos (lint/build/test) e funcionais.

5. **Review focado em risco real**
   Priorizar bug, regressão e regra de negócio (não perfumaria de estilo).

---

## 5) Roadmap de aprendizado por fases

## Fase 1 — Prompt Engineering aplicado ao projeto

### Objetivo

Aprender a pedir mudanças com precisão.

### Prática

Usar um prompt padrão em toda tarefa:

- Contexto (arquivos e arquitetura relevantes)
- Requisito exato da issue
- Critérios de aceite verificáveis
- Restrições técnicas do projeto
- Definição de pronto

### Template de prompt (base)

```text
Implemente <requisito>.
Contexto: docs/project-context.md e issue #1.
Restrições: manter arquitetura atual (Context + hooks), tipar em src/types, usar SCSS já existente.
Critérios de aceite:
- <critério 1 objetivo>
- <critério 2 objetivo>
Definição de pronto: (dod)
- alteração mínima e coesa
- sem quebrar comportamento existente
- lint/build/test ok
```

### Critério de evolução da fase

Você consegue produzir prompts que retornam mudanças alinhadas ao requisito sem retrabalho grande.

---

## Fase 2 — Spec-Driven Development (SDD)

### Objetivo

Aprender a transformar uma issue em backlog técnico executável.

### Prática

Quebrar a Issue #1 em mini-specs independentes, por comportamento:

1. Não permitir selecionar liga sem país.
2. Não permitir selecionar time sem liga.
3. Garantir que o time selecionado pertence à liga selecionada.
4. Exibir lista de jogadores (nome, idade, nacionalidade).
5. Exibir formação mais utilizada.
6. Exibir tabela de resultados (jogos, vitórias, derrotas, empates).
7. Exibir gráfico de gols por minuto.

Para cada mini-spec, definir:

- Entrada
- Regra
- Saída
- Erros/estados vazios

### Critério de evolução da fase

Você passa a implementar por comportamento validável, não por “tela pronta”.

---

## Fase 3 — Uso de MCP do GitHub no ciclo diário

### Objetivo

Aprender a usar o GitHub como fonte viva de verdade durante o desenvolvimento.

### Prática

No início de cada sessão:

1. Ler issue e comentários (requisitos e ajustes de escopo).
2. Confirmar status de PRs relacionados.
3. Consultar runs do GitHub Actions.
4. Em caso de falha, abrir logs do job com erro.

### Resultado prático

Menos “achismo” sobre requisito e mais decisão baseada em fonte oficial do projeto.

---

## Fase 4 — Implementação guiada por IA em fatias pequenas

### Objetivo

Ganhar cadência de entrega com baixo risco.

### Loop operacional recomendado

1. Selecionar 1 mini-spec.
2. Enviar prompt com contexto + critérios.
3. Revisar alteração proposta.
4. Ajustar detalhes de arquitetura/tipagem.
5. Validar.
6. Fechar a fatia e seguir para próxima.

### Ordem sugerida no Meu Time

1. Regras pendentes de seleção (país → liga → time).
2. Consumo e renderização de players.
3. Formação mais usada.
4. Tabela de estatísticas.
5. Gráfico de gols por minuto.

### Critério de evolução da fase

Você consegue entregar pequenos incrementos completos sem acumular dívida técnica.

---

## Fase 5 — Code review com IA (alto sinal)

### Objetivo

Usar IA como revisor técnico de risco real.

### Checklist de review orientado a negócio

1. Fluxo impede ações inválidas? (liga sem país / time sem liga)
2. O time exibido é consistente com liga e temporada?
3. Tipos cobrem dados reais da API-Football?
4. Estados de loading/erro/vazio estão corretos?
5. Há risco de requisição desnecessária e estouro de limite diário?

### Critério de evolução da fase

Você detecta regressão antes de chegar em produção.

---

## Fase 6 — Padronização e escala pessoal

### Objetivo

Criar um sistema pessoal de desenvolvimento com IA reutilizável.

### Artefatos para consolidar

1. Template de prompt de feature.
2. Template de prompt de bugfix.
3. Template de prompt de refactor.
4. Checklist de PR.
5. Checklist de validação funcional.

### Resultado

Seu uso de IA deixa de ser improvisado e vira um processo consistente.

---

## 6) Rotina semanal sugerida (prática guiada)

## Semana 1 — Fundamentos de prompt + mini-spec

- Escolher 1 requisito pendente da issue #1.
- Criar mini-spec e prompt.
- Implementar e validar.
- Registrar aprendizados sobre qualidade do prompt.

## Semana 2 — SDD completo em regras de seleção

- Fechar os 3 critérios pendentes de seleção (dependência país/liga/time).
- Revisar com IA focando em regra de negócio.

## Semana 3 — Dados avançados (players + statistics)

- Implementar lista de jogadores e formação mais usada.
- Garantir tipagem e comportamento de estados.

## Semana 4 — Visualização e robustez

- Implementar tabela de resultados + gráfico por minuto.
- Revisar performance de chamadas e consistência de dados.

---

## 7) Prompt playbook (biblioteca inicial)

## Prompt de Feature

```text
Implemente o requisito <X> da issue #1 no projeto Meu Time.
Use docs/project-context.md como referência arquitetural.
Mantenha Context API + hooks existentes.
Critérios de aceite:
- <A>
- <B>
- <C>
Restrições:
- Não quebrar fluxos existentes
- Tipar novos dados em src/types
- Reaproveitar padrões de componentes/SCSS
Entregue com mudanças objetivas e coesas.
```

## Prompt de Bugfix

```text
Corrija o bug: <descrição>.
Comportamento esperado: <resultado>.
Comportamento atual: <erro>.
Investigue causa raiz, proponha correção mínima e segura.
Valide que o fluxo principal não regrediu.
```

## Prompt de Review

```text
Revise as mudanças focando em:
- bugs de regra de negócio
- regressões de fluxo
- inconsistência de tipagem/dados
- riscos de performance/requisições
Ignore sugestões puramente cosméticas.
```

---

## 8) Critérios de maturidade (autoavaliação)

Você evoluiu bem quando:

1. Quase toda tarefa começa por mini-spec.
2. Seus prompts já incluem contexto, restrições e aceite.
3. Você usa MCP para reduzir ambiguidade e investigar falhas.
4. Suas entregas são pequenas, frequentes e revisáveis.
5. IA vira acelerador de decisão técnica, não substituto de raciocínio.

---

## 9) Próximo passo prático recomendado neste projeto

Iniciar pelo bloco de maior retorno:
**concluir os 3 critérios pendentes de seleção (país, liga, time)**, pois eles estabilizam o fluxo principal e reduzem bugs em cascata nas próximas funcionalidades (players/statistics).
