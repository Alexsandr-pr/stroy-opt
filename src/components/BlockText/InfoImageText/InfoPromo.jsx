import React from 'react'


import image1 from "./img/1.svg"
import image2 from "./img/2.svg"
import image3 from "./img/3.svg"
import image4 from "./img/4.svg"
import InfoImageText from './InfoImageText'

const data = [
    {
        "img":image1,
        "text": "Оплата любым удобным способом"
    },
    {
        "img":image2,
        "text": "Большой выбор товаров в каталоге"
    },
    {
        "img":image3,
        "text": "Осуществляем быструю доставку"
    },
    {
        "img":image4,
        "text": "Делаем скидки на крупные покупки"
    },
]

const InfoPromo = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 justify-center  items-center gap-x-3 lg:gap-5 gap-y-3 my-8 sm:my-12'>
            {
                data.map((item,i) => {
                    return (
                        <InfoImageText key={i} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default InfoPromo