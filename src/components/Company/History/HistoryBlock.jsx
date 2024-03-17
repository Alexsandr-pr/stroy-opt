import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'
import HistoryItems from './HistoryItems'

const HistoryBlock = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4 py-20'>
            <div className="mb-10 sm:mb-8 lg:mb-16">
                <HeaderBlock styles={" text-center sm:texl-left"} title={"История ООО “Стройоптторг”"}/>
            </div>
            <HistoryItems/>
        </div>
    )
}

export default HistoryBlock