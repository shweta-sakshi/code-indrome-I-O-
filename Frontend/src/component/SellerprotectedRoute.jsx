import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const SellerprotectedRoute = (props) => {
    const { Component } = props
    const history = useNavigate()

    const ValidSellerDashboard = async () => {
        let token = localStorage.getItem("sellersdatatoken")
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

        if (data.status === 401 || !data) {
            history("/sellerloginform");
        }
    }

    useEffect(() => {
        setTimeout(() => {
            ValidSellerDashboard();
        }, 2000);
    }, [])

    return (
        <>
            <Component />
        </>
    )
}

export default SellerprotectedRoute