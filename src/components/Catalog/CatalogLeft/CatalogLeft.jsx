import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton"
import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"
import CategorySaleBlock from "components/Category/CategorySale/CategorySaleBlock"
import SpollerSortRelative from "components/Spollers/SpollersSortrelative/SpollerSortRelative"
import { useDispatch } from "react-redux"
import { deleteActiveFilter } from "../../../store/CatalogReducer"



const data = [
    {
        "text": "Тип товара",
        "data": [
            {
                "text":"Набор"
            },
            {
                "text":"Стойка"
            },
            {
                "text":"Адаптер"
            },
            {
                "text":"Держатель"
            },
            {
                "text":"Фильтр"
            },
        ]
    },
    {
        "text": "Бренд",
        "data": [
            {
                "text":"STAYER"
            },
            {
                "text":"HOMEPROFEE"
            },
            {
                "text":"PECAHTA"
            },
            {
                "text":"MAKITA"
            },
            {
                "text":"HUNTER"
            },
        ]
    },
    {
        "text": "Материал",
        "data": [
            {
                "text":"Латунь"
            },
            {
                "text":"Медь"
            },
            {
                "text":"Металл"
            },
            {
                "text":"Металл, пластик"
            },
            {
                "text":"Бумага"
            },
        ]
    },
    {
        "text": "Цвет",
        "data": [
            {
                "text":"Orange"
            },
            {
                "text":"Black"
            },
            {
                "text":"Green"
            },
            {
                "text":"Yellow"
            },
            {
                "text":"White"
            },
        ]
    },
    {
        "text": "Длина, мм",
        "data": [
            {
                "text":"120"
            },
            {
                "text":"140"
            },
            {
                "text":"160"
            },
            {
                "text":"180"
            },
            {
                "text":"200"
            },
        ]
    },
    {
        "text": "Ширина, мм",
        "data": [
            {
                "text":"320"
            },
            {
                "text":"440"
            },
            {
                "text":"560"
            },
            {
                "text":"780"
            },
            {
                "text":"900"
            },
        ]
    },
    {
        "text": "Высота, мм",
        "data": [
            {
                "text":"150"
            },
            {
                "text":"200"
            },
            {
                "text":"300"
            },
            {
                "text":"400"
            },
            {
                "text":"500"
            },
        ]
    }
]


const CatalogLeft = () => {

    const dispatch = useDispatch();

    const onDeleteActive = () => {
        dispatch(deleteActiveFilter())
    }


    return (
        <div className="flex flex-col mb-10 h-full bg-white w-10/12 m46:w-2/3 sm:w-1/2 lg:w-full pb-10 px-5 lg:p-0">
            <div className="pt-6 pb-2.5 flex items-center gap-5 lg:hidden justify-between">
                <span className="text-[#2E3032] text-lg font-bold">Фильтры</span>
                <ButtonCategory cb={onDeleteActive}>
                    {
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M7.5 0.5L0.5 7.5M0.5 0.5L7.5 7.5" stroke="#2A5E8D" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    }
                </ButtonCategory>
            </div>
            {
                data.map((item, i) => {
                    return (
                        <SpollerSortRelative key={i} {...item}/>
                    )
                })
            }
            <div className="hidden lg:block">
                <CategorySaleBlock/>
            </div>
            <div className="block lg:hidden mt-8">
                <BigBluebutton text={"Применить фильтры"}/>
            </div>
        </div>
    )
}

export default CatalogLeft