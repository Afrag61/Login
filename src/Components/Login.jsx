import Button from "./Button";
import Input from "./Input";

const Login = () => {

    const Style = {
        Login: 'w-96 h-96 flex flex-col items-center justify-center gap-7  bg-gray-50 rounded-2xl shadow-2xl p-1',
        h1: 'text-3xl font-extrabold font-mono text-blue-500 w-full text-center pb-4 border-b border-gray-300'
    }

    return (
            <div id="Login" className={Style.Login}>
                <h1 className={Style.h1}>Login</h1>
                <Input email />
                <Input password />
                <div id="buttons" className="w-full flex justify-center pt-6 border-t border-gray-300">
                    <Button />
                </div>
            </div>
    );
}

export default Login;
