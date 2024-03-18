import React from 'react'
import Parent from '../Parent'
import InputBlock from '../Input'

const InputName = () => {
    return (
        <Parent
            htmlFor={"inputName"}
            label={"Ваше имя *:"}
        >
            <InputBlock 
                id={"inputName"}
                type={"text"} 
                name={"name"} 
                placeholder={"Введите ваше имя"}
            />
        </Parent> 
        
    )
}

export default InputName