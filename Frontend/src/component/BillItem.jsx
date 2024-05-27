function BillItems({ item }) {
  return (
    <div className="flex items-center justify-between w-full font-poppins p-2 rounded-md">
      <p>{item.pname}</p>
      <p>{item.price * item.number} </p>
    </div>
  )
}

export default BillItems