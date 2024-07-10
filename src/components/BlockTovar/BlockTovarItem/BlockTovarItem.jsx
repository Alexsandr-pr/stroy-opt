
import LabelBlock from 'components/LabelsItems/LabelBlock'

import { memo, useState } from 'react'
import ButtonCard from 'components/Buttons/ButtonCard/ButtonCard'
import LikeIcon from 'components/Icon/LikeIcon'
import RaitIcon from 'components/Icon/RaitIcon'
import { Link } from 'react-router-dom'
import Article from '../blocks/Article'
import BlockPrice from '../blocks/BlockPrice'
import { useDispatch, useSelector } from 'react-redux'
import CardAction from 'action/cardAction'
import basketAction from 'action/basketAction'


function propsCompare(prevProps, nextProps) {
    return prevProps.active === nextProps.active
}

const BlockTovarItem = memo(function(props) {

    const dispatch = useDispatch()
    const basket = useSelector(store => store.basket.basket)
    
    const {
        title, 
        imgSrc, 
        price, 
        _id,
        button,
        code, 
        sale
    } = props;

    const quantity = 1; 
    const onOpenCard = (id) => {
        dispatch( CardAction.getOneCardOnDb(id))
    }

    const type = {
        "sale": " text-red border-red",
        "orange": " text-orange border-orange border",
        "green": "  bg-green-label text-white"
    }
    
    const onAddCardToBasket = (id, quantity) => {
        dispatch(basketAction.addCardBasket(id, quantity))
    }

    return (
        <div  className='flex flex-col gap-2.5 group   duration-300 transition-all rounded-lg'>
            <Link to="/card" onClick={() => onOpenCard(_id)} className="p-4 relative flex justify-center items-center">
                <img className='max-w-full' src={imgSrc} alt={title} />
                <div className="absolute left-0 top-0">
                    <LabelBlock styles={type.orange} text={"хит"} />
                </div>
            </Link>
            <Article article={code}/>
            <h3 className='text-black  text-ellipsis text-sm sm:text-lg   font-medium leading-normal'>{title}</h3>
            <BlockPrice sale={sale} price={price} />
            <div className='flex justify-between gap-2.5'>
                <ButtonCard  cb={() => onAddCardToBasket(_id, quantity)}  active={basket.some(item => item.id === _id)} />
                {button}
                <div className="flex gap-2.5  md:pr-5">
                    <LikeIcon/>
                    <RaitIcon/>
                </div>
            </div>
        </div>
    )
}, propsCompare)

export default BlockTovarItem
