import React from 'react'
import ButtonCategory from "../../Buttons/ButtonCategory/ButtonCategory";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import SwiperNews from '../SwiperNews/SwiperNews';

const News = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4 '>
            <div className="my-12 sm:my-16 lg:my-24">
                <div className="mb-6 sm:mb-8">
                    <HeaderBlock title={"Последние новости"} >
                        <div className="hidden sm:block">
                            <ButtonCategory title={"Больше новостей"} active={true}/>
                        </div>
                    </HeaderBlock>
                </div>
                <SwiperNews/>
                <div className="flex justify-center sm:hidden">
                    <ButtonCategory title={"Больше новостей"} active={true}/>
                </div>
            </div>
        </div>
    )
}

export default News