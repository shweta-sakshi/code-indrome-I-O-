import axios from 'axios';
import React, { useState, useContext, createContext, useEffect } from 'react'

export const Cartproductdata = createContext("");

const Cartcontext = ({ children }) => {

    const [cartdata, setcartdata] = useState([]);

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
    }, [])

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
