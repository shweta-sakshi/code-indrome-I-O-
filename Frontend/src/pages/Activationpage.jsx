import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Activationpage = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/api/activation', {
                        activation_token,
                    });
                    console.log(res.data.message);
                } catch (err) {
                    setError(!error)
                }
            }
            activationEmail();
        }
    }, [activation_token]);
    return (
        <>
            {
                error ? (
                    <p>Your activation token is expired</p>
                ) : (
                    <p>Your account has been created successfully, you can login now !!</p>
                )
            }
        </>
    )
}

export default Activationpage