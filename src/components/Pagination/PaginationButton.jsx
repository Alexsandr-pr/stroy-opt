import React from 'react'

export const PaginationButtonLeft = ({cb, disabled}) => {
    return (
        <button disabled={disabled} onClick={() => cb()} className='disabled:opacity-45 text-black w-[56px] m46:w-auto group m46:h-auto h-[56px] m46:py-[18.3px] m46:px-6 hover:border-blue duration-300 transition-all bg-white rounded-md border border-pagination-border flex justify-center items-center gap-2.5'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="23" height="10" viewBox="0 0 23 10" fill="none">
                <path className='group-hover:fill-blue duration-300 transition-all' d="M0.54038 4.54038C0.286539 4.79422 0.286539 5.20578 0.54038 5.45962L4.67695 9.59619C4.9308 9.85003 5.34235 9.85003 5.59619 9.59619C5.85003 9.34235 5.85003 8.9308 5.59619 8.67696L1.91924 5L5.59619 1.32304C5.85003 1.0692 5.85003 0.657647 5.59619 0.403806C5.34235 0.149965 4.9308 0.149965 4.67695 0.403806L0.54038 4.54038ZM23 4.35L1 4.35V5.65L23 5.65V4.35Z" fill="#25282C"/>
            </svg>
            <span className='text-sm group-hover:text-blue duration-300 transition-all text-[#25282C] hidden m46:block font-normal leading-tight '>Назад</span>
        </button>
    )
}

export const PaginationButtonRight = ({cb, disabled}) => {
    return (
        <button disabled={disabled} onClick={() => cb()} className=' disabled:opacity-45 items-center hover:border-blue duration-300 transition-all group m46:w-auto m46:h-auto justify-center text-black w-[56px] h-[56px] m46:py-[18.3px] m46:px-6 bg-white rounded-md border border-pagination-border flex  gap-2.5' >
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="10" viewBox="0 0 23 10" fill="none">
                <path className='group-hover:fill-blue duration-300 transition-all' d="M22.4596 4.54038C22.7135 4.79422 22.7135 5.20578 22.4596 5.45962L18.323 9.59619C18.0692 9.85003 17.6576 9.85003 17.4038 9.59619C17.15 9.34235 17.15 8.9308 17.4038 8.67696L21.0808 5L17.4038 1.32304C17.15 1.0692 17.15 0.657647 17.4038 0.403806C17.6576 0.149965 18.0692 0.149965 18.323 0.403806L22.4596 4.54038ZM0 4.35L22 4.35V5.65L0 5.65L0 4.35Z" fill="#25282C"/>
            </svg>
            <span className='text-sm group-hover:text-blue duration-300 transition-all  text-[#25282C] font-normal leading-tight hidden m46:block'>Далее</span>
        </button>
    )
}