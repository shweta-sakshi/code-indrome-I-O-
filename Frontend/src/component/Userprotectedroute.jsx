import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Userprotectedroute = (props) => {
    const { Component } = props
    const history = useNavigate()

    const validUserDashboard = async () => {
        let token = localStorage.getItem("usersdatatoken");

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
            history("/login");
        }
    }
    useEffect(() => {
        setTimeout(() => {
            validUserDashboard();
        }, 2000);
    }, [])
    return (
        <>
            <Component />
        </>
    )
}

export default Userprotectedroute