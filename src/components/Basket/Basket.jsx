import TitleMain from "components/BlockText/TitleMain/TitleMain"
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs"
import BasketNoItems from "./BasketNoItems"
import { useSelector } from "react-redux"
import BlockTovatItems from "components/BlockTovar/BlockTovarItems/BlockTovatItems"
import HeaderBlock from "components/HeaderBlock/HeaderBlock"
import BasketBody from "./BasketBody"


const Basket = () => {

    const basket = useSelector(store => store.basket.basket)

    console.log(basket)
    return (
        <div className="max-w-[1654px] mx-auto px-4 ">
            <Breadcrumbs page={"Корзина товаров"}/>
            <div className="mb-5">
                <TitleMain title={"Корзина товаров"}/>
            </div>
            <BasketBody/>
            {
                basket.length ===  0 && <div className="flex justify-center items-center">
                                            <BasketNoItems/>
                                        </div>
            }
            {
                basket.length > 0  ?
                <div className="mt-12 lg:mt-16 mb-20 lg:mb-28">
                    <div className="mb-6 lg:mb-12">
                        <HeaderBlock title={"Возможно вас заинтересуют:"}/>
                    </div>
                    <BlockTovatItems/>
                </div> : null
            }
           
        </div>

    )
}

export default Basket