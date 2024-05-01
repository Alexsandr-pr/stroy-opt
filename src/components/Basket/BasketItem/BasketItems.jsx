import React from 'react'
import BasketItem from './BasketItem'

const BasketItems = () => {
    return (
        <div className='md:border md:border-[#EDF0F2] rounded-lg'>
            <div className="py-4 border-b gap-4 hidden border-[#EDF0F2]  px-5 md:flex ">
                <div className="basis-[48%]">
                    <Title text={"Товар"}/>
                </div>
                <div className="basis-[16%]" >
                    <Title text={"Цена"}/>
                </div>
                <div className="basis-[22%]" >
                    <Title text={"Количество"}/>
                </div>
                <div className="basis-[14%]" >
                    <Title text={"Сумма"}/>
                </div>
            </div>
            <BasketItem/>
            <BasketItem/>
        </div>
    )
}

const Title = ({text}) => {
    return (
        <p className='text-[#45484A] text-sm font-bold'>{text}</p>
    )
}

export default BasketItems