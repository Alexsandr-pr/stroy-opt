import React from 'react'

const RybricItem = ({title, number, active}) => {




    return (
          <button className={`py-4 flex justify-between gap-4 items-center button-rybric ${active ? " text-blue font-bold" : " font-medium text-grey3"}`}>
              <div className="text-sm text-left  leading-tight uppercase">
                {title}
              </div>
              <div className="text-xs py-[5px] px-2 border border-white3 rounded-full">
                {number}
              </div>
          </button>
    )
}

export default RybricItem