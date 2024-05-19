import { useState } from "react"
import ItemQuantity from "./ItemQty"

function Item({ item, addToCart, removeFromCart }) {
  // const [added, setAdded] = useState(false)

  const handleAddItemClick = () => {
    addToCart(item.id)
  }

  let content = (
    <>
      <button
        className="bg-orange-500 text-white text-lg font-medium font-poppins w-full px-3 py-2 rounded-md p-2"
        onClick={handleAddItemClick}
      >
        Add to Cart
      </button>
    </>
  )

  if (item.qty > 0) {
    content = (
      <ItemQuantity
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    )
  }

  return (
    <>
      <div className="max-w-[25rem] flex flex-col items-center justify-center p-2 bg-amber-100 shadow-xl rounded-md gap-4">
        <div className="flex items-center">
          <img
            src={`https://picsum.photos/seed/${item.id}/300/200`}
            alt=""
            className="rounded-md w-15 h-12 object-cover mr-4"
          />
          <div className="flex-row">
            <div className="flex items-center  w-full p-0 pt-1">
              <p className="font-poppins font-bold capitalize">{item.name}</p>
            </div>
            <div className="flex items-center  w-full p-0 pb-1">
              <p className="font-poppins font-bold">Rs. {item.price}</p>
            </div>
          </div>
        </div>
        {content}
      </div>
    </>
  );
}

export default Item