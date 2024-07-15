import Title28 from 'components/BlockText/Title28/Title28'
import BlackButton from 'components/Buttons/BlackButton/BlackButton'
import React from 'react'
import { Link } from 'react-router-dom'


const LabelText = ({type}) => {


    return (
        <div className="flex gap-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewBox="0 0 40 48" fill="none">
                <path d="M24.75 39.3947H39M31.875 32.2895V46.5M1 44.1316V39.3947C1 36.8822 2.00089 34.4725 3.78249 32.6958C5.56408 30.9192 7.98044 29.9211 10.5 29.9211H20M5.75 10.9737C5.75 13.4863 6.75089 15.8959 8.53249 17.6726C10.3141 19.4493 12.7304 20.4474 15.25 20.4474C17.7696 20.4474 20.1859 19.4493 21.9675 17.6726C23.7491 15.8959 24.75 13.4863 24.75 10.9737C24.75 8.46111 23.7491 6.05144 21.9675 4.27478C20.1859 2.49812 17.7696 1.5 15.25 1.5C12.7304 1.5 10.3141 2.49812 8.53249 4.27478C6.75089 6.05144 5.75 8.46111 5.75 10.9737Z" stroke="#E52B0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="">
                <Title28 title={type === "sign-in" ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}/>
                <div className='flex flex-col gap-4 text-[#515151] font-normal'>
                    {
                        type === "sign-in" ? 
                        <>
                        <p><strong>Регистрация на сайте</strong> позволяет получить доступ к статусу и истории вашего заказа. Просто заполните поля ниже, и вы получите учетную запись. </p>
                        <p>Мы запрашиваем у вас только информацию, необходимую для того, чтобы сделать процесс покупки более быстрым и легким.</p>
                        </>
                        : 
                        <>
                            Перейдите к авторизации если у вас уже есть зарегистрированный аккаунт.
                        </>
                        
                    }
                </div>
                <Link to={type === "sign-in" ? "sign-up" : "sign-in"}>
                    <BlackButton text={"Зарегистрироваться"}/>
                </Link>
                
            </div>
        </div>
    )
}

export default LabelText