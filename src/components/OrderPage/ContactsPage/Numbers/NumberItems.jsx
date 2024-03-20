import React from 'react'
import NumberItem from './NumberItem'

const data = [
    {
        "text":"Генеральный директор:",
        "tel":"0996798567"
    },
    {
        "text":"Отдел снабжения:",
        "tel":"0996798567"
    },
    {
        "text":"Отдел сбыта: ",
        "tel":"0996798567"
    },
    {
        "text":"Юридический отдел:",
        "tel":"0996798567"
    },
    {
        "text":"Бухгалтерия:",
        "tel":"0996798567"
    },
    {
        "text":"Отдел доставки:",
        "tel":"0996798567"
    },
    {
        "text":"Кредитный отдел:",
        "tel":"0996798567"
    },
    {
        "text":"Отдел кадров:",
        "tel":"0996798567"
    }
]



const NumberItems = () => {
    return (
        <div className='grid grid-cols-1 m46:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                data.map((item, i) => {
                    return (
                        <NumberItem key={i} {...item} />
                    )
                })
            }
        </div>
    )
}

export default NumberItems