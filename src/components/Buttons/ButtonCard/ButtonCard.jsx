import React, { memo } from 'react'
import cart from "./img/cart.svg";
import useMediaQuery from 'hooks/useMediaQuery';

const ButtonCard = memo(({
    active,
    changeActive,
    id
}) => {

    const query = useMediaQuery("max-width:640px")


    return (
        active ?
        <button  className='text-blue flex py-2 px-2 m46:px-4 items-center justify-center text-base rounded-md font-medium border border-blue border-solid'>
            {query ? "Добавлено" : <Icon/>}
            
        </button> :

        <button onClick={() => changeActive(id)} className='py-2 px-2 m46:px-4 flex text-base items-center gap-3 bg-blue rounded-md font-medium text-white transition-all duration-300 hover:bg-black'>
            <img src={cart} alt="Cart" />
            {query ? "Купить" : null}
        </button>
    )
})



const Icon = () => {
    return (
        <>
        <svg className='block' xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 12 9" fill="none">
            <path d="M1.5 4.5L4.5 7.5L10.5 1.5" stroke="#186FD4" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
        </>
    )
}
export default ButtonCard