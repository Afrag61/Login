import { createContext, useState } from "react";
import { USER } from "../USERS";

export const LoginContext =  createContext({
    isLoggedIn: USER.isLoggedIn,
    handleLogIn: () => {},
    handleLogout: () => {}
});


const LoginContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = () => {
        setIsLoggedIn(true)
        USER.isLoggedIn = true
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        USER.isLoggedIn = false
    }

    return (
        <LoginContext.Provider value={{isLoggedIn, handleLogIn, handleLogout}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;
