import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonCategory from '../ButtonCategory/ButtonCategory'

import 'swiper/css';
import { useEffect } from 'react';

const ButtonItems = ({data, changeArray, idActive}) => {


    useEffect(() => {
        console.log(idActive)
    }, [idActive])

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
                            <ButtonCategory active={idActive === id} cb={() => changeArray(id)} {...item}/>
                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
        
    )
}

export default ButtonItems