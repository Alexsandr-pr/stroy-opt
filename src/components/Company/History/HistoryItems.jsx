import React from 'react'
import HistoryItem from './HistoryItem'
import BlockInfoItems from 'components/BlockInfoNumber/BlockInfoItems'

const data = [
    {
        "years": "2003",
        "title": "Компания ООО «Стройоптторг» была зарегистрирована в реестре и получила свидетельство о регистрации 1 октября 2003 года.",
        "data": [
            {
                "text":"Общая площадь земельного участка составляла",
                "textNumber":"10 000 м²."
            },
            {
                "text":"площадь складских помещений",
                "textNumber":"850 м²."
            },
            {
                "text":"численность сотрудников ",
                "textNumber":"10 человек."
            }
        ]
    },
    {
        "years": "2008",
        "title": "С годами компания динамично росла и развивалась и уже к 2008 г. мы достигли более высоких результатов:",
        "data": [
            {
                "text":"общая площадь базы составила",
                "textNumber":"58 000 м²"
            },
            {
                "text":"площадь складских помещений",
                "textNumber":"5 200 м²"
            },
            {
                "text":"численность коллектива возросла до",
                "textNumber":"300 человек"
            }
        ]
    },
    {
        "years": "2018",
        "title": "К своему 15-ти летнему юбилею компания расширила торговые площади до 17 805.3 м²",
        "data": [
            {
                "text":"Торговый центр №1 -",
                "textNumber":" 5 545 м²"
            },
            {
                "text":"Торговый центр№2- ",
                "textNumber":"3 951,2 м²"
            },
            {
                "text":"Складские помещения - ",
                "textNumber":"8 308,6 м²"
            }
        ]
    }
]




const HistoryItems = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10'>   
            {
                data.map((item, i) => {
                    return (
                        <HistoryItem key={i} {...item}/>
                    )
                })
            }
           
            <div className='relative flex flex-col px-6 sm:items-center py-9 border border-blue border-[3px] rounded-lg '>
                <div className=" text-blue text-[27px] font-bold text-left sm:text-center leading-none ">Сегодня</div>
                <BlockInfoItems styles={"grid grid-cols-1 m36:grid-cols-2 gap-12 md:gap-x-36 gap-y-0" }/>
            
            </div>
        </div>
    )
}

export default HistoryItems