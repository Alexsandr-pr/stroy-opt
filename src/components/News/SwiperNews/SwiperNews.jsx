import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
// Import Swiper styles
import 'swiper/css';
import NewsCard from '../NewsCard/NewsCard';
import ButtonSliderRight from '../../Buttons/ButtonsSlider/ButtonSliderRight';
import ButtonSliderLeft from '../../Buttons/ButtonsSlider/ButtonSliderLeft';

import image from "../NewsCard/img/1.webp";
import image2 from "../NewsCard/img/2.webp";
import image3 from "../NewsCard/img/3.webp";
import image4 from "../NewsCard/img/4.webp";
const data  = [
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image3,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image2,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image3,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    },
    {
        "title":"Масштабное обновление каталога инструментов",
        "text":"С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
        "imgLink": image4,
        "data": "5 Августа 2023",
        "id": uuidv4(),
    }
]




const SwiperNews = () => {

    return (
        <>
            <Swiper
                spaceBetween={20}
                breakpoints={{
                    420: {
                        slidesPerView:2
                    },
                    640: {
                        slidesPerView:3
                    },
                    1024: {
                        slidesPerView:4
                    }
                }}
            >
                {
                    data.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <NewsCard {...item}/>
                            </SwiperSlide>
                        )
                    })
                }
                <Buttons />
            </Swiper>
        </>
    );
};


const Buttons  = () => {

    const swiper = useSwiper();

    return (
        <div className="flex items-center gap-4 justify-center mt-7 pb-5 sm:pb-1">
            <ButtonSliderLeft cb={() => swiper.slidePrev()}/>
            <ButtonSliderRight cb={() => swiper.slideNext()}/>
        </div>
    )
}


export default SwiperNews;