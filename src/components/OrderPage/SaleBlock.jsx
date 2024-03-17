import CategorySaleBlock from 'components/Category/CategorySale/CategorySaleBlock'
import Spam from 'components/Spam/Spam'
import React from 'react'

const SaleBlock = () => {
    return (
        <div>
            <div className="mb-8 w-full">
                <CategorySaleBlock/>
            </div>
            <Spam/>
        </div>
    )
}

export default SaleBlock