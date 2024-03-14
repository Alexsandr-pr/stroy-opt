import React from 'react'

const ButtonCategory = ({title, active}) => {
    let clazz =  `${active ? 'bg-white3 text-blue' : " text-grey bg-white"} rounded-md hover:bg-white3 hover:text-blue duration-300 transition-all text-sm flex py-4 leading-3 px-5 font-medium  border border-white2  border-solid `

    return (
        <button  className={clazz}>
            {title}
        </button>
    )
}

export default ButtonCategory;