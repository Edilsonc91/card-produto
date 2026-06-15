import CardProduto from "./components/CardProduto";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {/* Produto não adicionado */}
      <CardProduto
        nome="Mouse Gamer RGB"
        preco={149.9}
        adicionado={false}
      />

      {/* Produto adicionado */}
      <CardProduto
        nome="Teclado Mecânico"
        preco={299.9}
        adicionado={true}
      />
    </div>
  );
}

export default App;