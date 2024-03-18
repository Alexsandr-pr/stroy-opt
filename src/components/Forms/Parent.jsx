import React from 'react'

const Parent = ({htmlFor, label, children}) => {

    return (
        <label htmlFor={htmlFor} className=''>
            <span className='mb-2.5 block text-sm font-normal text-button'>{label}</span>
            {children}
        </label>
    )
}

export default Parent