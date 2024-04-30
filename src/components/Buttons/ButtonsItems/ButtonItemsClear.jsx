import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import ButtonCategoryClear from '../ButtonCategory/ButtonCategoryClear';

const ButtonItemsClear = ({data, idActive}) => {
    
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
                            <ButtonCategoryClear active={idActive === id}  {...item}/>
                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
        
    )
}

export default ButtonItemsClear