import React from 'react';

function TrackOrder() {
    return (
        <div className="bg-blue-300 min-h-screen flex justify-center items-center">
            <div className="container mx-auto p-8 bg-gray-100 relative">
                <div className="details flex flex-wrap justify-between gap-4">
                    <div className="order">
                        <h1 className="text-xl font-bold">Order<span className="text-blue-700">x3yhd45</span></h1>
                    </div>
                    <div className="date">
                        <p className="text-base">Expected Arrival 16/03/24 </p>
                        <p>USPS <b className="text-blue-700">2345674556787345</b></p>
                    </div>
                </div>
                <div className="track my-16">
                    <ul id="progress" className="list-none flex flex-wrap justify-between gap-4 text-center">
                        <li className="active"></li>
                        <li className="active"></li>
                        <li className="active"></li>
                        <li className=""></li>
                    </ul>
                </div>
                <div className="list">
                    <p>order <b>Processed</b></p>
                </div>
                <div className="list">
                    <p>order <b>shipped</b></p>
                </div>
                <div className="list">
                    <p>order <b>out of delivery</b></p>
                </div>
                <div className="list">
                    <p>order <b>Arrived</b></p>
                </div>
            </div>
        </div>
    );
}

export default TrackOrder;
