import Item from "./Item"

function Itemlist({ items, addToCart, removeFromCart }) {
  const renderedItems = items.map((item) => {
    return (
      <Item
        item={item}
        key={item.id}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    )
  })

  return (
    <>
      <p className="text-center font-poppins text-xl font-bold py-5">
        Pick Your Items
      </p>
      <div className="flex gap-2 items-center justify-center pb-2 flex-wrap">
        {renderedItems}
      </div>
    </>
  )
}

export default Itemlist