import TitleMain from 'components/BlockText/TitleMain/TitleMain'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import Cabinetbuttons from './CabinetButtons/Cabinetbuttons'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Title22 from 'components/BlockText/Title22/Title22'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'



const Cabinet = () => {

    const [block] = useAutoAnimate();
    const {pathname} = useLocation()
    const [title, setTitle] = useState('');
    const titles = {
        "account": "Здравствуйте, Евгений!",
        "profile" : "Изменить профиль",
        "order" : "Текущие заказы",
        "adress" : "Мой адрес доставки",
        "likes" : "",
        "password" : "Сменить пароль",
        "logout" : "",
    }
    useEffect(() => {
        const pathKey = pathname.split("/")[2];
        setTitle(titles[pathKey] || '');
    }, [pathname]);



    return (
        <div className="max-w-[1654px] mx-auto px-4 mb-32">
            <Breadcrumbs page={"Личный кабинет"}/>

            <TitleMain  title={"Личный кабинет"}/>
            <div  className="flex gap-5 mt-7 r">
                <div ref={block} className="flex flex-col ounded-md bg-white shadow-4sl  w-1/5">
                    <Cabinetbuttons/>
                </div>
                <div className="w-4/5">
                    <Title22 classes={"mb-5"} title={title}/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Cabinet