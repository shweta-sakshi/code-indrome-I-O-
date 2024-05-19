import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginContext } from "../../component/contexProvider/Context";
import Dashboard from "../../component/Dashboard";
import { RiLoader4Line } from "react-icons/ri";
import axios from "axios";

const Userdashboard = () => {
    //getting all the products added by sellers.
    const [card, setCard] = useState([]);
    const [data, setData] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        axios
            .get("/api/get-all-products", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setCard(res.data.products);
                setData(true);
            })
            .catch((error) => {
                setData(false);
                console.error("Error fetching products:", error);
            });
    }, [data]);


    return (
        <div>
            <div className="">
                <Dashboard />
            </div>
            <div className="">
                {data ? (
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
                                            alt={data.name}
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
                    <div className="flex justify-center items-center h-screen">
                        <div className="text-center flex">
                            {/* <RiLoader4Line className="animate-spin text-blue-500 text-4xl m-2" /> */}
                            <h1 className="text-xl m-2">No Product Available</h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Userdashboard;
