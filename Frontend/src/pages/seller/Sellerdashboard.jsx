import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../component/contexProvider/Context';
import { RiLoader4Line } from "react-icons/ri";

const Userdashboard = () => {

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
                setCard(result.posts)
            })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            DashboardValid();
            setData(true);
        }, 2000);
    }, []);

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
            {
                data ?
                    <>
                        {/* rendering number of post cards */}
                        {card.map(item => (
                            <div key={item._id}>
                                {/* Product Card */}
                                <div>
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center hover:cursor-pointer hover:shadow-2xl hover:bg-slate-200">
                                        <div className="flex border-0 border-b-2 border-gray-400">
                                            <img
                                                src={item.image}
                                                alt="person"
                                                className="m-1 h-14 w-14 rounded-full border-2 border-white shadow-md"
                                            />
                                            <div className=" text-red-900 text-3xl text-center m-3">item.pname</div>
                                        </div>
                                        <img src={item.shop.Avatar} className="w-full sm:h-96" />
                                        <ul className="border-0 border-t-2 border-gray-400">
                                            <li className="m-1">
                                                <strong>Price:</strong> item.originalPrice
                                            </li>
                                            <li className="m-1">
                                                <strong>Rating:</strong> item.ratings
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </> :
                    (
                        <div className="flex justify-center items-center h-screen">
                            <div className="text-center flex">
                                <RiLoader4Line className="animate-spin text-blue-500 text-4xl m-2" />
                                <h1 className="text-xl m-2">Loading...</h1>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Userdashboard