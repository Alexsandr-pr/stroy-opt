import React from 'react'
import Parent from '../Parent'
import InputBlock from '../Input'

const InputTel = ({value,setValue}) => {
    return (
        <Parent
        htmlFor={"tel"}
        label={"Номер телефона *:"}
    >
        <InputBlock
            setValue={setValue}
            value={value}
            id={"tel"}
            type={"tel"} 
            name={"tel"} 
            placeholder={"Введите ваш номер телефона"}
        />
    </Parent> 
    )
}

export default InputTel