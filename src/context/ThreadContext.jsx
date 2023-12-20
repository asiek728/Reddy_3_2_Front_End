import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const ThreadProvider = ({ children }) => {
    const [thread, setThread] = useState([]);

    return (
        <AuthContext.Provider value={{ thread, setThread }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
