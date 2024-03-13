import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CategoryItem from "../CategoryItem/CategoryItem"
import useMediaQuery from 'hooks/useMediaQuery';

import image1 from "../img/1.webp"
import image2 from "../img/2.webp"
import image3 from "../img/3.webp"
import image4 from "../img/4.webp"
import image5 from "../img/5.webp"
import image6 from "../img/6.webp"
import image7 from "../img/7.webp"
import image8 from "../img/8.webp"



const data = [
    {
        "text":"Сантехника",
        "imgSrc": image1 ,
    },
    {
        "text":"Отделочные материалы",
        "imgSrc": image2 ,
    },
    {
        "text":"Электротовары",
        "imgSrc": image3,
    },
    {
        "text":"Инструменты",
        "imgSrc": image4,
    },
    {
        "text":"Столярные  изделия",
        "imgSrc": image5, 
    },
    {
        "text":"Общестроительные материалы",
        "imgSrc": image6 , 
    },
    {
        "text":"Все для сауны и бани",
        "imgSrc": image7,
    },
    {
        "text":"Перейти в каталог",
        "imgSrc": image8,
    },
]


const CategoryBlock = () => {
    const mb = useMediaQuery('(max-width:640px)');

    if (mb) {
        
        return (
            <div className="grid grid-cols-1 m36:grid-cols-2 gap-[15px] max-w-[1654px] mx-auto px-4 mb-6">
                {
                    data.map((item, i) => {
                        return (
                            <div key={i} className='h-auto flex items-center justify-center flex-col pt-5 py-5 sm:pb-7 px-4 sm:px-6  bg-white4 rounded-2xl '> 
                                <CategoryItem  {...item}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="max-w-[1654px] mx-auto px-4 mb-6">
                <Swiper      
                    slidesPerView='auto'
                    breakpoints={{
                        120: {
                            spaceBetween:15
                        },
                        640: {
                            spaceBetween: 20
                        }
                    }}
                >
                    {
                        data.map((item, i) => {
                            return (
                                <SwiperSlide key={i} className='w-auto sm:w-[185px] h-auto flex items-center justify-center flex-col pt-5 pb-7 px-6  bg-white4 rounded-2xl '> 
                                    <CategoryItem  {...item}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        )
    }
}





export default CategoryBlock