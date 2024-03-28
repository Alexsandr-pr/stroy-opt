import Article from "components/BlockTovar/blocks/Article"
import BlockPrice from "components/BlockTovar/blocks/BlockPrice"
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton"
import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"
import YesOrNo from "./YesOrNo"
import LikeIcon from "components/Icon/LikeIcon"
import ButtonFavorites from "components/Buttons/ButtonFavorites/ButtonFavorites"
import RaitIcon from "components/Icon/RaitIcon"
import Counter from "components/Counter/Counter"


const CardItemRightBlock = () => {
    return (
        <div className="p-6 shadow-4sl flex flex-col gap-4">
            <Article article={"XJ89YHGO"}/>
            <YesOrNo/>
            <BlockPrice price={"14000"}/>
            <Counter text={"Количество:"}/>
            <BigBluebutton text={"Добавить в корзину"}/>            
            <ButtonCategory title={"Купить в 1 клик"} active={true}/>
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