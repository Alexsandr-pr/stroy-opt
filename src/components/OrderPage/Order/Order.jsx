import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import React from 'react'
import SaleBlock from '../SaleBlock'
import OrderLeft from './OrderLeft'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import Slider from './Slider/Slider'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'








const Order = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4'>  
            <Breadcrumbs page={"Доставка"}/>
            <div className="mb-5">
                <HeaderBlock title={"Доставка"}/>
            </div>
            <AsideParentPage
                left={
                    <OrderLeft/>
                }
                right={
                    <SaleBlock/>
                }
            />
            <div className="mt-14 mb-28">
                <Slider/>
            </div>
        </div>
    )
}

export default Order