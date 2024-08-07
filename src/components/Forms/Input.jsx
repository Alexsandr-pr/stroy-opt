import React from 'react'

const InputBlock = ({
    
    type,
    name,
    placeholder,
    value,
    setValue
}) => {
    
    return (
        <input 
                onChange={(e) => setValue(e.target.value)}
                value={value}
                required={true}
                type={type} 
                name={name} 
                placeholder={placeholder} 
                className='placeholder:text-input-text text-brown w-full text-base font-normal py-4 pr-7 px-6 rounded-lg bg-white border border-input-border  focus:outline-blue2'
            >
        </input>
    )
}

export default InputBlock