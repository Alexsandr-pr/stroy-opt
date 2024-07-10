
import InputEmail from 'components/Forms/InputEmail/InputEmail'

import CustomInput from 'components/Forms/CustomInput';
import React, { useState } from 'react'
import InputTel from 'components/Forms/InputTel/InputTel';
import Parent from 'components/Forms/Parent';
import InputBlock from 'components/Forms/Input';
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton';

const ChangeProfile = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [region, setRegion] = useState("");

    return (
        <form className='p-10 w-full lg:w-1/2 rounded-lg flex flex-col gap-5 border  border-[#EDF0F2]'>
            <InputEmail
                setValue={setEmail}
                value={email}
                />
            <Parent label={"ФИО *:"}>
                <InputBlock
                value={name}
                setValue={setName}
                type={"texts"}
                placeholder={"Введите ваше ФИО"}/>
            </Parent>
            
            <InputTel
                setValue={setTel}
                value={tel}
            />

            <Parent  label={"Регион *:"}>
                <InputBlock
                value={region}
                setValue={setRegion}
                type={"texts"}
                placeholder={"Ваш регион"}/>
            </Parent>
            <BigBluebutton type={"submit"} text={"Сохранить изменения"}/>
        </form>
    )
}

export default ChangeProfile