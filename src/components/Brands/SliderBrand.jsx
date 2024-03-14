import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Brands from './Brands';
// Import Swiper styles
import 'swiper/css';

import image1 from "./img/image1.webp";
import image2 from "./img/image2.webp";
import image3 from "./img/image3.webp";
import image4 from "./img/image4.webp";
import image5 from "./img/image5.webp";
import image6 from "./img/image6.webp";
import image7 from "./img/image7.webp";


const data = [
    { 
        "imgSrc": image1
    },
    { 
        "imgSrc": image2
    },
    { 
        "imgSrc": image3
    },
    { 
        "imgSrc": image4
    },
    { 
        "imgSrc": image5
    },
    { 
        "imgSrc": image6
    },
    { 
        "imgSrc": image7
    }
]


const SliderBrand = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView="auto"
        >
            {
                data.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className='max-w-[253px] '>
                            <Brands {...item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default SliderBrand;