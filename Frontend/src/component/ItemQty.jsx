function ItemQuantity({ item, addToCart, removeFromCart }) {
    const handleAddClick = () => {
      addToCart(item.id)
    }
    const handleMinusClick = () => {
      removeFromCart(item.id)
    }
  
    return (
      <>
        <div class="flex justify-between items-center w-full font-poppins">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[2.8rem] aspect-square rounded"
            onClick={handleAddClick}
          >
            +
          </button>
          <span class="text-gray-800 font-bold text-lg">{item.qty}</span>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[2.8rem] aspect-square rounded"
            onClick={handleMinusClick}
          >
            
          </button>
        </div>
      </>
    )
  }
  
  export default ItemQuantity