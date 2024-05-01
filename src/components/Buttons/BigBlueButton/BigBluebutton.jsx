import React from 'react'

const BigBluebutton = ({text,type, children, cb, active}) => {
    return (
        <button disabled={active} type={type} onClick={(e) => cb(e)} className={`disabled:opacity-30 py-5 px-7 w-full hover:bg-white3 hover:text-blue duration-300 transition-all rounded-lg text-white font-bold items-center leading-tight  text-sm bg-blue ${active ? "bg-blue2" : null}`}>
            {children}
            {text}
        </button>
    )
}

export default BigBluebutton