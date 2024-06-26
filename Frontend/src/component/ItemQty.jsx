import { useCartproductdata } from "./contexProvider/Cartcontext";

function ItemQuantity({ item }) {

  const [cartdata, setcartdata] = useCartproductdata();

  // This function will handle the increment of the quantity of the product.
  const handleAddClick = (pid) => {
    try {
      let mycart = [...cartdata]
      let index = mycart.findIndex(item => item._id === pid)
      mycart[index].number += 1;
      setcartdata(mycart);
      localStorage.setItem('Cart', JSON.stringify(mycart));
    } catch (error) {
      console.log(error);
    }
  }

  // This function will handle the decrement of the quantity of the product.
  const handleMinusClick = (pid) => {
    try {
      let mycart = [...cartdata]
      let index = mycart.findIndex(item => item._id === pid)
      if (mycart[index].number > 1) {
        mycart[index].number = mycart[index].number - 1;
      }
      setcartdata(mycart);
      localStorage.setItem('Cart', JSON.stringify(mycart));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-between items-center w-full font-poppins">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[2.8rem] aspect-square rounded"
          onClick={() => handleAddClick(item._id)}
        >
          +
        </button>
        <span className="text-gray-800 font-bold text-lg">{item.number}</span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[2.8rem] aspect-square rounded"
          onClick={() => handleMinusClick(item._id)}
        >
          -
        </button>
      </div>
    </>
  )
}

export default ItemQuantity