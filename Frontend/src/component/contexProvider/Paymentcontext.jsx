import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

export const Ordersdetail = createContext("");

const Paymentcontext = ({ children }) => {
    // This is the state that will be shared
    const [detail, setDetail] = useState([]);
    const [data, setData] = useState(false);

    // Fetching all Orders details
    useEffect(() => {
        let token = localStorage.getItem("usersdatatoken");
        axios.get("/api/orders", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        })
            .then((res) => {
                setDetail(res.data.orders);
                setData(true);
            })
            .catch((error) => {
                setData(false);
                console.error("Error fetching orders:", error);
            });
    }, [data]);

    // This is the provider that will wrap the components that need access to the shared state.
    return (
        <>
            <Ordersdetail.Provider value={{ detail, setDetail, data, setData }}>
                {children}
            </Ordersdetail.Provider>
        </>
    )
}

const useOrdersdetail = () => useContext(Ordersdetail);

export { Paymentcontext, useOrdersdetail }