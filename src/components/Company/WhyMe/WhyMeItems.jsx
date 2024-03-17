import React from 'react'


import image1 from "./img/1.svg";

import image2 from "./img/2.svg";

import image3 from "./img/3.svg";

import image4 from "./img/4.svg";
import WhyMeItem from './WhyMeItem';
import HeaderBlock from 'components/HeaderBlock/HeaderBlock';

const data = [
    {
        "title":"Оплата любым удобным способом",
        "text":"Выбирайте любой способ оплаты для максимального комфорта при покупках у нас.",
        "img": image1,
    },
    {
        "title":"Большой выбор товаров в каталоге",
        "text":"Наш каталог насыщен разнообразными товарами, чтобы удовлетворить ваши потребности.",
        "img": image2,
    },
    {
        "title":"Осуществляем быструю доставку",
        "text":"Мы оперативно доставим ваш заказ, чтобы вы могли насладиться покупкой как можно скорее.",
        "img": image3,
    },
    {
        "title":"Делаем скидки на крупные покупки",
        "text":"Наша система скидок работает для вашей выгоды, чем больше купили - больше сэкономили.",
        "img": image4,
    }
]

const WhyMeItems = () => {
    return (
        <div className="mt-8 max-w-[1654px] mx-auto px-4">
            <div className="mb-6 sm:mb-8 lg:mb-12">
                <HeaderBlock title={"Почему именно мы"} />
            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 gap-y-6 lg:grid-cols-4 gap-x-10 lg:gap-5 xl:gap-12 justify-between'>
                {
                    data.map((item, i) => {
                        return (
                            <WhyMeItem key={i} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WhyMeItems