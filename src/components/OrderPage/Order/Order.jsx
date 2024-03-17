import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import React from 'react'
import SaleBlock from '../SaleBlock'
import OrderLeft from './OrderLeft'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'








const Order = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4'>  
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
        
        </div>
    )
}

export default Order