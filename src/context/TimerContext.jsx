import React, { useState, useContext, createContext } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState("");

    return (
        <TimerContext.Provider value={{ timer, setTimer }}>
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => useContext(TimerContext);
