import BlockTovarComponent from "components/BlockTovar/BlockTovarComponent/BlockTovarComponent"
import CardItemPage from "components/CardItemPage/CardItemPage"









const CardPage = () => {
    return (

        <div className="max-w-[1654px] mx-auto px-4">

            <CardItemPage/>

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