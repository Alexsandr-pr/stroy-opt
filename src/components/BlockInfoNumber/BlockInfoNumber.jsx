import React from 'react'

const BlockInfoNumber = ({title,text}) => {
    return (
        <div className='flex flex-col gap-2 py-4'>
            <p className='text-blue2 font-medium text-xl sm:text-[26px]'>{title}</p>
            <p className='text-grey3 text-sm'>{text}</p>
        </div>
    )
}

export default BlockInfoNumber