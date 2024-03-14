import React from 'react'

const Seller = () => {
    return (
        <div>
            <div class name='wrapper'>
                <form action="">
                    <h3>Create a business account</h3>
                    <div class name="input-box" ></div>
                    <input type="text" placeholder='Shop name' required />
                </form>
                <div class name="input-box">
                    <input type="Phone number" placeholder='Phone number' required />
                </div>
                <div class name="input-box">
                    <input type="text" placeholder='Email address' required />
                </div>
                <div class name="input-box">
                    <input type="Password" placeholder='Password' required />
                </div>
                <div class name="input-box">
                    <input type=" Confirm Password" placeholder=' Confirm Password' required />

                </div>
                <div class name="input-box" >
                    <input type="Location address" placeholder='Location address' required />
                </div>
                <div>

                </div>
                <div class name="input-box">
                    <input type="zip code" placeholder='Zip code' required />

                </div>
                <div>
                    <button type="submit">signUp</button>
                    <p>Already have an account?<a href="/">sign in </a></p>
                </div>

            </div>
        </div>

    )
}

export default Seller
