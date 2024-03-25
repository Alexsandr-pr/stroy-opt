import AsideParentPage from "components/AsideParentPage/AsideParentPage"
import TitleMain from "components/BlockText/TitleMain/TitleMain"
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs"
import NewsCardPageLeft from "components/NewsPage/NewsCardPage/NewsCardPageLeft"
import SaleBlock from "components/OrderPage/SaleBlock"

import image from "../../assets/image-news.png";
import PromocodeButton from "components/Buttons/PromocodeButton/PromocodeButton"
import { useState } from "react"

const data = {
        "textShort": "Уважаемые клиенты, рады объявить вам о нашей специальной акции на лакокрасочные материалы! Теперь вы можете придать своему дому новое великолепное обличие по невероятно выгодным ценам. Это ваш шанс создать уют и красоту в вашем жилище без лишних затрат!",
        "img": image,
        "data":[
            {
                "title": "Что мы предлагаем:",
                "dataText": [
                    {
                        "text": "Широкий ассортимент качественных лаков и красок для любых поверхностей. Разнообразие цветов и оттенков, чтобы удовлетворить самые изысканные вкусы. Продукция от проверенных производителей, гарантирующих долговечность и качество."
                    },
                    {
                        "text": "Используйте промокод LAKOART20 при оформлении заказа и получите дополнительную скидку 20% на все лакокрасочные материалы. Это время для обновления вашего дома по самым доступным ценам!"
                    }
                ]
            }
        ]
    
}


const SalesItemOpen = () => {

    


    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <Breadcrumbs page={"Акции "}/>
            <div className="mb-6 max-w-6xl">
                <TitleMain title={"Акция на все лакокрасочные материалы. Скидки до 30%"}/>
            </div>
            <AsideParentPage
                left={<NewsCardPageLeft dataArray={data} 
                    childrenBottom={
                        <div className="mt-5">
                            <h3 className="text-[#1E1E1E] text-lg font-medium mb-5">Промокод для скидки:</h3>
                            <PromocodeButton code={"LAKOART20"}/>
                        </div>
                    }
                />}
                right={<SaleBlock/>}
            />
        </div>
    )
}

export default SalesItemOpen