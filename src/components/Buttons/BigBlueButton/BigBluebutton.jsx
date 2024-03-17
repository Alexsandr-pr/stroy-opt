import React from 'react'

const BigBluebutton = ({text}) => {
    return (
        <button className='py-5 px-7 w-full rounded-lg text-white font-bold  leading-tight  text-sm bg-blue'>
                {text}
        </button>
    )
}

export default BigBluebutton