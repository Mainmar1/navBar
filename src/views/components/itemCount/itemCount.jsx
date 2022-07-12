import React, { useState } from "react";

const ItemCount = () => {
  const [contador, actualizarContador] = useState(0);

  //   console.log(estado);

  //   let cont = 0;

  const aumentar = () => {
    actualizarContador(contador + 1);
  };

  const styles = {
    Width: "15px",
    Height: "15px",
    border: "1px solid black",
    borderRadius: "15px",
    padding: "7px",
    margin: "5px",
  };

  return (
    <div>
      {contador}
      <buttonc style={styles} onClick={aumentar}>
        Aumentar
      </buttonc>
    </div>
  );
};

export default ItemCount;
