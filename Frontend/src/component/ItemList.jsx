import Dashboard from "./Dashboard";
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
    <div>
      <div>
        <Dashboard />
      </div>
      <div>
        <div className="text-center font-poppins text-4xl font-bold p-5 ">
          <div className="mt-16">Pick Your Items</div>
        </div>
        <div className="px-10 grid gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center p-2 ">
          {renderedItems}
        </div>
      </div>
    </div>
  );
}

export default Itemlist;
