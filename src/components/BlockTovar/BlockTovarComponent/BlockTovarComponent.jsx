import ButtonItems from 'components/Buttons/ButtonsItems/ButtonItems';
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React, { memo, useState } from 'react'

import BlockTovatItems from '../BlockTovarItems/BlockTovatItems';
import { useDispatch } from 'react-redux';
import cardAction from 'action/cardAction';


const data = [
    {
        "id": "",
        "title":"Все товары",
    },
    {
        "id": "660c727f8d83c7a45d8c7ab2",
        "title":"Инструменты",
        
    },
    {
        "id": "660c726e8d83c7a45d8c7aa8",
        "title":"Сантехника",
        
    },
    {
        "id": "660c727c8d83c7a45d8c7ab0",
        "title":"Для дома",
    },
    {
        "id": "660c72668d83c7a45d8c7aa2",
        "title":"Для сада",
    },
]

const BlockTovarComponent = memo(({title, category}) => {
    const [idActive, setState] = useState("")

    const dispatch = useDispatch()
    const changeArray = (id) => {
        setState(id)
        dispatch(cardAction.getCardsOnCategory(id));
    }

    return (
        <div className='max-w-[1654px] mx-auto px-4 md:mb-16 lg:mb-24'>
            <div className="mb-4 md:mb-8">
                <HeaderBlock title={title}/>
            </div>
            {
                category &&     <div className=" mb-6 md:mb-12">
                                    <ButtonItems idActive={idActive} changeArray={changeArray} data={data}/>
                                </div>
            }
           
            <BlockTovatItems/>
        </div>
    )
})

export default BlockTovarComponent