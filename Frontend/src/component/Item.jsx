import axios from 'axios';
import ItemQuantity from "./ItemQty"
import { Link } from "react-router-dom";
import { useProductlistdata } from './contexProvider/Productcontext';

function Item({ item }) {

  console.log(item);
  const { card } = useProductlistdata();

  const handleRemoveItem = (pid) => {
    const productIndex = card.findIndex(items => items._id === pid);
    const token = localStorage.getItem("usersdatatoken");

    axios.post('/api/removefromcart', { product: card[productIndex] }, {
      headers: {
        "Content-Type": "application/json",
        authorization: token
      }
    })
      .then(res => { console.log(res) })
      .catch(error => { console.log(error) })
  }


  return (
    <>
      <div className="flex justify-center w-full" >
        <div className="w-full max-w-[25rem] flex flex-col items-center justify-center p-2 bg-blue-50 shadow-xl ">
          <div className="flex items-center">
            <Link to='/productInfo'
              state={{ productInformation: item.productId }}
            >
              <img
                src={item.photo}
                alt=""
                className="rounded-md w-15 h-12 object-cover mr-4"
              />
            </Link>
            <div className="flex-row">
              <div className="flex items-center  w-full p-0 pt-1">
                <p className="font-poppins font-bold capitalize">{item.pname}</p>
              </div>
              <div className="flex items-center  w-full p-0 pb-1">
                <p className="font-poppins font-bold">Rs. {item.price}</p>
              </div>
              <ItemQuantity
                item={item}
              />
            </div>
            <button
              className="bg-red-500 text-white text-lg font-medium font-poppins ml-6 rounded-md p-2 hover:bg-red-800"
              onClick={() => handleRemoveItem(item.productId)}
            >Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item