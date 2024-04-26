

import card from "assets/card/card.svg";
import sale from "assets/card/sale.svg";
import many from "assets/card/many.svg";
import order from "assets/card/order.svg";
import BlockListOnBorder from "components/BlockListOnBorder/BlockListOnBorder";
import TabsContentParamsItems from "components/CardItemPage/TabsContent/TabsContentParam/TabsContentParamsItems";
import ButtonBlueAdd from "components/Buttons/ButtonBlueAdd/ButtonBlueAdd";
import CardItemRightBlock from "./CardItemRightBlock";
import { useDispatch, useSelector } from "react-redux";
import { changeParamTabs } from "store/cardReducer";


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




const CardItemRight = () => {
    const {params} = useSelector(store => store.card.card)
    const paramsss = JSON.parse(params[0])

    const typeParam = useSelector(store => store.card.typeParam)
    
    
    const dispatch = useDispatch();

    const scrollTo = () => {
        window.scrollTo({
            top: 800,
            behavior:"smooth"
        })
        if(typeParam !== "params") {
            dispatch(changeParamTabs("params"))
        }
        
    }

    return (
        <div className="flex gap-12">
            <div className="w-1/2">
                <div className="mb-6">
                <TabsContentParamsItems data={paramsss}/>
                    <ButtonBlueAdd cb={scrollTo} text={"Больше характеристик"}/>
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