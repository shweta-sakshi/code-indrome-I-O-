import React, { createContext, useState } from 'react'

export const Sellarlogincontext = createContext("");

const Sellarcontext = ({ children }) => {

    // This is the state that will be shared.
    const [Sellarlogindata, setSellarlogindata] = useState();

    // This is the provider that will wrap the components that need access to the shared state.
    return (
        <>
            <Sellarlogincontext.Provider value={{ Sellarlogindata, setSellarlogindata }}>
                {children}
            </Sellarlogincontext.Provider>
        </>
    )
}

export default Sellarcontext