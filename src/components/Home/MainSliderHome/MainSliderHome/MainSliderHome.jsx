import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ButtonSliderRight from 'components/Buttons/ButtonsSlider/ButtonSliderRight';
import MainSliderHomeCard from '../MainSliderHomeCard/MainSliderHomeCard';
import ButtonSliderLeft from 'components/Buttons/ButtonsSlider/ButtonSliderLeft';

import 'swiper/css';
import 'swiper/css/pagination';


import image1ds from "./img/image1-ds.webp"
import image2mb from "./img/image2-mb.webp"
import image2ds from "./img/image2-ds.webp"

const data  = [
    {
        "title" :"Электроинструмент для любых нужд",
        "text":"У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.",
        "imgDs": image1ds ,
        "imgMb":  image2mb
    },
    {
        "title" :"Электроинструмент для любых нужд",
        "text":"У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.",
        "imgDs":image2ds ,
        "imgMb": image2mb 
    },
    {
        "title" :"Электроинструмент для любых нужд",
        "text":"У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.",
        "imgDs":image2ds ,
        "imgMb": image2mb 
    },
    {
        "title" :"Электроинструмент для любых нужд",
        "text":"У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих товаров.",
        "imgDs":image1ds ,
        "imgMb": image2mb 
    }
]

const MainSliderHome = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[ Pagination]}
            pagination={{ clickable: true }}
        >
            {data.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <MainSliderHomeCard {...item}/>
                    </SwiperSlide>
                )
            })}
            <div className="hidden md:block">
                <Buttons/>
            </div>
        </Swiper>
    )
}

const Buttons  = () => {

    const swiper = useSwiper();
    return (
        <>
            <div className="absolute z-30 top-1/2 left-2 mt-[-20px]">
                <ButtonSliderLeft cb={() => swiper.slidePrev()}/>
            </div>
            <div className="absolute z-30 top-1/2 right-2 mt-[-20px]">
                <ButtonSliderRight cb={() => swiper.slideNext()}/>
            </div>
        </>      
    )
}

export default MainSliderHome