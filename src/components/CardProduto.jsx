import styled from "styled-components";

/*
  Container principal do card.
  Responsável pela aparência geral do produto.
*/
const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`;

/*
  Título do produto.
*/
const NomeProduto = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

/*
  Preço do produto.
*/
const PrecoProduto = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0d6efd;
  margin-bottom: 20px;
`;

/*
  Botão com estilização dinâmica.
  A cor muda de acordo com a prop "adicionado".
*/
const BotaoCarrinho = styled.button`
  background-color: ${(props) =>
    props.adicionado ? "#198754" : "#6c757d"};

  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

/*
  Componente CardProduto.
*/
function CardProduto({ nome, preco, adicionado }) {
  return (
    <CardContainer>
      <NomeProduto>{nome}</NomeProduto>

      <PrecoProduto>
        R$ {preco.toFixed(2)}
      </PrecoProduto>

      <BotaoCarrinho adicionado={adicionado}>
        Adicionar ao carrinho
      </BotaoCarrinho>
    </CardContainer>
  );
}

export default CardProduto;