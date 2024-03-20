import React from 'react'
import Parent from '../Parent'
import InputBlock from '../Input'

const InputTel = () => {
    return (
        <Parent
        htmlFor={"tel"}
        label={"Номер телефона *:"}
    >
        <InputBlock
            id={"tel"}
            type={"tel"} 
            name={"tel"} 
            placeholder={"Введите ваш номер телефона"}
        />
    </Parent> 
    )
}

export default InputTel