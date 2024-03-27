import Article from "components/BlockTovar/blocks/Article"
import BlockPrice from "components/BlockTovar/blocks/BlockPrice"
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton"
import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"


const CardItemRightBlock = () => {
    return (
        <div className="p-6 shadow-4sl flex flex-col gap-4">
            <Article article={"XJ89YHGO"}/>
            <BlockPrice price={"14000"}/>
            <BigBluebutton text={"Добавить в корзину"}/>
            
            <ButtonCategory title={"Купить в 1 клик"} active={true}/>
            
        </div>
    )
}

export default CardItemRightBlock