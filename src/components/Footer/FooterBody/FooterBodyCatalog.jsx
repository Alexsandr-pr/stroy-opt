import { Link } from "react-router-dom"


const data = [
    {
        "title":"Общестроительные материалы"
    },
    {
        "title":"Электротовары"
    },
    {
        "title":"Водо-газоснабжение, отопление, вентиляция"
    },
    {
        "title":"Все для сауны и бани"
    },
    {
        "title":"Сантехника"
    },
    {
        "title":"Метизные, такелажные и скобяные изделия"
    },
    {
        "title":"Инструмент"
    },
    {
        "title":"Столярные изделия"
    },
    {
        "title":"Отделочные материалы"
    },
    {
        "title":"Спецодежда и средства индивидуальной пожарной защиты"
    },
    {
        "title":"Товары для дома, сада и огорода"
    }
]


const FooterBodyCatalog = () => {
    return (
        <div className="flex flex-col gap-8">
            <h3 className='text-[#333436] font-medium text-lg '>Каталог</h3>
            <ul className='columns-2 lg:columns-3  break-inside-avoid gap-8 xl:gap-12'>
                {
                    data.map(({ title}) => {
                        return (
                            <li className="mb-4 xl:mb-7">
                                <Link key={title} className='text-base text-[#404244] hover:text-blue transition-all duration-300'>
                                {title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FooterBodyCatalog