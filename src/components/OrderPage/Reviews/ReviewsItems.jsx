import React from 'react'
import ReviewsItem from './ReviewsItem'

const ReviewsItems = ({data}) => {
    return (
        <div className='flex flex-col gap-4 lg:gap-7'>
            {
                data.map((item, i) => {
                    return (
                        <ReviewsItem key={i} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default ReviewsItems