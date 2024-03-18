import React from 'react'
import ReviewsSlider from './ReviewsSlider'

const ReviewsItem = ({text, name, date, imgData}) => {
    
    return (
        <div className=' p-5 md:p-6 border border-[#EDF0F2] rounded-lg '>
            <h3 className='text-xl font-medium leading-tight text-main-title '>{name}</h3>
            <p className="text-date text-[15px] font-normal leading-relaxed mb-2.5">{date}</p>
            <p className='text-main-title mb-2.5 text-base font-normal leading-relaxed'>{text}</p>
            {imgData && <ReviewsSlider data={imgData}/>}
        </div>
    )
}

export default ReviewsItem