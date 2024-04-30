import React from 'react'
import { PaginationButtonLeft, PaginationButtonRight } from './PaginationButton'
import PaginationItem from './PaginationItem'

const Pagination = ({cbPrev, cbNext, postsLenght, countriesPerPage, activePage, onChangePage}) => {

    const pageNumbers = [];
    for(let i = 1; i < Math.ceil(postsLenght/countriesPerPage) + 1; i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className='flex items-center gap-2.5 '>
                <PaginationButtonLeft/>
                {
                    pageNumbers.map(item => {
                        return (
                            <PaginationItem onChangePage={onChangePage} key={item} active={item === activePage} i={item}/>
                        )
                    })
                }
                <PaginationButtonRight/>
        </div>
    )
}

export default Pagination