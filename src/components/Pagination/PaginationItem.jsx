import React from 'react'

const PaginationItem = ({i, active, onChangePage}) => {
    return (
        <button onClick={() => onChangePage(i)}  className={`h-[56px] w-[56px] flex items-center justify-center py-4 px-6  rounded-md border border-pagination-border flex items-center gap-2.5${active ? " text-white bg-black" : "bg-white text-black"}`}>
            {i}
        </button>
    )
}

export default PaginationItem