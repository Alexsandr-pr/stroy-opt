import React, { memo } from 'react'
import cart from "./img/cart.svg";

const ButtonCard = memo(({
    active,
    changeActive,
    id
}) => {

    return (
        active ?
        <button  className='text-blue flex py-2 px-4 text-base rounded-md font-medium border border-blue border-solid'>
            Добавлено
        </button> :

        <button onClick={() => changeActive(id)} className='py-2 px-4 flex text-base items-center gap-3 bg-blue rounded-md font-medium text-white transition-all duration-300 hover:bg-black'>
            <img src={cart} alt="Cart" />
            Купить
        </button>
    )
})

export default ButtonCard