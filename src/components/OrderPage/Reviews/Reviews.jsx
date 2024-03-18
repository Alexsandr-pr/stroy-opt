import React from 'react'
import SaleBlock from '../SaleBlock'
import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import ReviewsLeft from './ReviewsLeft'



const Reviews = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4'>  
            <div className="mb-5">
                <HeaderBlock title={"Отзывы"}/>
            </div>
            
            <AsideParentPage
                left={
                    <ReviewsLeft/>
                }
                right={
                    <SaleBlock/>
                }
            />
        </div>
    )
}

export default Reviews