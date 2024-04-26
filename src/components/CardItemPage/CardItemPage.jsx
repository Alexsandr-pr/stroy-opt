import HeaderBlock from "components/HeaderBlock/HeaderBlock"
import CardItemContent from "./CardItemContent/CardItemContent"
import CardItemPageTabs from "./CardItemPageTabs/CardItemPageTabs"
import { useSelector } from "react-redux"


const CardItemPage = () => {

    const {title} = useSelector(store => store.card.card)
    return (
        <>
            <div className="mb-10">
                <HeaderBlock title={title}/>
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