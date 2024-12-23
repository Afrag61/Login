
const Button = ({success, primary, second, normal, danger, gray, label, onClick}) => {

    let styleClass
    const Style = {
        success: 'w-24 h-10 rounded-md text-center font-mono text-lg text-gray-50 bg-green-500 hover:bg-green-700',
        primary: 'w-24 h-10 rounded-md text-center font-mono text-lg text-gray-50 bg-blue-500 hover:bg-blue-700',
        second: 'w-24 h-10 rounded-md font-mono border border-blue-700 text-center text-lg text-blue-700 bg-transparent hover:bg-blue-700 hover:text-gray-50',
        danger: 'w-24 h-10 rounded-md text-center font-mono text-lg text-gray-50 bg-red-500 hover:bg-red-700',
        gray: 'w-24 h-10 rounded-md text-center font-mono text-lg bg-slate-500 text-gray-50 hover:bg-gray-700',
        normal: 'w-28 h-7 rounded-md text-center text-sm text-blue-700 underline hover:text-violet-900'
    }

    return (
        <>
            {success && <button className={Style.success} onClick={onClick}>{label}</button>}
            {primary && <button className={Style.primary} onClick={onClick}>{label}</button>}
            {second && <button className={Style.second} onClick={onClick}>{label}</button>}
            {danger && <button className={Style.danger} onClick={onClick}>{label}</button>}
            {gray && <button className={Style.gray} onClick={onClick}>{label}</button>}
            {normal && <button className={Style.normal} onClick={onClick}>{label}</button>}
        </>
    );
}

export default Button;
