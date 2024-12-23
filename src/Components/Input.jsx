import { useState } from "react"

const Input = ({password, email, label, placeholder}) => {
    const [inputValue, setInputValue] = useState('')

    let inputType = 'text'

    if(password){
        {label ? undefined : label = 'Password'}
        inputType = 'password'
    }else if(email){
        {label ? undefined : label = 'E-mail'}
        inputType = 'email'
    }

    const handleChange = (value) => {
        setInputValue(value)
    }

    const Style = {
        AllInput:'w-full flex flex-col gap-2',
        label: 'text-center text-xl font-semibold font-mono text-blue-500',
        input:'font-mono h-10 rounded-sm p-2 bg-gray-200 border-b-2 border-blue-300 focus:border-blue-500 focus:outline-none'
    }

    return (
        <div id="AllInput" className={Style.AllInput}>
            { label && <label className={Style.label}>{label}</label>}
            <input placeholder={!placeholder ? label : placeholder} value={inputValue} onChange={(e) => handleChange(e.target.value)} type={inputType} className={Style.input} />
        </div>
    );
}

export default Input;
