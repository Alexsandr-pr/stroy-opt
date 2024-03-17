import React from 'react'

const WhyMeItem = ({img, title, text}) => {
    return (
        <div className='flex gap-4 items-start'>
            <img src={img} alt={title} />
            <div className="flex flex-col gap-3">
                <h3 className=' text-lg lg:text-xl font-medium leading-6 text-main'>{title}</h3>
                <p className='text-grey text-sm font-normal leading-6'>{text}</p>
            </div>
        </div>
    )
}

export default WhyMeItem