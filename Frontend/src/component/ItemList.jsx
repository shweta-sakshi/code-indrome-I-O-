import Dashboard from "./Dashboard";
import Item from "./Item";

function Itemlist({ items }) {
  // This component is used to display the list of items in the cart.
  const renderedItems = items.map((item) => (
    <Item
      item={item}
      key={item._id}
    />
  ));

  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div>
        <div className="text-center font-poppins text-4xl font-bold p-5 ">
          <div className="mt-16">Items In Cart</div>
        </div>
        <div className="px-10 grid gap-10 grid-cols-1 justify-center items-center p-2">
          {renderedItems}
        </div>
      </div>
    </div>
  );
}

export default Itemlist;
