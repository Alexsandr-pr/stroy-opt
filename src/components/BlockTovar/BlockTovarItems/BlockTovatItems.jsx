import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { v4 as uuidv4 } from 'uuid';
import image1 from "./img/1.webp";
import image2 from "./img/2.webp";
import image3 from "./img/3.webp";
import image4 from "./img/4.webp";
import image5 from "./img/5.webp";
import image6 from "./img/6.webp";
import image7 from "./img/7.webp";
import image8 from "./img/8.webp";
import image9 from "./img/9.webp";
import BlockTovarItem from '../BlockTovarItem/BlockTovarItem';


import { memo, useState } from 'react';

const data = [
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image1,
        "active":true,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image2,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image3,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image4,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image5,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image6,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image7,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image8,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image9,
        "active":false,
        "id":uuidv4()
    },
]


const BlockTovatItems = memo(() => {

    const [post, setPost] = useState(data)

    const changeActive = (id) => {
        setPost(prev  => prev.map((item) => {
            if(item.id === id) {
                return {...item, active: true}
            }
            return item
        }))
    }

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
                post.map((item,i) => {
                        const {
                            title, 
                            imgSrc,
                            article,
                            price,
                            active, 
                            id,
                        } = item
                        return (
                            <SwiperSlide key={i} className='max-w-[230px] sm:max-w-fit'>
                                <BlockTovarItem 
                                    article={article} 
                                    title={title}
                                    price={price}
                                    imgSrc={imgSrc}
                                    active={active}
                                    id={id} changeActive={changeActive}/>
                            </SwiperSlide>
                        )
                    })
            }

        </Swiper>
    )
})




export default BlockTovatItems