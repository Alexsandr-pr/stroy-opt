import Article from "components/BlockTovar/blocks/Article"
import BlockPrice from "components/BlockTovar/blocks/BlockPrice"
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton"
import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"
import YesOrNo from "./YesOrNo"
import LikeIcon from "components/Icon/LikeIcon"
import ButtonFavorites from "components/Buttons/ButtonFavorites/ButtonFavorites"
import RaitIcon from "components/Icon/RaitIcon"
import Counter from "components/Counter/Counter"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import basketAction from "action/basketAction"


const CardItemRightBlock = () => {
    const [current, setCurrent] = useState(1);

    const onChangeCurrent = (i) => {
        setCurrent(prev => prev + i)
    }
    const dispatch = useDispatch()
    
    
    const basket = useSelector(store => store.basket.basket)
    const {code, price, sale, _id} = useSelector(store => store.card.card);
    return (
        <div className="p-6 shadow-4sl flex flex-col gap-4">
            <Article article={code}/>
            <YesOrNo />
            <BlockPrice price={price} sale={sale}/>
            <Counter  onChangeCurrent={onChangeCurrent}  current={current} text={"Количество:"}/>
            <BigBluebutton active={basket.some(item => item.id === _id)} cb={() => dispatch(basketAction.addCardBasket(_id, current))} text={ basket.some(item => item.id === _id) ? "Уже добавлено" : "Добавить в корзину"}/>            
            <ButtonCategory title={"Купить в 1 клик"} />
            <div className="flex gap-6 justify-between">
                <ButtonFavorites text={"В избранное"}>
                    <LikeIcon/>
                </ButtonFavorites>
                <ButtonFavorites text={"Сравнить"}>
                    <RaitIcon/>
                </ButtonFavorites>
            </div>
        </div>
    )
}

export default CardItemRightBlock