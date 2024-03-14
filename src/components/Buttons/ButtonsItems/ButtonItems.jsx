import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonCategory from '../ButtonCategory/ButtonCategory'

import 'swiper/css';

const ButtonItems = ({data}) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            simulateTouch={true}
            touchRatio={1}
            touchAngle={45}
            speed={300}
        >
            {
                data.map((item) => {
                    const {id} = item
                    return (
                        <SwiperSlide key={id} className='max-w-fit'> 
                            <ButtonCategory  {...item}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        
    )
}

export default ButtonItems