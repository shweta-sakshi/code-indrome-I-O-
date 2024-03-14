import React from 'react'

const Paymentdetail = () => {
    return (
        <>
            <div className="container">
                <form action="">
                    <div className="row">
                        <div className="col">
                            <h3 className="title">Biling address</h3>
                        </div>
                        <div className="input box">
                            <span>Full name:</span>
                            <input type="text" place holder="johnSon" />
                        </div>
                        <div className="input box">
                            <span>email:</span>
                            <input type="text" place holder="example@gmail.com" />
                        </div>
                        <div className="input box" >

                            <span>Address:</span>
                            <input type="text" place holder="street-House no-Locality" />
                        </div>
                        <div className="input box" >
                            <span>City:</span>
                            <input type="text" place holder="mumbai" />
                        </div>
                        <div className="flex">

                            <div className="input box" >
                                <span>State:</span>
                                <input type="text" place holder="india" />
                            </div>
                            <div className="input box">
                                <span>zip code:</span>
                                <input type="text" place holder="122343 " />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3 className="title">Payment Mode</h3>
                            </div>
                            <div className="input box">
                                <span>card accepted:</span>
                                {/* <!--here different types of card image upload  --> */}
                            </div>
                            <div className="input box">
                                <span>name on card:</span>
                                <input type="text" place holder="Mr johnson" />
                            </div>
                            <div className="input box" >

                                <span>credit card number:</span>
                                <input type="text" place holder="1111-2222-3333-4444" />
                            </div>
                            <div className="input box" >
                                <span>expiry month:</span>
                                <input type="text" place holder="april" />
                            </div>
                            <div className="flex">

                                <div className="input box" >
                                    <span>expiry year:</span>
                                    <input type="text" place holder="2026" />
                                </div>
                                <div className="input box">
                                    <span>CVV:</span>
                                    <input type="text" place holder="1234" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="proceed to check" className="submit" />
                </form>
            </div>
        </>
    )
}

export default Paymentdetail
