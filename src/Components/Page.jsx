import { useContext } from "react";
import Login from "./Login";
import { LoginContext } from "../Store/LoginContext";
import Input from "./Input";
import Button from "./Button";

const Page = () => {
    const {isLoggedIn, handleLogout} = useContext(LoginContext)

    const onLogout = () => {
        handleLogout()
    }

    if (isLoggedIn) {
        return(
            <Button gray label='Logout' onClick={onLogout} />
        )
    }else{
        return(
            <Login />
        )
    }
}

export default Page;
