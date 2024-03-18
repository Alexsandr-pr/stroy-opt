import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const ReviewsSlider = ({data}) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            >
            {
                data.map((item, i) => {
                    return (
                        <SwiperSlide key={i}  className='relative max-w-[197px]'>
                            <img src={item.img} width="197" height={111} alt="image" className="w-full h-full rounded-lg object-contain" />
                        </SwiperSlide>
                    )
                })    
            }
        </Swiper>
    )
}

export default ReviewsSlider