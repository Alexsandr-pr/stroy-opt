import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import TabsButton from './TabsButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeParamTabs } from '../../../store/cardReducer';

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

    const tabsParam = useSelector(state => state.card.typeParam)

    const dispatch = useDispatch();
    const onChangeTabs = (type) => dispatch(changeParamTabs(type)) 
    
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
                            <TabsButton param={tabsParam} cb={onChangeTabs} {...item}/>
                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>
    )
}

export default TabsButtons