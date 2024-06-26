import axios from 'axios';
import React, { useState, useContext, createContext, useEffect } from 'react'

export const Cartproductdata = createContext("");

const Cartcontext = ({ children }) => {

    // This is the state that will be shared
    const [cartdata, setcartdata] = useState([]);

    // Fetching all products in cart of user.
    useEffect(() => {
        let token = localStorage.getItem("usersdatatoken");
        axios.get('/api/getitemsfromcart', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
            .then(res => {
                setcartdata(res.data.CartItems.items);
            })
            .catch(error => {
                console.log("in Cartcontext: " + error);
            })
        // if (existingCartdata) setcartdata(JSON.parse(existingCartdata));
    }, [cartdata])

    // This is the provider that will wrap the components that need access to the shared state.
    return (
        <>
            <Cartproductdata.Provider value={[cartdata, setcartdata]}>
                {children}
            </Cartproductdata.Provider>
        </>
    )
}

const useCartproductdata = () => useContext(Cartproductdata);

export { useCartproductdata, Cartcontext };
