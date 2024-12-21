import { useState } from "react"

const Input = ({password, email}) => {
    const [inputValue, setInputValue] = useState('')

    let label = ''
    let inputType = 'text'
    let isLabel = false

    if(password){
        isLabel = true
        label = 'Password'
        inputType = 'password'
    }else if(email){
        isLabel = true
        label = 'E-mail'
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
            { isLabel && <label className={Style.label}>{label}</label>}
            <input placeholder={label} value={inputValue} onChange={(e) => handleChange(e.target.value)} type={inputType} className={Style.input} />
        </div>
    );
}

export default Input;
