import { createContext, useContext, useState } from "react";

const LoggedinStatusContext = createContext();

export const LoggedinStatusContextProvider = ({children}) => {
    const defaultValue = JSON.parse(localStorage.getItem('loginStatus')) || false;
    let [loggedinStatus, setLoggedinStatus] = useState(defaultValue);

    const values = {
        loggedinStatus,
        setLoggedinStatus
    }
    return (<LoggedinStatusContext.Provider value={values}>{children}</LoggedinStatusContext.Provider>)
}

export const useLoggedinStatus = () => useContext(LoggedinStatusContext)