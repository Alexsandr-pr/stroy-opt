import React from 'react'
import SaleBlock from '../SaleBlock'
import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import ReviewsLeft from './ReviewsLeft'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'



const Reviews = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4'>  
            <Breadcrumbs page={"Отзывы"}/>
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