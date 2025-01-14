import Item from "./Item";

const ItemList = ({ items, titulo }) => {
  return (
    <>
      <div className="container">
        <h2 className="main-title">{titulo}: </h2>
        <div className="productos">
          {items.map((item) => (
            <Item item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
