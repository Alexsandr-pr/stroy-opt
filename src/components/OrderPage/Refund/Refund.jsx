import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'
import SaleBlock from '../SaleBlock'
import RefundLeft from './RefundLeft'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

const Refund = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4'> 
            <Breadcrumbs page={"Возврат"}/> 
            <div className="mb-5">
                <HeaderBlock title={"Возврат"}/>
            </div>
            <AsideParentPage
                left={
                    <RefundLeft/>
                }
                right={
                    <SaleBlock/>
                }
            />
        </div>
    )
}

export default Refund