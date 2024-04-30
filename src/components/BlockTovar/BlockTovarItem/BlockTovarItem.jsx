
import LabelBlock from 'components/LabelsItems/LabelBlock'

import { memo } from 'react'
import ButtonCard from 'components/Buttons/ButtonCard/ButtonCard'
import LikeIcon from 'components/Icon/LikeIcon'
import RaitIcon from 'components/Icon/RaitIcon'
import { Link } from 'react-router-dom'
import Article from '../blocks/Article'
import BlockPrice from '../blocks/BlockPrice'
import { useDispatch } from 'react-redux'
import CardAction from 'action/cardAction'

function propsCompare(prevProps, nextProps) {
    return prevProps.active === nextProps.active
}



const BlockTovarItem = memo(function(props) {

    const dispatch = useDispatch()

    const {
        title, 
        imgSrc,
        price,
        active, 
        _id,
        changeActive,
        button,
        code, 
        sale
    } = props;



    const onOpenCard = (id) => {
        console.log("request")
        dispatch( CardAction.getOneCardOnDb(id))
    }

    const type = {
        "sale": " text-red border-red",
        "orange": " text-orange border-orange border",
        "green": "  bg-green-label text-white"
    }

    return (
        <Link  to="card" className='flex flex-col gap-2.5 group   duration-300 transition-all rounded-lg'>
            <div onClick={() => onOpenCard(_id)} className="p-4 relative flex justify-center items-center">
                <img className='max-w-full' src={imgSrc} alt={title} />
                <div className="absolute left-0 top-0">
                    <LabelBlock styles={type.orange} text={"хит"} />
                </div>
            </div>
            <Article article={code}/>
            <h3 className='text-black  text-ellipsis text-sm sm:text-lg   font-medium leading-normal'>{title}</h3>
            <BlockPrice sale={sale} price={price} />
            <div className='flex justify-between gap-2.5'>
                <ButtonCard active={active} id={_id} changeActive={changeActive}/>
                {button}
                <div className="flex gap-2.5  md:pr-5">
                    <LikeIcon/>
                    <RaitIcon/>
                </div>
            </div>
        </Link>
    )
}, propsCompare)

export default BlockTovarItem
