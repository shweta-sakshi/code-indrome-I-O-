import React, { useContext, useEffect, useState } from 'react';
import Dashboard from '../../component/Dashboard';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../component/contexProvider/Context';
import { RiLoader4Line } from "react-icons/ri";
import axios from 'axios';

const Sellerdashboard = () => {

    const [data, setData] = useState(false);
    const [validseller, setvalidSeller] = useState([])
    const [card, setCard] = useState([]);
    const history = useNavigate();


    //Checking the validity of Seller Dashboard
    const DashboardValid = async () => {
        //getting value of token
        let token = localStorage.getItem("sellersdatatoken");

        //calling API
        const res = await fetch("/api/validseller", {
            method: "GET",
            headers:
            {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        setvalidSeller(data.ValidSellerOne);
        console.log(validseller)
        if (data.status === 401 || !data) {
            history("/sellerloginform");
        }
    }

    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true);
        }, 2000);
    }, []);

    console.log(validseller)

    useEffect(() => {
        if (validseller && validseller.shop._id) {
            axios.get(`/api/get-all-products-shop/${validseller.shop._id}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((res) => {
                    setCard(res.data.products)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [validseller]);

    console.log(validseller);

    return (
        <>
            {
                data ?
                    (
                        <div>
                            <Dashboard />
                            {card.length > 0 ? (
                                <div className="px-10 grid gap-10 lg:grid-cols-3  sm:grid-cols-2 justify-center items-center p-2">
                                    {/* rendering number of post cards */}
                                    {card.map((item) => (
                                        <div key={item._id} className="">
                                            {/* product card */}
                                            <div className="max-w-sm rounded overflow-hidden shadow-lg text-center hover:cursor-pointer hover:shadow-2xl hover:bg-slate-200 mt-16">
                                                <div className="flex border-0 border-b-2 border-gray-400">
                                                    <img
                                                        src="https://chemindigest.com/wp-content/uploads/2021/04/specialty-chemicals-6.jpg"
                                                        alt={item.shop.Avatar}
                                                        className="m-1 h-14 w-14 rounded-full border-2 border-white shadow-md"
                                                    />
                                                    <div className=" text-red-900 text-3xl text-center m-3">
                                                        {item.pname}
                                                    </div>
                                                </div>
                                                <Link to={`/productInfo/${item.pname}/${item.price}/${item.manufacturing}/${item.expiry}/${item.category}`}>
                                                    <img
                                                        src="https://chemindigest.com/wp-content/uploads/2021/04/specialty-chemicals-6.jpg"
                                                        alt="product image"
                                                        className="w-full sm:h-96"
                                                    />
                                                </Link>
                                                <ul className="border-0 border-t-2 border-gray-400">
                                                    <li className="m-1">
                                                        <strong>Price:</strong> {item.price}
                                                    </li>
                                                    <li className="m-1">
                                                        <strong>Rating:</strong> 4.5
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                history("/addproduct")
                            )}
                        </div>
                    ) :
                    (
                        <div className="flex justify-center items-center h-screen">
                            <div className="text-center flex">
                                <RiLoader4Line className="animate-spin text-blue-500 text-4xl m-2" />
                                <h1 className="text-xl m-2">Loding....</h1>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Sellerdashboard