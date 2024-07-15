import Title28 from 'components/BlockText/Title28/Title28';
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton';
import CustomInput from 'components/Forms/CustomInput'
import InputPassword from 'components/Forms/InputPassword'
import LabelCheckbox from 'components/Forms/LabelCheckbox';
import React, { useState } from 'react'
import LabelText from './LabelText';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    return (
        <>
            <form className='flex flex-col gap-4 '>
                <CustomInput 
                    placeholder={"Введите данные для авторизации"}
                    value={email}
                    setValue={setEmail}
                    label={"Email или логин *:"}
                    type={"email"}
                />
                <InputPassword 
                    placeholder={"Введите пароль"}
                    value={currentPassword}
                    setValue={setCurrentPassword}
                    label={"Пароль *:"}
                    
                />
                <BigBluebutton text={"Восстановить пароль"}/>
                <BigBluebutton text={"Авторизоваться"}/>
                <div className="flex justify-center">
                    <LabelCheckbox 
                        type={"checkbox"}
                            text={"Запомнить меня"}
                        />
                </div>
            </form>
            <LabelText type="sign-in"/>
        </>
    )
}

export default Signin