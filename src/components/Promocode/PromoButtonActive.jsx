import React from 'react'

const PromoButtonActive = ({text}) => {
    return (
        <button className='disabled:opacity-30 py-5 px-7 w-full rounded-lg text-blue font-bold items-center leading-tight  text-sm bg-[#F6F8FB] '>
            {text}
        </button>
    )
}

export default PromoButtonActive