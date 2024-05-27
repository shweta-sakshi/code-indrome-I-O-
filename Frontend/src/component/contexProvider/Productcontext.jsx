import React, { useState, useContext, createContext, useEffect } from 'react'

export const Cartproductdata = createContext("");

const Productcontext = ({ children }) => {

    const [cartdata, setcartdata] = useState([]);

    useEffect(() => {
        let existingCartdata = localStorage.getItem('Cart')
        if (existingCartdata) setcartdata(JSON.parse(existingCartdata));
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

export { useCartproductdata, Productcontext };
