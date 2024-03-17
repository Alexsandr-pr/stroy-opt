import ButtonBlue from 'components/Buttons/ButtonBlue/ButtonBlue'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const HeaderTop = () => {

    const [active, setActive] = useState(false)

    return (
        <div className='flex gap-12 py-2.5 border-b border-b-white2 items-center justify-between'>
            <button onClick={() => setActive(prev => !prev)} className='w-6 h-5 block lg:hidden z-50 relative'>
                <span className={`w-6 h-[2px] bg-black absolute top-0 left-0  transition-all duration-500 ${active ? "rotate-45 top-1/2 mt-[-1px]" : null}`}></span>
                <span className={`w-6 h-[2px] bg-black absolute left-0 top-1/2  mt-[-1px] ${active ? "hidden" : null}`}></span>
                <span className={`w-6 h-[2px] bg-black absolute bottom-0 left-0 transition-all duration-500 ${active ? "-rotate-45 bottom-1/2 mb-[-1px]" : null}`}></span>
            </button>
            <nav className={`fixed w-full h-full   top-0  bg-fon z-30 lg:relative transition-all duration-500  lg:left-0 ${active ? "left-0" : "left-[-120%]"}`}>
                <ul className="flex w-2/3 md:w-1/2 lg:w-auto lg:h-auto h-full p-6 lg:p-0  flex-col bg-white2 lg:bg-white items-end lg:flex-row z-40 gap-x-8 lg:flex-wrap gap-y-2">
                    <li className="">
                        <NavLink to="company" className={`lg:text-nav-link text-navlink-mobile text-sm font-medium lg:font-normal leading-normal whitespace-nowrap `}>
                            О компании
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="pay" className="lg:text-nav-link text-navlink-mobile text-sm font-medium lg:font-normal leading-normal whitespace-nowrap">
                            Оплата
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="order" className="lg:text-nav-link text-navlink-mobile text-sm font-medium lg:font-normal leading-normal whitespace-nowrap">
                            Доставка
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="" className="lg:text-nav-link text-navlink-mobile text-sm font-medium lg:font-normal leading-normal whitespace-nowrap">
                            Возврат
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="reviews" className="lg:text-nav-link text-navlink-mobile text-sm font-medium lg:font-normal leading-normal whitespace-nowrap">
                            Отзывы
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="question" className="lg:text-nav-link text-navlink-mobile text-sm font-medium lg:font-normal leading-normal whitespace-nowrap">
                            Вопрос-ответ
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="news" className="lg:text-nav-link text-navlink-mobile text-sm  font-medium lg:font-normal leading-normal whitespace-nowrap">
                            Новости
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to="contact" className="lg:text-nav-link text-navlink-mobile text-sm font-medium lg:font-normal leading-normal whitespace-nowrap">
                            Контакты
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
            <div className="flex items-center gap-2.5">
                <p className='text-time font-normal leading-normal text-[13px] whitespace-nowrap hidden md:block'>Ежедневно, с 8:00 до 18:00</p>
                <a className='text-black font-medium text-base whitespace-nowrap leading-normal' href="tel:04534534532">0983453432</a>
                <ButtonBlue text={"Заказать звонок"} />
            </div>
        </div>
    )
}

export default HeaderTop