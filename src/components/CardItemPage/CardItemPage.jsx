import HeaderBlock from "components/HeaderBlock/HeaderBlock"
import CardItemContent from "./CardItemContent/CardItemContent"
import CardItemPageTabs from "./CardItemPageTabs/CardItemPageTabs"


const CardItemPage = () => {
    return (
        <>
            <div className="mb-10">
                <HeaderBlock title={"Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч"}/>
            </div>
            <div className="mb-20">
                <div className="mb-12">
                    <CardItemContent/>
                </div>
                <CardItemPageTabs/>
            </div>
        </>
    )
}

export default CardItemPage