import { Swiper, SwiperSlide } from 'swiper/react';
import CategorySaleItem from "./CategorySaleItem"


import 'swiper/css';

import image1 from "./img/1.webp"
import image2 from "./img/2.webp"
import image3 from "./img/3.webp"
import image4 from "./img/4.webp"

const data = [
    {
        "title":"Метизные изделия",
        "sale":"до -15%",
        "imgSrc":image1 
    },
    {
        "title":"Лакокрасочные материалы",
        "sale":"до -30%",
        "imgSrc":image2 
    },
    {
        "title":"Напольные покрытия",
        "sale":"до -25%",
        "imgSrc":image3 
    },
    {
        "title":"Все для отоплления",
        "sale":"до -30%",
        "imgSrc":image4
    }
]


const CategorySaleSlider = () => {
    return (
        <div className="max-w-[1654px] mx-auto px-4 mb-11">
            <Swiper
            className='pt-2 sm:pt-6 ' 
                
                slidesPerView="auto"
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
                            return(
                                <SwiperSlide key={i} className='max-w-[390px]'>
                                    <CategorySaleItem {...item}/>
                                </SwiperSlide>
                            )
                        })
                    }
            
            </Swiper>
        </div>
        
    )
}

export default CategorySaleSlider