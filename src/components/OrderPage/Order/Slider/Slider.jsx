
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import image1 from "./img/1.webp";
import image2 from "./img/2.webp";
import image3 from "./img/3.webp";
import image4 from "./img/4.webp";
import ButtonSliderLeft from 'components/Buttons/ButtonsSlider/ButtonSliderLeft';
import ButtonSliderRight from 'components/Buttons/ButtonsSlider/ButtonSliderRight';


const data = [
    {
        "img": image1
    },
    {
        "img": image2
    },
    {
        "img": image3
    },
    {
        "img": image4
    },
    {
        "img": image4
    }
]


const Slider = () => {
    return (
        <Swiper
            className='pb-12'
            spaceBetween={20}
            breakpoints={{
                230: {
                    slidesPerView:1
                },
                560: {
                    slidesPerView:2
                },
                991.98: {
                    slidesPerView:3
                },
                1200:{
                    slidesPerView:4
                }
            }}
        >
            {
                data.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className='relative'>
                            <img className='w-full h-full object-cover rounded-lg' src={item.img} alt="image" />
                        </SwiperSlide>
                    )
                })
            }
        <Buttons/>
        
        </Swiper>
    )
}


const Buttons  = () => {

    const swiper = useSwiper();
    return (
        <>
            <div className="absolute z-30 bottom-[2px] sm:top-1/2 left-2 mt-[-20px]">
                <ButtonSliderLeft cb={() => swiper.slidePrev()}/>
            </div>
            <div className="absolute bottom-[2px] z-30 sm:top-1/2 right-2 mt-[-20px]">
                <ButtonSliderRight cb={() => swiper.slideNext()}/>
            </div>
        </>      
    )
}




export default Slider