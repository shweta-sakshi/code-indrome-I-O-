import Item from "./Item";

function Itemlist({ items, addToCart, removeFromCart }) {
  const renderedItems = items.map((item) => (
    <Item
      item={item}
      key={item.id}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  ));

  return (
    <>
      <p className="text-center font-poppins text-4xl font-bold p-5 m-4">
        Pick Your Items
      </p>
      <div className="px-10 grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center p-2 ">
        {renderedItems}
      </div>
    </>
  );
}

export default Itemlist;
