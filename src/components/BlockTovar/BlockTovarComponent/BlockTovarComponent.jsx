import ButtonItems from 'components/Buttons/ButtonsItems/ButtonItems';
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React, { memo } from 'react'
import { v4 as uuidv4 } from 'uuid';
import BlockTovatItems from '../BlockTovarItems/BlockTovatItems';

const data = [
    {
        "id": uuidv4(),
        "title":"Все товары",
        "active":true,
    },
    {
        "id": uuidv4(),
        "title":"Инструменты",
        "active":false,
    },
    {
        "id": uuidv4(),
        "title":"Сантехника",
        "active":false,
    },
    {
        "id": uuidv4(),
        "title":"Для дома",
        "active":false,
    },
    {
        "id": uuidv4(),
        "title":"Для сада",
        "active":false,
    },
]

const BlockTovarComponent = memo(({title, category}) => {
    return (
        <div className='max-w-[1654px] mx-auto px-4 md:mb-16 lg:mb-24'>
            <div className="mb-4 md:mb-8">
                <HeaderBlock title={title}/>
            </div>
            {
                category &&     <div className=" mb-6 md:mb-12">
                                    <ButtonItems data={data}/>
                                </div>
            }
           
            <BlockTovatItems/>
        </div>
    )
})

export default BlockTovarComponent