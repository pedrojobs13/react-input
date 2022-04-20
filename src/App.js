import React from "react";
import Produto from "./Produto";

var App = () => {
  var [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) {
      setProduto(produtoLocal);
    }
  }, []);
  
  React.useEffect(() => {
    if (produto !== null) {
      window.localStorage.setItem("produto", produto);
    }
  }, [produto]);

  function Api(event) {
    setProduto(event.target.innerText);
  }

  return (
    <>
      <h1>Preferências: {produto}</h1>
      <button style={{ marginLeft: "20px" }} onClick={Api}>
        Notebook
      </button>
      <button style={{ marginLeft: "20px" }} onClick={Api}>
        Smartphone
      </button>
      <Produto dados={produto} />
    </>
  );
};

export default App;
