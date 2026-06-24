/**
 * App.jsx
 *
 * Página de demonstração do componente CardProduto.
 * Simula um mini-catálogo com dados estáticos e controle
 * de estado para alternar o botão entre adicionado/não adicionado.
 */

import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import CardProduto from './components/CardProduto'

/* ─── Estilos Globais ────────────────────────────────────────────
   createGlobalStyle injeta CSS sem escopo de componente.
   Usamos para reset básico e cor de fundo da página.
──────────────────────────────────────────────────────────────────── */
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: #f0f4f8;
    min-height: 100vh;
  }
`

/* ─── Layout da página ────────────────────────────────────────────
   Estrutura simples: cabeçalho + grid de cards centralizado.
──────────────────────────────────────────────────────────────────── */
const PageWrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;
`

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1f2e;
  letter-spacing: -0.02em;
`

const PageSubtitle = styled.p`
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
`

const TechBadge = styled.span`
  display: inline-block;
  margin-top: 0.75rem;
  background: #1a1f2e;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
`

/* Grid responsivo de cards */
const CardGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`

/* ─── Dados estáticos dos produtos ───────────────────────────────
   Em uma aplicação real, esses dados viriam de uma API.
──────────────────────────────────────────────────────────────────── */
const PRODUTOS = [
  {
    id: 1,
    nome: 'Fone Bluetooth Pro',
    categoria: 'Áudio & Som',
    badge: 'Mais vendido',
    emoji: '🎧',
    descricao: 'Som imersivo com cancelamento de ruído e 30h de bateria.',
    preco: 'R$ 299,90',
    precoOriginal: 'R$ 399,90',
    desconto: '25%',
  },
  {
    id: 2,
    nome: 'Smartwatch Fit X',
    categoria: 'Wearables',
    badge: 'Lançamento',
    emoji: '⌚',
    descricao: 'Monitor cardíaco, GPS integrado e resistência à água IP68.',
    preco: 'R$ 549,00',
    precoOriginal: 'R$ 649,00',
    desconto: '15%',
  },
  {
    id: 3,
    nome: 'Teclado Mecânico RGB',
    categoria: 'Periféricos',
    badge: 'Oferta',
    emoji: '⌨️',
    descricao: 'Switches lineares, retroiluminação RGB e layout ABNT2.',
    preco: 'R$ 189,90',
    precoOriginal: null,
    desconto: null,
  },
]

/* ─── App ─────────────────────────────────────────────────────── */
function App() {
  /**
   * adicionados: Set com os IDs dos produtos no carrinho.
   * Usar Set evita duplicatas e oferece operações O(1).
   */
  const [adicionados, setAdicionados] = useState(new Set())

  /**
   * handleAdicionar
   * Alterna o produto entre adicionado / não adicionado.
   * Cria sempre um novo Set para respeitar a imutabilidade do estado React.
   */
  const handleAdicionar = (id) => {
    setAdicionados((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id) // remove do carrinho se já estava lá
      } else {
        next.add(id)   // adiciona ao carrinho
      }
      return next
    })
  }

  return (
    <>
      {/* Estilos globais injetados uma única vez */}
      <GlobalStyle />

      <PageWrapper>
        <PageHeader>
          <PageTitle>Catálogo de Produtos</PageTitle>
          <PageSubtitle>
            Demonstração do componente <strong>CardProduto</strong> com CSS-in-JS
          </PageSubtitle>
          <TechBadge>⚛ Styled Components</TechBadge>
        </PageHeader>

        <CardGrid>
          {PRODUTOS.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              categoria={produto.categoria}
              badge={produto.badge}
              emoji={produto.emoji}
              descricao={produto.descricao}
              preco={produto.preco}
              precoOriginal={produto.precoOriginal}
              desconto={produto.desconto}
              /* Prop dinâmica: true se o id está no Set */
              adicionado={adicionados.has(produto.id)}
              onAdicionar={() => handleAdicionar(produto.id)}
            />
          ))}
        </CardGrid>
      </PageWrapper>
    </>
  )
}

export default App
