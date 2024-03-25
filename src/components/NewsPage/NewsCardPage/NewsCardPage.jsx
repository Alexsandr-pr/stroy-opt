import AsideParentPage from 'components/AsideParentPage/AsideParentPage'

import React from 'react'
import NewsCardPageLeft from './NewsCardPageLeft'
import SwiperNews from 'components/News/SwiperNews/SwiperNews'
import NewsPageContentRight from '../NewsPageContent/NewsPageContentRight'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

import image from "../../../assets/image-news.png"

import TitleMain from 'components/BlockText/TitleMain/TitleMain'

const dataItem = {
        "textShort":"Электродрель - это важный инструмент в арсенале любого домашнего мастера или профессионального строителя. Однако, перед тем как сделать свой выбор, важно учесть несколько ключевых аспектов, чтобы получить наилучшее соответствие вашим потребностям.",
        "img": image,
        "data": [
            {
                "title": "Тип электродрели",
                "dataText": [
                    {
                        "text": "Существует два основных типа электродрелей: с проводом и аккумуляторные. Электродрели с проводом обычно более мощные и подходят для интенсивных работ. Аккумуляторные дрели предлагают мобильность и удобство, идеально подходя для небольших задач и мест, где нет доступа к розетке."
                    },
                    {
                        "text": "Первое, на что следует обратить внимание, - это тип электродрели. Существует два основных типа: с проводом и аккумуляторные."
                    }
                ],
                "dataList": [
                    {
                        "text": "Электродрели с проводом: Они предоставляют стабильную мощность и подходят для интенсивных и продолжительных работ. Однако, они ограничены длиной провода и могут быть менее мобильными.",
                    },
                    {
                        "text": "Аккумуляторные дрели: Они обеспечивают большую мобильность и удобство. Подходят для небольших задач и мест, где нет доступа к электросети. Однако, важно следить за зарядом аккумулятора.",
                    }
                ]
            },
            {
                "title": "Мощность",
                "dataText": [
                    {
                        "text": "Мощность электродрели влияет на её производительность и способность справляться с различными материалами. Для легких работ по дому, таких как сверление отверстий в дереве или гипсокартоне, модель с невысокой мощностью подойдет. Для более тяжелых задач, включая сверление в бетоне или металле, рекомендуется выбрать более мощный вариант."
                    },
                ],
            },
            {
                "title": "Дополнительные функции",
                "dataText": [
                    {
                        "text": "Современные электродрели могут предлагать различные дополнительные функции, которые могут значительно облегчить работу:"
                    },
                ],
                "dataList": [
                    {
                        "text":'LED-подсветка: Обеспечивает хорошую видимость рабочей зоны, особенно в плохо освещенных местах.'
                    },
                    {
                        "text":'Уровень заряда аккумулятора: Важно для аккумуляторных моделей, чтобы всегда знать, сколько времени осталось до разряда.'
                    },
                    {
                        "text":'Блокировка шпинделя: Удобно при замене насадок или ключей.'
                    }
                ]
            },
            {
                "title": "Чтение отзывов и консультация",
                "dataText": [
                    {
                        "text": "При длительной работе вес электродрели может оказаться значимым. Выбирайте модель, которая удобно лежит в руке и не вызывает быстрое утомление. При выборе электродрели стоит доверять надежным брендам с хорошей репутацией. Это гарантирует высокое качество, надежность и долговечность инструмента. Определите свой бюджет заранее. Цены на электродрели могут варьироваться в широком диапазоне. Подбирайте модель, которая соответствует вашим финансовым возможностям."
                    },
                    {
                        "text": "Просмотрите отзывы других покупателей и получите консультацию у специалистов, если это возможно. Опыт других пользователей может помочь вам сделать более информированный выбор."
                    },
                    {
                        "text": "Выбор электродрели - это инвестиция в эффективность и качество вашей работы. Учитывайте вышеуказанные факторы, чтобы выбрать наилучший вариант, отвечающий вашим потребностям и ожиданиям."
                    },
                    
                ],
               
            }
        ]
    }

const NewsCardPage = () => {
    
    return (
        <div className='max-w-[1654px] mx-auto px-4'>
            <Breadcrumbs page={"Новости"}/>
            <AsideParentPage 
                left={
                    <NewsCardPageLeft dataArray={dataItem} childrenTop={
                        <div className="mb-7">
                            <TitleMain title={"Как выбрать электродрель: Практическое руководство для покупателей"}/>
                        </div>
                    }/>
                }
                right={<NewsPageContentRight/>}
            />
            
            <SwiperNews/>
        </div>
    )
}

export default NewsCardPage