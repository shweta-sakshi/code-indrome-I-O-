import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

export const Productlistdata = createContext("");

const Productcontext = ({ children }) => {

    // This is the state that will be shared
    const [card, setCard] = useState([]);
    const [data, setData] = useState(false);

    // Fetching all products
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

    // This is the provider that will wrap the components that need access to the shared state.
    return (
        <>
            <Productlistdata.Provider value={{ card, setCard, data, setData }}>
                {children}
            </Productlistdata.Provider>
        </>
    )
}

const useProductlistdata = () => useContext(Productlistdata);

export { Productcontext, useProductlistdata }