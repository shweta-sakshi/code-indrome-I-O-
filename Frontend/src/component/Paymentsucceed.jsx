import React from 'react'

const Paymentsucceed = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex items-center bg-green-100 border border-green-500 text-green-900 px-4 py-3 rounded-md">
                <img src='https://www.svgrepo.com/show/13650/success.svg'
                    className="h-6 w-6 mr-2 text-green-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                ></img>
                <p className="text-lg font-semibold">
                    Payment succeed!!!
                </p>
            </div>
        </div>
    )
}

export default Paymentsucceed