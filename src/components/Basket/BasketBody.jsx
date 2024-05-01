import React from 'react'

import BasketItems from './BasketItem/BasketItems'
import FormBasket from './FormBasket/FormBasket'

const BasketBody = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-5'>
            <div className="basis-[69%]">
                <BasketItems/>
            </div>
            
            <div className="basis-[27%]">
                <FormBasket/>
            </div>
        </div>

    )
}

export default BasketBody