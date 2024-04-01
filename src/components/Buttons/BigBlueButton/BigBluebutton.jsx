import React from 'react'

const BigBluebutton = ({text, children, cb}) => {
    return (
        <button onClick={(e) => cb(e)} className='py-5 px-7 w-full rounded-lg text-white font-bold items-center leading-tight  text-sm bg-blue'>
            {children}
            {text}
        </button>
    )
}

export default BigBluebutton