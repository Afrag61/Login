
const Button = () => {

    const Style = {
        loginBtn: 'w-24 h-10 rounded-md text-center text-lg text-gray-50 bg-green-500 hover:bg-green-700'
    }

    return (
        <button className={Style.loginBtn}>
            Login
        </button>
    );
}

export default Button;
