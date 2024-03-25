import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import TabsButton from './TabsButton';
import { useState } from 'react';

const data = [
    {
        "text":"Характеристики",
        "type":"params",
    },
    {
        "text":"О товаре",
        "type":"info",
    },
    {
        "text":"Доставка и оплата",
        "type":"order",
    }
]





const TabsButtons = () => {

    const [param, setParam] = useState("params");
    const onChangeParam = (item) => setParam(item)
    

    return (
        <Swiper
            className='border-b border-b-[#EDF0F2] relative z-10 mb-8'
            spaceBetween={20}
            slidesPerView="auto"
        >
            {
                data.map((item) => {
                    return (
                        <SwiperSlide key={item.type} className='w-auto '>
                            <TabsButton param={param} onChangeParam={onChangeParam} {...item}/>
                        </SwiperSlide>

                    )
                })
            }
            
        </Swiper>
    )
}

export default TabsButtons