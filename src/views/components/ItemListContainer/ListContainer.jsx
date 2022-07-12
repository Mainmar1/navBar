// import React, { useEffect } from "react";

export const ItemListContainer = ({ greeting }) => {
  // const getFetch = () => {
  //   fetch("https://asia-east1-run.googleapis.com")
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then((respuesta) => console.log(respuesta))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getFetch();
  // }, []);

  const styles = {
    backgroundColor: "black",
    color: "white",
  };
  return <div style={styles}> {greeting} </div>;
};
