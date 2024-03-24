import ButtonItems from 'components/Buttons/ButtonsItems/ButtonItems'
import React from 'react'
import ReviewsItems from './ReviewsItems'
import Pagination from 'components/Pagination/Pagination'
import { v4 as uuidv4 } from 'uuid';
const dataButtons = [
    {
        "active": true,
        "title": "Сначала новые",
        "id":uuidv4()
    },
    {
        "active": false,
        "title": "Сначала старые",
        "id":uuidv4()
    }
]

import image1 from "./img/1.webp"
import image2 from "./img/2.webp"
import image3 from "./img/3.webp"
import image4 from "./img/4.webp"
import image5 from "./img/5.webp"
import FormReview from 'components/Forms/FormReview/FormReview';

const data = [
    {
        "name":"Оксана Гончарова",
        "date": Date.now(),
        "text":"Просто ШИКАРНЕЙШИЙ магазин! Огромный ассортимент, демократичные цены, большая парковка, персонал-высшей квалификации (от работников склада до руководства! Надёжный, ответственный и порядочный партнёр",
    },
    {
        "name":"Шерифат Акбаева",
        "date": Date.now(),
        "text":"Была не раз, рекомендую",
    },
    {
        "name":"Шерифат Акбаева",
        "date": Date.now(),
        "text":"Большой выбор товаров, вежливый персонал, доступный ценовой сегмент на стройматериалы, удобное месторасположение, парковка.",
    },
    {
        "name":"Евгений",
        "date": Date.now(),
        "text":"Всегда всё нахожу здесь. Ассортимент большой. Удобно расположен. Есть доставка. Есть система скидок по карте. Есть грузчики, которые всегда помогут всё погрузить.",
        "imgData": [
            {
                "img":image1
            },
            {
                "img":image2
            },
        ]
    },
    {
        "name":"Василий",
        "date": Date.now(),
        "text":"Очень рад, что наткнулся на этот интернет-магазин строительных материалов! У них огромный выбор товаров, и цены приемлемые. Заказывал здесь материалы для ремонта в доме, и доставка была быстрой и без каких-либо проблем. К тому же, клиентская поддержка отвечает оперативно на все вопросы. Определенно буду советовать этот магазин друзьям и снова воспользуюсь его услугами.",
        "imgData": [
            {
                "img":image3
            },
            {
                "img":image4
            },
            {
                "img":image5
            }
        ]
    },
    {
        "name":"Марина",
        "date": Date.now(),
        "text":"Большой выбор товаров, вежливый персонал, доступный ценовой сегмент на стройматериалы, удобное месторасположение, парковка.",
    },
    {
        "name":"Иван",
        "date": Date.now(),
        "text":"Как профессиональный строитель, я всегда ищу надежные поставщики строительных материалов, и этот магазин – один из них. Здесь есть всё, что нужно для стройки: от кирпичей и цемента до сантехники и электроинструментов. Качество товаров всегда на высоте, и цены конкурентоспособные. Доставка всегда приходит вовремя, что важно для меня и моих клиентов. С уверенностью рекомендую этот магазин всем, кто занимается строительством.",
    },
    {
        "name":"Евгений",
        "date": Date.now(),
        "text":"Мой опыт работы с интернет-магазином строительных материалов был удивительным. Они предлагают не только широкий выбор стандартных стройматериалов, но и креативные решения для дизайна интерьера. Я нашел здесь уникальные отделочные материалы, которые сделали мои проекты уникальными. Оформление заказа простое, и доставка была очень быстрой. Этот магазин действительно помог мне воплотить свои дизайнерские идеи в жизнь.",
    },
    {
        "name":"Евгений",
        "date": Date.now(),
        "text":"Для меня, как начинающего строителя, важно иметь доступ к надежным поставкам строительных материалов. Этот интернет-магазин помог мне не только выбрать правильные материалы, но и дал советы по их применению. Цены очень доступные, и даже при моем ограниченном бюджете я смог найти всё необходимое. Доставка была быстрой и без проблем. Спасибо этому магазину за поддержку начинающих строителей!",
    }
]





const ReviewsLeft = () => {
    return (
        <div>
            <div className=" mb-5 lg:mb-10">
                <ButtonItems data={dataButtons}/>
            </div>
            <div className="mb-12 md:mb-16">
                <ReviewsItems data={data}/>
            </div>
            <div className="flex justify-center mb-12"><Pagination/></div>
            <div className="my-16">
                <FormReview/>
            </div>
        </div>
    )
}

export default ReviewsLeft