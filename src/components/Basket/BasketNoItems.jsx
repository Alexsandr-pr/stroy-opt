

import Title22 from "components/BlockText/Title22/Title22"
import basket from "./img/basket.svg"
import Text15 from "components/BlockText/Text15/Text15"

import NavButtonsBlue from "components/Buttons/Navbuttons/NavButtonsBlue"

const BasketNoItems = () => {
    return (
        <div className="flex py-16 lg:pt-24 lg:pb-32 flex-col gap-5 items-center justify-center">
            <img width={98} height={70} src={basket} alt="Корзина товаров "/>
            <Title22 title={ "В вашей корзине пусто"}/>
            <div className="text-center">
                <Text15 text={"У вас пока нет товаров в корзине. На странице 'Каталог вы найдете много интересных товаров."}/>
            </div>   
            <NavButtonsBlue to={"/catalog"} text={"Перейти в каталог"}/>
        </div>
    )
}

export default BasketNoItems