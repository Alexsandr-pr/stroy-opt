import React from 'react'

const ButtonSliderRight = ({cb}) => {
    return (
        <button className='w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-3sl duration-300 transition-all hover:bg-blue-200' onClick={() => cb()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    )
}

export default ButtonSliderRight;