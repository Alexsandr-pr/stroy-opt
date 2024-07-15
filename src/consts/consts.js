import { Account, Adress, Likes, Logout, Order, Password, Profile } from "../pages/Cabinet/CabinetButtons/icons/Icons"


export const cabinetButtons = [
    {
        text: "Мой аккаунт",
        state:"account",
        component: Account
    },
    {
        text: "Изменить профиль",
        state:"profile",
        component: Profile
    },
    {
        text: "Мои заказы",
        state:"order",
        component: Order
    },
    {
        text: "Адрес доставки",
        state:"adress",
        component: Adress
    },
    {
        text: "Избранные товары",
        state:"likes",
        component: Likes
    },
    {
        text: "Сменить пароль",
        state:"password",
        component: Password
    },
    {
        text: "Выйти из аккаунта",
        state:"logout",
        component: Logout
    },
]