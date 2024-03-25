import React from 'react'


import InfoPromo from 'components/BlockText/InfoImageText/InfoPromo'
import InfoBlockContentMain from 'components/InfoBlock/InfoBlockContentMain/InfoBlockContentMain'
import InfoBlockParent from 'components/InfoBlock/InfoBlockParent/InfoBlockParent'
import News from 'components/News/News/News'
import MainSliderHome from 'components/Home/MainSliderHome/MainSliderHome/MainSliderHome'
import BrandBlock from 'components/Brands/BrandBlock'
import CategoryBlock from 'components/Category/CategoryBlock/CategoryBlock'
import CategorySaleSlider from 'components/Category/CategorySale/CategorySaleSlider'
import BlockTovarComponent from 'components/BlockTovar/BlockTovarComponent/BlockTovarComponent'



const Home = () => {
    return (
        <>
            <div className="max-w-[1654px] mx-auto px-4">
                <MainSliderHome/>
                <InfoPromo/>
                
            </div>
            <CategoryBlock/>
            <CategorySaleSlider/>

            <BlockTovarComponent title={"Хиты продаж"} category={true}/>
            <div className="bg-grey2">
                <BrandBlock/>
            </div>
            <BlockTovarComponent title={"Лучшие предложения"} category={true}/>
            <InfoBlockParent>
                <InfoBlockContentMain/>
            </InfoBlockParent>
            <News/> 
            
        </>
    )
}

export default Home;