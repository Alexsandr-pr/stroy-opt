
import LabelBlock from 'components/LabelsItems/LabelBlock'

import { memo } from 'react'
import ButtonCard from 'components/Buttons/ButtonCard/ButtonCard'
import LikeIcon from 'components/Icon/LikeIcon'
import RaitIcon from 'components/Icon/RaitIcon'

function propsCompare(prevProps, nextProps) {
    return prevProps.active === nextProps.active
}



const BlockTovarItem = memo(function(props) {
    const {
        title, 
        imgSrc,
        article,
        price,
        active, 
        id,
        changeActive,
    } = props;

    const type = {
        "sale": " text-red border-red",
        "orange": " text-orange border-orange border",
        "green": "  bg-green-label text-white"
    }

    return (
        <article className='flex flex-col gap-2.5 group   duration-300 transition-all rounded-lg'>
            <div className="p-4 relative flex justify-center items-center">
                <img className='max-w-full' src={imgSrc} alt={title} />
                <div className="absolute left-0 top-0">
                    <LabelBlock styles={type.orange} text={"хит"} />
                </div>
            </div>
            <p className='text-[13px] text-article font-normal '>Артикул: {article}</p>
            <h3 className='text-black  text-ellipsis text-base sm:text-lg h-20  font-medium leading-normal'>{title}</h3>
            <div className='text-price font-medium text-xl leading-none flex gap-2 items-center'>
                <p className='text-grey-sale font-normal text-[15px] leading-6 line-through'>15999</p> 
                <p>{price}</p>
                <LabelBlock text={"-15%"} styles={type.green}/>
            </div>
            <div className='flex justify-between gap-2.5'>
                <ButtonCard active={active} id={id} changeActive={changeActive}/>
                <div className="flex gap-2.5  md:pr-5">
                    <LikeIcon/>
                    <RaitIcon/>
                </div>
            </div>
        </article>
    )
}, propsCompare)

export default BlockTovarItem