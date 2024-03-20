import React from 'react'

const LabelData = ({data, text}) => {
    return (
        <div className='flex gap-3 items-center'>
            <div className="px-2.5 py-4 bg-[#F7F9FB] items-center rounded-md">{text}</div>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <circle cx="3" cy="3" r="3" fill="#DEDEDE"/>
                </svg>
            </span>
            <div className="text-[#4F4F4F] text-sm font-normal">{data}</div>
        </div>
    )
}

export default LabelData