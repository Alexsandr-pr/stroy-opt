import React, { useState } from 'react'

const SpollersItem = ({title, text}) => {


    const [active,setActive] = useState(false)

    return (
        <div className="">
            <button onClick={() => setActive(prev => !prev)}  className='p-2.5 gap-5 w-full justify-between text-left items-center flex text-main-title font-medium text-base  md:text-lg border-b border-spoller-border'>
                <span>{title}</span>
                <span className='max-w-10 max-h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center text-lg bg-[#EBF7FF] text-blue text-lg'>
                    {active ?   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                    
                                : 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            }
                </span>
            </button>
            <div className={`p-5  text-[#64676A] text-base font-normal leading-relaxed ${active ? " block": " hidden"}`}>
                {text}
            </div>
        </div>
    )
}

export default SpollersItem