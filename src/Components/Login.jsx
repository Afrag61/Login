import { useContext, useState } from "react";
import { USER } from './../USERS.js'
import Button from "./Button";
import Input from "./Input";
import { LoginContext } from "../Store/LoginContext";

const Login = () => {
    const [inputEmailValue, setInputEmailValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')
    const {handleLogIn} = useContext(LoginContext)
    const [emailCheck, setEmailCheck] = useState(false)
    const [passwordCheck, setPasswordCheck] = useState(false)

    let Wrong

    const Style = {
        Login: 'w-96 h-96 flex flex-col items-center justify-center gap-6 bg-gray-50 rounded-2xl shadow-2xl p-1',
        h1: 'text-3xl font-extrabold font-mono text-blue-500 w-full text-center pb-3 border-b border-gray-300',
        buttons: 'w-64 max-w-64 flex justify-around flex-wrap',
        allBtns: 'w-full flex justify-center pt-6 border-t border-gray-300'
    }

    const handleChangeEmail = (value) => {
        setInputEmailValue(value)
    }

    const handleChangePassword = (value) => {
        setInputPasswordValue(value)
    }

    const onLogIn = () => {
        if(USER.email === inputEmailValue && USER.password === inputPasswordValue){
            setEmailCheck(true)
            setPasswordCheck(true)
            handleLogIn()
        }

        setInputEmailValue('')
        setInputPasswordValue('')
    }

    return (
            <div id="Login" className={Style.Login}>
                <h1 className={Style.h1}>Login</h1>
                <Input email  onChange={handleChangeEmail} value={inputEmailValue}/>
                <Input password onChange={setInputPasswordValue} value={inputPasswordValue} />
                <div id="allBtns" className={Style.allBtns}>
                    <div id="buttons" className={Style.buttons}>
                        <Button success label="Login" onClick={onLogIn}/>
                        <Button second label="Signup" />
                        <Button normal label="Forgot Password?" />
                    </div>
                </div>
            </div>
    );
}

export default Login;
