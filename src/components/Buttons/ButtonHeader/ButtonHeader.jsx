import { useState } from "react"



const ButtonHeader = () => {

    const [active, setActive] = useState(false)

    return (
        <button
            onClick={() => setActive(prev => !prev)}
            className={` text-white flex items-center text-sm uppercase font-bold gap-2 sm:gap-4 duration-300 transition-all rounded-lg py-4 px-3 sm:px-7 ${active ?" bg-button" : " bg-blue"}`}>
            {
                active ? <BurgerActive/> : <BurgerNoActive/>
            }
            Каталог 
        </button>
    )
}

const BurgerActive = () => {
    return (
        <>
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 16 16" fill="#FFF">
                <path d="M15 1L1 15M1 1L15 15" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    )
}
const BurgerNoActive = () => {
    return (
        <>
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 8" fill="none">
                <path d="M0.667969 1H18.668M0.667969 7H18.668" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    )
}

export default ButtonHeader