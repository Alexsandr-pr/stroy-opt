import React from 'react'

const NumberItem = ({tel, text}) => {
    return (
        <div className=' p-5 lg:py-7 lg:px-6 flex flex-col gap-4 border-[#F2F4F6] border rounded-lg '>
            <p className='text-[#494D52] text-[15px] font-normal' >{text}</p>
            <a href={`tel:${tel}`} className='text-[#2F3134] text-lg font-medium '>{tel}</a>
        </div>
    )
}

export default NumberItem