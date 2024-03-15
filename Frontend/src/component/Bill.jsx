import BillTotal from "./BillTotal"
import BillItems from "./BillItem"

function Bill({ items }) {
  const requiredItems = items.filter((item) => {
    return item.qty > 0
  })

  const renderedItems = requiredItems.map((item) => {
    return <BillItems item={item} />
  })

  return (
    <>
      <div className="w-1/2 p-4 m-5 flex flex-col items-center justify-start gap-4">
        <p className="font-poppins text-xl font-bold">Checkout</p>
        <div className="w-full mt-2 flex flex-col items-center justify-between gap-4 pb-4 border-b-2">
          {renderedItems}
        </div>
        <BillTotal items={items} />
      </div>
    </>
  )
}

export default Bill