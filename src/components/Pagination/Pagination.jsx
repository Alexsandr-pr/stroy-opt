import React from 'react'
import { PaginationButtonLeft, PaginationButtonRight } from './PaginationButton'
import PaginationItem from './PaginationItem'

const Pagination = () => {
    return (
        <div className='flex items-center gap-2.5 '>
                <PaginationButtonLeft/>
                
                <PaginationItem i={'1'} active={true}/>
                <PaginationItem i={'2'}/>
                <PaginationButtonRight/>
        </div>
    )
}

export default Pagination