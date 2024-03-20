import React from 'react'

const RegionsItem = ({city, tel, email}) => {
    return (
        <div className='flex flex-col gap-2'>
            <p className='text-[#494D52] text-[15px] font-normal '>{city}</p>
            <a href={`tel:${tel}`} className='text-lg text-[#2F3134] font-medium'>{tel}</a>
            <a href={`mailto:${email}` } className='text-blue text-[15px] font-normal'>{email}</a>
        </div>
    )
}

export default RegionsItem