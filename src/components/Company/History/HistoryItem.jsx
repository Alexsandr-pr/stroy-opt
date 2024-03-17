import ListItems from 'components/ListItems/ListItems'
import React from 'react'

const HistoryItem = ({
    years,
    title,
    data
}) => {
    return (
        <div className='relative flex flex-col px-6 py-9 border border-border-history border-[3px] rounded-lg '>
            <div className="absolute top-[-13px] text-blue text-[27px] font-bold  leading-none px-4 bg-white">{years}</div>
            <h3 className='text-base lg:text-xl font-medium text-main-title mb-4'>{title}</h3>
            <ListItems data={data}/>
        </div>
    ) 
}

export default HistoryItem