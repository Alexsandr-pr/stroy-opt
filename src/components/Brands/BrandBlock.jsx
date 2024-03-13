import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'
import SliderBrand from './SliderBrand'

const BrandBlock = () => {
    return (
        
        <div className='max-w-[1654px] mx-auto px-4 py-12'>
            <div className="mb-10 ">
                <HeaderBlock title={"Популярные бренды"}/>
            </div>
            <SliderBrand/>
        </div>
    )
}

export default BrandBlock;