import ItemCount from "../itemCount/ItemCount";

export const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    alert("Compraste:" + count);
  };

  const styles = {
    backgroundColor: "Grey",
    color: "white",
  };

  return (
    <div style={styles}>
      {" "}
      {greeting} <ItemCount initial={1} stock={10} onAdd={onAdd} />{" "}
    </div>
  );
};

export default ItemListContainer;
