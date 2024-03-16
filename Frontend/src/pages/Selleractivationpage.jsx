import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Selleractivationpage = () => {
    const { activation_token } = useParams()
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const sendSellerActivationToken = async () => {
                try {
                    const res = await axios.post("/api/seller/activation", {
                        activation_token,
                    });
                    console.log(res.data.message);
                } catch (err) {
                    setError(!error);
                    console.log(err);
                }
            }
            sendSellerActivationToken();
        }
    }, [activation_token]);

    return (
        <>
            {
                error ? (
                    <p>Your activation token is expired</p>
                ) : (
                    <p>Your Shop has been created successfully, you can login now !!</p>
                )
            }
        </>
    )
}

export default Selleractivationpage