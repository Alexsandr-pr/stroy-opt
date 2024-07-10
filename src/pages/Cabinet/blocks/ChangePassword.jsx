
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton';
import InputPassword from 'components/Forms/InputPassword'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <form onSubmit={handleSubmit} className='p-10 w-full lg:w-1/2 rounded-lg flex flex-col gap-5 border  border-[#EDF0F2]'>
            <InputPassword 
                placeholder={"Введите пароль"} 
                label={"Текущий пароль *:"}
                value={currentPassword}
                setValue={setCurrentPassword}
            />
            <InputPassword 
                placeholder={"Введите пароль"} 
                label={"Новый пароль *:"}
                value={newPassword}
                setValue={setNewPassword}
            />
            <InputPassword 
                placeholder={"Введите пароль"} 
                label={"Повторите пароль *:"}
                value={confirmPassword}
                setValue={setConfirmPassword}
            />
            <BigBluebutton type={"submit"} text={"Сохранить"}/>
        </form>

    )
}

export default ChangePassword