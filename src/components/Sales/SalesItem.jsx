import CategorySale from "components/Category/CategorySale/CategorySaleItem"


const SalesItem = ({data, title}) => {
    return (
        <article className="flex flex-col gap-2">
            <CategorySale {...data}/>
            <h3 className="text-xl text-main-title font-medium">{title}</h3>
            <button className="text-base text-left font-medium text-blue underline leading-relaxed">Подробнее об акции</button>
        </article>
    )
}

export default SalesItem