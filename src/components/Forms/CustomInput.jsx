import React from 'react'
import Parent from './Parent'
import InputBlock from './Input'

const CustomInput = ({
    type,
    name,
    placeholder,
    value,
    setValue,
    label,
}) => {

    return (
        <Parent label={label}>
            <InputBlock
                name={name}
                setValue={setValue}
                value={value} 
                placeholder={placeholder} 
                type={type}
            />
        </Parent>
    )
}

export default CustomInput