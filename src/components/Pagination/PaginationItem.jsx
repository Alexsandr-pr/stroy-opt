import React from 'react'

const PaginationItem = ({i, active, onChangePage}) => {
    return (
        <button  onClick={() => {
            !active ? onChangePage(i) : null
        }}  className={`h-[56px] w-[56px] flex items-center justify-center py-4 px-6  rounded-md border border-pagination-border flex items-center gap-2.5${active ? " text-white bg-black" : "bg-white text-black hover:bg-blue hover:border-blue duration-300 transition-all hover:text-white"}`}>
            {i}
        </button>
    )
}

export default PaginationItem;