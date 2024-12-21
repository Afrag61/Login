import Input from "./Input";

const Login = () => {

    const Style = {
        Login: 'w-96 h-96 flex flex-col items-center justify-evenly  bg-gray-50 rounded-2xl shadow-2xl p-1',
        h1: 'text-3xl font-extrabold font-mono text-blue-500 w-full text-center pb-10 border-b border-gray-300'
    }

    return (
            <div id="Login" className={Style.Login}>
                <h1 className={Style.h1}>Login</h1>
                <Input email />
                <Input password />
            </div>
    );
}

export default Login;
