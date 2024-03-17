import React from 'react'

const ListItems = ({data}) => {
    return (
        <ul className='flex flex-col gap-4 '>
            {
                data.map((item, i) => {
                    const {text, textNumber} = item;
                    return (
                        <li key={i} className='relative '>
                            <p className='text-main-title pl-3 font-normal leading-7 relative after:content-[""] after:w-[5px] after:h-[5px] after:bg-red after:absolute after:rounded-full after:left-0 after:top-1/2 after:mt-[-2.5px]'> {text} <span className='font-bold'>{textNumber}</span></p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListItems