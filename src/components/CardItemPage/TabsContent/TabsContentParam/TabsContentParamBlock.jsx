import Text15 from "components/BlockText/Text15/Text15"
import TabsContentParamsItems from "./TabsContentParamsItems"


const data = [
    {
        "title": "Тип товара",
        "text":"Дрель-шуруповерт"
    },
    {
        "title": "Бренд",
        "text":"MAKITA"
    },
    {
        "title": "Назначение инструмента",
        "text":"профессиональный"
    },
    {
        "title": "Мощность (Вт)",
        "text":"18"
    },
    {
        "title": "Емкость АКБ (А/ч)",
        "text":"1,5"
    },
    {
        "title": "Крутящий момент макс. (Н/м)",
        "text":"30"
    },
    {
        "title": "Напряжение аккумулятора (В)",
        "text":"14,4"
    },
    {
        "title": "Цвет",
        "text":"синий"
    },
    {
        "title": "Диаметр патрона мин. (мм)",
        "text":"1,5"
    },
    {
        "title": "Диаметр патрона макс. (мм)",
        "text":"10"
    },
    {
        "title": "Скорость вращения I (об/мин)",
        "text":"400"
    },
    {
        "title": "Скорость вращения II (об/мин)",
        "text":"1400"
    },
    {
        "title": "Диаметр сверления дерева макс. (мм)",
        "text":"15"
    },
    {
        "title": "Диаметр сверления металла макс. (мм)",
        "text":"25"
    },
    {
        "title": "Тип двигателя",
        "text":"щеточный"
    },
    {
        "title": "Вес (кг)",
        "text":"1,4"
    },
    {
        "title": "Тип патрона",
        "text":"быстрозажимной"
    },
    {
        "title": "Тип аккумулятора",
        "text":"Li-Ion"
    },
]



const TabsContentParamBlock = () => {
    return (
        <div>
            <h3 className="text-main-title font-medium text-xl mb-5">Характеристики товара «Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч»</h3>
            <TabsContentParamsItems styles={" columns-1 lg:columns-2 mb-8"} data={data}/>
            <Text15 text={"Производитель оставляет за собой право без уведомления продавца менять характеристики, внешний вид, комплектацию товара и место его производства. Указанная информация не является публичной офертой."}/>
        </div>
    )
}

export default TabsContentParamBlock