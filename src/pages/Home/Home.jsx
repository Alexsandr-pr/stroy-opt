import React from 'react'


import InfoPromo from 'components/BlockText/InfoImageText/InfoPromo'
import InfoBlockContentMain from 'components/InfoBlock/InfoBlockContentMain/InfoBlockContentMain'
import InfoBlockParent from 'components/InfoBlock/InfoBlockParent/InfoBlockParent'
import News from 'components/News/News/News'
import MainSliderHome from 'components/Home/MainSliderHome/MainSliderHome/MainSliderHome'
import BrandBlock from 'components/Brands/BrandBlock'
import CategoryBlock from 'components/Category/CategoryBlock/CategoryBlock'
import CategorySaleSlider from 'components/Category/CategorySale/CategorySaleSlider'



const Home = () => {
    return (
        <>
            <div className="max-w-[1654px] mx-auto px-4">
                <MainSliderHome/>
                <InfoPromo/>
                
            </div>
            <CategoryBlock/>
            
            <CategorySaleSlider/>
            <div className="bg-grey2">
                <BrandBlock/>
            </div>
            <InfoBlockParent>
                <InfoBlockContentMain/>
            </InfoBlockParent>
            <News/> 
            
        </>
    )
}

export default Home;