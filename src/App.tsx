import CardProduto from "./components/CardProduto";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "50px",
        flexWrap: "wrap",
      }}
    >
      <CardProduto
        nome="Mouse Gamer RGB"
        preco={149.9}
      />

      <CardProduto
        nome="Teclado Mecânico"
        preco={299.9}
      />
    </div>
  );
}

export default App;