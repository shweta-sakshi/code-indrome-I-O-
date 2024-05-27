import React, { createContext, useState } from 'react'

export const Sellarlogincontext = createContext("");

const Sellarcontext = ({ children }) => {
    const [Sellarlogindata, setSellarlogindata] = useState();
    return (
        <>
            <Sellarlogincontext.Provider value={{ Sellarlogindata, setSellarlogindata }}>
                {children}
            </Sellarlogincontext.Provider>
        </>
    )
}

export default Sellarcontext