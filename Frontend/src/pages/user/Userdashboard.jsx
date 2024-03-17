import React, { useContext, useEffect, useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import { LoginContext } from '../../component/contexProvider/Context';
import Dashboard from '../../component/Dashboard';
import { RiLoader4Line } from "react-icons/ri";

const Userdashboard = () => {

    const [cart, setCart] = useState([]);
    const [shippingAddress, setShippingAddress] = useState('');
    const [user, setUser] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');
    const [card, setCard] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("usersdatatoken");
        fetch('/api/get-all-products', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => res.json())
            .then(result => {
                setCard(result.products)
            })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true);
        }, 2000);
    }, []);



    const AddToCart = async (e) => {  //call when button hits
        e.preventDefault();
        try {
            // Send a POST request to the backend API endpoint
            const response = await axios.post('/api/create-order', {
                cart,
                shippingAddress,
                user,
                totalPrice,
                paymentInfo,
            });
            console.log('Order created successfully:', response.data);
            // Optionally, you can reset the form fields after successful submission
            setCart([]);
            setShippingAddress('');
            setUser('');
            setTotalPrice('');
            setPaymentInfo('');
        } catch (error) {
            console.error('Error creating order:', error);
            // Handle error, show error message to user, etc.
        }
    }

    const { logindata, setLoginData } = useContext(LoginContext);
    const [data, setData] = useState(false);
    const history = useNavigate();

    const DashboardValid = async () => {
        //getting value of token
        let token = localStorage.getItem("usersdatatoken");

        //calling API
        const res = await fetch("/api/validuser", {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();

        if (data.status === 401 || !data) {
            history("*");
        } else {
            setLoginData(data);
            history("/dash");
        }
    }

    return (
      <>
        <Dashboard />
        {data ? (
          <>
            {/* rendering number of post cards */}
            {card.map((item) => (
              <div key={item._id}>
                <>
                  {/* product card*/}
                  <div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center hover:cursor-pointer hover:shadow-2xl hover:bg-slate-200">
                      <div className="flex border-0 border-b-2 border-gray-400">
                        <img
                          src={data.Person}
                          alt=""
                          className="m-1 h-14 w-14 rounded-full border-2 border-white shadow-md"
                        />
                        <div className=" text-red-900 text-3xl text-center m-3">
                          {data.product}
                        </div>
                      </div>
                      <img
                        src={data.imageSource}
                        alt={data.name}
                        className="w-full sm:h-96"
                      />
                      <ul className="border-0 border-t-2 border-gray-400">
                        <li className="m-1">
                          <strong>Price:</strong> {data.price}
                        </li>
                        <li className="m-1">
                          <strong>Rating:</strong> {data.rating}
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              </div>
            ))}
            <Link
              to="/sellersignupform"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold sm:p-2 p-1 rounded hover:shadow-md"
            >
              Create Business Account
            </Link>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <div className="text-center flex">
              <RiLoader4Line className="animate-spin text-blue-500 text-4xl m-2" />
              <h1 className="text-xl m-2">Loading...</h1>
            </div>
          </div>
        )}
      </>
    );
}

export default Userdashboard