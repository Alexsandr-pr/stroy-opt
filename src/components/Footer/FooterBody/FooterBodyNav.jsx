
import { Link } from 'react-router-dom'



const data = [
    {
        "to":"company",
        "title":"О компании"
    },
    {
        "to":"question",
        "title":"Вопрос-ответ"
    },
    {
        "to":"payment",
        "title":"Оплата"
    },
    {
        "to":"news",
        "title":"Новости"
    },
    {
        "to":"order",
        "title":"Доставка"
    },
    {
        "to":"contact",
        "title":"Контакты"
    },
    {
        "to":"refund",
        "title":"Возврат"
    },
    {
        "to":"user",
        "title":"Вход / Регистрация"
    },
    {
        "to":"reviews",
        "title":"Отзывы"
    },
    {
        "to":"sales",
        "title":"Все акции"
    },

]


const FooterBodyNav = () => {
    return (
        <nav className='flex flex-col gap-8'>
            <h3 className='text-[#333436] font-medium text-lg '>Информация</h3>
            <ul className='columns-2 break-inside-avoid gap-x-8 xl:gap-x-12 gap-y-4  xl:gap-y-6'>
                {
                    data.map(({to, title}) => {
                        return (
                            <li key={title} className='mb-4 xl:mb-7 '>
                                <Link to={to} className='text-base text-[#404244]  hover:text-blue transition-all duration-300'>
                                    {title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default FooterBodyNav