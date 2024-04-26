import cardAction from "action/cardAction"
import BlockTovarComponent from "components/BlockTovar/BlockTovarComponent/BlockTovarComponent"
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs"
import CardItemPage from "components/CardItemPage/CardItemPage"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"







const CardPage = () => {

    const loading = useSelector(store => store.card.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardAction.getOneCardOnDb())
    }, [])
    
    return (

        <div className="max-w-[1654px] mx-auto px-4">
            <Breadcrumbs page={"Электроинструмент"}/>
            {
                !loading &&  <CardItemPage/>
            }

            <div className="mb-20">
                <BlockTovarComponent title={"Похожие товары"} category={false}/> 
            </div>
            <div className="mb-20 lg:mb-28">
                <BlockTovarComponent title={"С этим товаром покупают"} category={false}/> 
            </div>
        </div>
    )
}

export default CardPage