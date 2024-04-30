import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import BlockTovarItem from '../BlockTovarItem/BlockTovarItem';


import { memo } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../../../config';



const BlockTovatItems = memo(() => {

    const cards = useSelector(store => store.card.cardsCategory)
/*
    const changeActive = (id) => {
        setPost(prev  => prev.map((item) => {
            if(item.id === id) {
                return {...item, active: true}
            }
            return item
        }))
    }
*/
    return (
        <Swiper
            loop={true}
            spaceBetween={15}
            breakpoints={{
                120: {
                    slidesPerView:"auto"
                },
                540: {
                    slidesPerView:2
                },
                768: {
                    slidesPerView:3
                },
                1024: {
                    slidesPerView:4
                },
                1280: {
                    slidesPerView:5
                }
            }}
        >

            {
                cards.map((item,i) => {
                        const {
                            images,
                            _id,

                        } = item
                        const imagePath = `${API_URL}/` + images[2]
                        return (
                            <SwiperSlide key={i} className='max-w-[230px] sm:max-w-fit'>
                                <BlockTovarItem 
                                    imgSrc={imagePath}
                                    id={_id}
                                    {...item} 
                                    />
                            </SwiperSlide>
                        )
                    })
            }

        </Swiper>
    )
})




export default BlockTovatItems