/**
 * CardProduto.jsx
 *
 * Componente refatorado com CSS-in-JS utilizando Styled Components.
 *
 * Conceitos aplicados:
 *  - styled-components: cada elemento HTML é substituído por
 *    um componente estilizado via template literal.
 *  - Props dinâmicas: o botão recebe a prop `adicionado` e
 *    altera sua cor com base no valor booleano.
 *  - Organização: cada styled component possui um nome
 *    semântico que descreve sua função no layout.
 */

import React from 'react'
import styled, { css } from 'styled-components'

/* ─── Tokens de design ────────────────────────────────────────────
   Centralizar valores reutilizáveis facilita manutenção futura.
   Se o projeto crescer, esses tokens podem migrar para um
   arquivo de tema do ThemeProvider do styled-components.
──────────────────────────────────────────────────────────────────── */
const tokens = {
  /* Cores principais */
  colorSurface: '#ffffff',
  colorBorder: '#e8ecf0',
  colorShadow: 'rgba(0, 0, 0, 0.07)',
  colorShadowHover: 'rgba(0, 0, 0, 0.13)',
  colorBadgeBg: '#f0f7ff',
  colorBadgeText: '#1a6bc4',

  /* Cores semânticas do botão (prop adicionado) */
  colorBtnAdded: '#198754',      /* verde Bootstrap — estado "adicionado" */
  colorBtnAddedHover: '#146c43',
  colorBtnDefault: '#6c757d',    /* cinza Bootstrap — estado padrão       */
  colorBtnDefaultHover: '#565e64',

  /* Tipografia */
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSizeXs: '0.7rem',
  fontSizeSm: '0.82rem',
  fontSizeMd: '1rem',
  fontSizeLg: '1.15rem',
  fontSizeXl: '1.5rem',

  /* Espaçamento */
  space1: '0.25rem',
  space2: '0.5rem',
  space3: '0.75rem',
  space4: '1rem',
  space5: '1.25rem',
  space6: '1.5rem',

  /* Bordas */
  radius: '14px',
  radiusBtn: '8px',
  radiusBadge: '20px',
  radiusImage: '10px',
}

/* ─── Styled Components ───────────────────────────────────────────
   Convenção de nomenclatura: prefixo descritivo + papel do elemento.
   Ex.: Card (wrapper principal), CardImage, CardBody, CardPrice…
──────────────────────────────────────────────────────────────────── */

/**
 * Card
 * Contêiner externo do card. Define a caixa, sombra e
 * a transição ao hover para dar sensação de elevação.
 */
const Card = styled.article`
  font-family: ${tokens.fontFamily};
  background: ${tokens.colorSurface};
  border: 1px solid ${tokens.colorBorder};
  border-radius: ${tokens.radius};
  box-shadow: 0 2px 12px ${tokens.colorShadow};
  width: 260px;
  overflow: hidden;
  transition: box-shadow 0.22s ease, transform 0.22s ease;

  /* Leve elevação ao passar o mouse — feedback visual sem poluir */
  &:hover {
    box-shadow: 0 6px 24px ${tokens.colorShadowHover};
    transform: translateY(-3px);
  }
`

/**
 * CardImageWrapper
 * Área reservada para a imagem do produto.
 * Usa background como placeholder ilustrativo.
 */
const CardImageWrapper = styled.div`
  width: 100%;
  height: 170px;
  background: linear-gradient(135deg, #e8f4ff 0%, #d0e8ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

/**
 * CardImageEmoji
 * Representação visual do produto (pode ser substituída por <img>).
 */
const CardImageEmoji = styled.span`
  font-size: 4rem;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.12));
  user-select: none;
`

/**
 * CardBadge
 * Rótulo flutuante sobre a imagem para destacar a categoria.
 * Demonstra composição de estilos dentro de um styled component.
 */
const CardBadge = styled.span`
  position: absolute;
  top: ${tokens.space3};
  left: ${tokens.space3};
  background: ${tokens.colorBadgeBg};
  color: ${tokens.colorBadgeText};
  font-size: ${tokens.fontSizeXs};
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: ${tokens.space1} ${tokens.space3};
  border-radius: ${tokens.radiusBadge};
  text-transform: uppercase;
`

/**
 * CardBody
 * Área de conteúdo textual. Padding uniforme e flex coluna
 * para empilhar os elementos verticalmente.
 */
const CardBody = styled.div`
  padding: ${tokens.space5};
  display: flex;
  flex-direction: column;
  gap: ${tokens.space3};
`

/**
 * CardCategory
 * Subcategoria do produto em texto menor e mais discreto.
 */
const CardCategory = styled.p`
  margin: 0;
  font-size: ${tokens.fontSizeSm};
  color: #8a94a6;
  font-weight: 500;
  letter-spacing: 0.02em;
`

/**
 * CardName
 * Nome principal do produto — maior peso visual da seção de texto.
 */
const CardName = styled.h2`
  margin: 0;
  font-size: ${tokens.fontSizeLg};
  font-weight: 700;
  color: #1a1f2e;
  line-height: 1.3;
`

/**
 * CardDescription
 * Texto breve de apoio. Tamanho reduzido para não competir
 * com o nome e o preço.
 */
const CardDescription = styled.p`
  margin: 0;
  font-size: ${tokens.fontSizeSm};
  color: #6b7280;
  line-height: 1.5;
`

/**
 * CardPriceRow
 * Linha horizontal que agrupa preço original e preço atual
 * lado a lado com alinhamento baseline.
 */
const CardPriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${tokens.space2};
`

/**
 * CardPriceOriginal
 * Preço "de" riscado — indica desconto aplicado.
 */
const CardPriceOriginal = styled.span`
  font-size: ${tokens.fontSizeSm};
  color: #a0aab4;
  text-decoration: line-through;
`

/**
 * CardPrice
 * Preço atual em destaque — elemento de maior relevância
 * na seção de preços.
 */
const CardPrice = styled.span`
  font-size: ${tokens.fontSizeXl};
  font-weight: 700;
  color: #1a1f2e;
  letter-spacing: -0.02em;
`

/**
 * CardDiscount
 * Percentual de desconto como badge compacto.
 */
const CardDiscount = styled.span`
  font-size: ${tokens.fontSizeXs};
  font-weight: 700;
  color: #198754;
  background: #e8f5ee;
  padding: 2px ${tokens.space2};
  border-radius: 4px;
`

/**
 * CardDivider
 * Linha separadora visual entre preço e botão.
 * Elemento puramente decorativo — CSS simples e limpo.
 */
const CardDivider = styled.hr`
  border: none;
  border-top: 1px solid ${tokens.colorBorder};
  margin: ${tokens.space1} 0;
`

/**
 * CardButton
 * Botão principal de ação — o único elemento com estilo DINÂMICO
 * via props. A prop `adicionado` (boolean) controla a cor de fundo.
 *
 * Técnica: interpolação de função dentro do template literal.
 * O styled-components passa as props automaticamente para a função,
 * e o valor retornado é injetado no CSS.
 */
const CardButton = styled.button`
  /* Layout */
  width: 100%;
  padding: ${tokens.space3} ${tokens.space4};
  border: none;
  border-radius: ${tokens.radiusBtn};
  cursor: pointer;

  /* Tipografia */
  font-family: ${tokens.fontFamily};
  font-size: ${tokens.fontSizeMd};
  font-weight: 600;
  letter-spacing: 0.01em;

  /* Transição suave de cor e escala */
  transition: background-color 0.2s ease, transform 0.1s ease, opacity 0.2s ease;
  color: #ffffff;

  /* ── Estilização dinâmica ──────────────────────────────────────
     A prop adicionado controla qual bloco de CSS é aplicado.
     css (importado do styled-components) garante que as
     interpolações internas também sejam processadas corretamente.
  ──────────────────────────────────────────────────────────────── */
  ${({ adicionado }) =>
    adicionado
      ? css`
          /* Estado: produto JÁ adicionado ao carrinho → verde */
          background-color: ${tokens.colorBtnAdded};
          &:hover {
            background-color: ${tokens.colorBtnAddedHover};
          }
        `
      : css`
          /* Estado: produto NÃO adicionado → cinza neutro */
          background-color: ${tokens.colorBtnDefault};
          &:hover {
            background-color: ${tokens.colorBtnDefaultHover};
          }
        `}

  /* Micro-interação: leve recuo ao clicar */
  &:active {
    transform: scale(0.97);
  }

  /* Acessibilidade: indicador de foco visível para navegação por teclado */
  &:focus-visible {
    outline: 3px solid #6ea8fe;
    outline-offset: 2px;
  }
`

/* ─── Componente CardProduto ──────────────────────────────────────
   Props:
     nome        (string)  — nome do produto
     categoria   (string)  — subcategoria exibida acima do nome
     badge       (string)  — rótulo da imagem (ex.: "Novo", "Oferta")
     emoji       (string)  — ícone/emoji ilustrativo do produto
     descricao   (string)  — texto descritivo curto
     preco       (string)  — preço atual formatado
     precoOriginal (string)— preço "de" para mostrar desconto
     desconto    (string)  — percentual de desconto (ex.: "20%")
     adicionado  (bool)    — controla cor do botão e texto
     onAdicionar (func)    — callback do clique no botão
──────────────────────────────────────────────────────────────────── */
function CardProduto({
  nome = 'Produto',
  categoria = 'Categoria',
  badge = 'Novo',
  emoji = '📦',
  descricao = 'Descrição do produto.',
  preco = 'R$ 0,00',
  precoOriginal,
  desconto,
  adicionado = false,
  onAdicionar,
}) {
  return (
    <Card>
      {/* ── Área da imagem ── */}
      <CardImageWrapper>
        <CardBadge>{badge}</CardBadge>
        <CardImageEmoji role="img" aria-label={nome}>
          {emoji}
        </CardImageEmoji>
      </CardImageWrapper>

      {/* ── Corpo do card ── */}
      <CardBody>
        <CardCategory>{categoria}</CardCategory>
        <CardName>{nome}</CardName>
        <CardDescription>{descricao}</CardDescription>

        {/* Bloco de preço: exibe preço original e desconto apenas se fornecidos */}
        <CardPriceRow>
          {precoOriginal && (
            <CardPriceOriginal>{precoOriginal}</CardPriceOriginal>
          )}
          <CardPrice>{preco}</CardPrice>
          {desconto && <CardDiscount>-{desconto}</CardDiscount>}
        </CardPriceRow>

        <CardDivider />

        {/*
          Botão com estilização dinâmica.
          A prop `adicionado` é repassada ao styled component CardButton,
          que altera a cor de fundo conforme o estado atual.
        */}
        <CardButton adicionado={adicionado} onClick={onAdicionar}>
          {adicionado ? '✓ Adicionado ao carrinho' : '+ Adicionar ao carrinho'}
        </CardButton>
      </CardBody>
    </Card>
  )
}

export default CardProduto
