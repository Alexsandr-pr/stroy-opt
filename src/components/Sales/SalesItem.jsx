import CategorySale from "components/Category/CategorySale/CategorySaleItem"
import { Link } from "react-router-dom"


const SalesItem = ({data, title}) => {
    return (
        <article className="flex flex-col gap-2">
            <CategorySale {...data}/>
            <h3 className="text-xl text-main-title font-medium">{title}</h3>
            <Link to={"sales_open"} className="text-base text-left font-medium text-blue underline leading-relaxed">Подробнее об акции</Link>
        </article>
    )
}

export default SalesItem