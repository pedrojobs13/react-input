import React from "react";

var Produto = ({dados}) => {
  var [produto, setProduto] = React.useState(null);
   
  React.useEffect(() => {
    if (dados !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${dados}`)
        .then((reposta) => reposta.json())
        .then((json) => setProduto(json));
    }
  }, [dados]);

  if (produto == null) {
    return null;
  }
  return (
    <>
      {produto && (
        <div style={{ marginLeft: "25px" }}>
          <h2>{produto.nome}</h2>
          <p>R$ {produto.preco}</p>
        </div>
      )}
    </>
  );
};

export default Produto;
