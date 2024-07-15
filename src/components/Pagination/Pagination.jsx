import React from 'react'
import { PaginationButtonLeft, PaginationButtonRight } from './PaginationButton'
import PaginationItem from './PaginationItem'

const Pagination = ({cbPrev, cbNext, postsLenght, countriesPerPage, activePage, onChangePage, currentPage}) => {

    const pageNumbers = [];
    for(let i = 1; i < Math.ceil(postsLenght/countriesPerPage) + 1; i++) {
        pageNumbers.push(i);
    }

    const displayPages = 4;
    const getPageSubset = () => {
        const halfDisplay = Math.floor(displayPages / 2);
        const startPage = Math.max(1, currentPage - halfDisplay);
        const endPage = Math.min(pageNumbers.length, startPage + displayPages - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const pageSubset = getPageSubset();

    return (
        <div className='flex items-center gap-2.5 '>
            <PaginationButtonLeft disabled={currentPage === 1} cb={cbPrev}/>
            {
                pageSubset.map(item => {
                    return (
                        <PaginationItem onChangePage={item !== activePage && onChangePage} key={item} active={item === activePage} i={item}/>
                    )
                })
            }
            <PaginationButtonRight disabled={currentPage === pageNumbers[pageNumbers.length - 1]} cb={cbNext}/>
        </div>
    )
}

export default Pagination