import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const productos = [
    { id: 1, name: "Producto 1", price: 100, stock: 10 },
    { id: 2, name: "Producto 2", price: 200, stock: 10 },
    { id: 3, name: "Producto 3", price: 300, stock: 10 },
  ];

  const task = new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });

  //   const getTask = async () => {
  //     try {
  //       let res = await task;
  //       setItems(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEfect(() => {
    task.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  console.log(items);
  return (
    <div style={{ textAlign: "center", marginTop: 200 }}>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
