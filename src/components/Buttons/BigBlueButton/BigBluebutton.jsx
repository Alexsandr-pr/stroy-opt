import React from 'react'

const BigBluebutton = ({text, children}) => {
    return (
        <button className='py-5 px-7 w-full rounded-lg text-white font-bold items-center leading-tight  text-sm bg-blue'>
            {children}
            {text}
        </button>
    )
}

export default BigBluebutton