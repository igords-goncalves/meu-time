# Regras de Desenvolvimento

## Objetivo

Este documento define regras gerais e reutilizaveis para guiar implementacoes no projeto.
Ele complementa os mini-specs e prompts tecnicos, evitando ambiguidade e retrabalho.

## Fontes de verdade (ordem de prioridade)

1. Requisito funcional oficial (Issue `#1` e user stories criadas a partir dele) https://github.com/igords-goncalves/meu-time/issues/1.
2. `docs/documentacao-tecnica.md` (contexto arquitetural, estrutural e links de documentacao da API).
3. Este `regras-desenvolvimento.md` (regras gerais de execucao).

## Regras globais de negocio (fluxo principal)

1. Nao permitir selecao de liga sem pais selecionado.
2. Nao permitir selecao de time sem liga selecionada.
3. Exibir apenas times da liga atualmente selecionada.
4. Ao trocar liga, limpar time previamente selecionado para evitar estado inconsistente.

## Regras tecnicas obrigatorias

- Manter arquitetura atual (Context API + hooks existentes).
- Tipar novos contratos e estruturas em `src/types`.
- Reaproveitar padroes de componentes e estilos (`.scss`) ja existentes.
- Evitar mudancas amplas: aplicar alteracao minima, coesa e orientada ao requisito da fatia.
- Implementar novas soluções sem overengineering: simplicidade e clareza sao preferiveis a complexidade desnecessaria.
- Preservar comportamento existente fora do escopo da tarefa.
- Novos componentes devem ser criados seguindo o padrão `export const ComponentName = () => { ... }`.
- O armanezamento dos componentes deve respeitar a estrutura de pastas atual como em `docs/documentacao-tecnica.md`.
- Lógicas complexas devem ser abstraídas em hooks customizados ou funções auxiliares, não diretamente no JSX dos componentes.
- Manter a consistencia visual e de UX com o que ja existe, evitando introduzir novos estilos ou padrões sem necessidade.

## Regras de consumo de API

- Usar o padrao existente com `useApi`.
- Evitar requisicoes desnecessarias (respeitar limites da API-Sports atualmente em 100/dia).
- Tratar explicitamente estados de `loading`, `erro` e `vazio` na UI.
- Nao assumir que a API sempre retorna dados completos.
- As consultas a documentacao da API devem ser feitas para entender os parametros e respostas, evitando suposicoes.

## Estrutura padrao de mini-spec

Cada mini-spec deve conter os principais elementos:

- Entrada (estado inicial + acao do usuario)
- Regra (decisao/validacao do sistema)
- Saida esperada (resultado observavel na UI/estado)
- Erros/estados vazios/fallbacks
- Criterios de aceite objetivos

## Estrutura padrao de prompt tecnico

Todo prompt deve incluir:

1. Requisito exato da fatia.
2. Contexto (arquivos e documentos relevantes).
3. Restricoes tecnicas do projeto.
4. Criterios de aceite verificaveis.
5. Definicao de pronto.

### Template base

```text
Implemente o requisito "<X>" da issue #1 no projeto Meu Time.
Contexto: docs/documentacao-tecnica.md, docs/regras-desenvolvimento.md e <mini-spec atual>.
Restricoes:
- manter arquitetura atual (Context + hooks)
- tipar novos dados em src/types
- reaproveitar padroes de componentes/SCSS
Criterios de aceite:
- <criterio 1 objetivo>
- <criterio 2 objetivo>
Definicao de pronto:
- alteracao minima e coesa
- sem regressao de comportamento existente
- lint/build/test ok
```

## Definicao de pronto (DoD) padrao

- Requisito implementado conforme mini-spec.
- Regras de negocio preservadas.
- Tipagem e estados de UI consistentes.
- Mudancas pequenas, claras e revisaveis.
- Validacoes tecnicas do projeto sem falhas.

## Checklist rapido de PR/review

1. O fluxo impede selecoes invalidas (pais -> liga -> time)?
2. Houve limpeza de estado dependente ao trocar selecao?
3. Os dados exibidos correspondem ao filtro atual?
4. Estados de loading/erro/vazio estao corretos?
5. Existe risco de requisicoes redundantes?

## Como usar no dia a dia

1. Antes de codar: ler mini-spec + `regras-desenvolvimento.md`.
2. Gerar prompt tecnico com base nesses dois artefatos.
3. Implementar em fatia pequena.
4. Validar com criterios de aceite e DoD.
5. Registrar aprendizado sobre qualidade do prompt.
