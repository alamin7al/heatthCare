import React, { createContext } from 'react';
import UseFarebse from './UseFarebse';
export const AuthContext=createContext()
const AuthPovider = ({children}) => {
    const AllContext=UseFarebse()
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPovider;