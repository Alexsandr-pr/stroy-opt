
import { useState } from "react"
import { Account, Adress, Likes, Logout, Order, Password, Profile } from "./icons/Icons"
import { Link, useLocation } from "react-router-dom"

const data = [
    {
        text: "Мой аккаунт",
        state:"account",
        component: <Account/>
    },
    {
        text: "Изменить профиль",
        state:"profile",
        component: <Profile/>
    },
    {
        text: "Мои заказы",
        state:"order",
        component: <Order/>
    },
    {
        text: "Адрес доставки",
        state:"adress",
        component: <Adress/>
    },
    {
        text: "Избранные товары",
        state:"likes",
        component: <Likes/>
    },
    {
        text: "Сменить пароль",
        state:"password",
        component: <Password/>
    },
    {
        text: "Выйти из аккаунта",
        state:"logout",
        component: <Logout/>
    },
]


const Cabinetbuttons = () => {
    const {pathname} = useLocation();

    return (
        <>
            {
                data.map(({text, component, state}) => {
                    const isActive = `/user/${state}` === pathname;
                    return (
                        <Link to={state} key={state}  className={`flex cursor-pointer buttons-settings-account items-center gap-2.5  transition-all duration-300 py-6 border-b border-solid px-8 ${isActive ?  " bg-button border-b-button text-white active " :"  bg-white  border-b-[#EDF0F2] text-main"}`}>
                            <div className="flex items-center gap-2.5">
                                <div className={`${isActive ? " text-white" : " text-[rgba(163, 174, 189, 1)]"}`}>
                                    {component}
                                </div>
                                <p className=" text-base font-medium ">{text}</p>
                            </div>
                            {
                                state === "likes" &&  <span>7</span>
                            }
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Cabinetbuttons