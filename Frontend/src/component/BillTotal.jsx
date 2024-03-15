function BillTotal({ items }) {
    let totalAmount = 0
    for (let item of items) {
      totalAmount += item.price * item.qty
    }
  
    return (
      <>
        <div className="flex items-center justify-between w-full font-poppins p-2 rounded-md">
          <p>Total</p>
          <p>{totalAmount}</p>
        </div>
      </>
    )
  }
  
  export default BillTotal