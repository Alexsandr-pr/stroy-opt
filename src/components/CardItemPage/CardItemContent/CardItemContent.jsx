import CardItemRight from "./CardItemRight/CardItemRight"
import CardItemSlider from "./CardItemSlider"

const CardItemContent = () => {
    return (
        <div className="flex">
            <div className="w-1/2">
                <CardItemSlider/>
            </div>
            <div className="w-1/2">
                <CardItemRight/>
            </div>
        </div>
    )
}

export default CardItemContent