

import card from "assets/card/card.svg";
import sale from "assets/card/sale.svg";
import many from "assets/card/many.svg";
import order from "assets/card/order.svg";
import BlockListOnBorder from "components/BlockListOnBorder/BlockListOnBorder";
import TabsContentParamsItems from "components/CardItemPage/TabsContent/TabsContentParam/TabsContentParamsItems";
import ButtonBlueAdd from "components/Buttons/ButtonBlueAdd/ButtonBlueAdd";
import CardItemRightBlock from "./CardItemRightBlock";


const data = [
    {
        image: card,
        text: "Оплата любым удобным способом"
    },
    {
        image: many,
        text: "Большой выбор товаров в каталоге"
    },
    {
        image: order,
        text: "Осуществляем быструю доставку"
    },
    {
        image: sale,
        text: "Делаем скидки на крупные покупки"
    },
]

const dataParam = [
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
    }
]



const CardItemRight = () => {
    return (
        <div className="flex gap-12">
            <div className="w-1/2">
                <div className="mb-6">
                    <TabsContentParamsItems data={dataParam}/>
                    <ButtonBlueAdd text={"Больше характеристик"}/>
                </div>
                <BlockListOnBorder data={data}/>
            </div>
            <div className="w-1/2">
                <CardItemRightBlock/>
            </div>
        </div>
    )
}

export default CardItemRight