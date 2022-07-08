import React from "react";

export const ItemListContainer = ({ greeting }) => {
  const styles = {
    backgroundColor: "black",
    color: "white",
  };
  return <div style={styles}>{greeting}</div>;
};
