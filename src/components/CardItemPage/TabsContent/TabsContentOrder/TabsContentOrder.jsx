import Title22 from "components/BlockText/Title22/Title22"
import ListItems from "components/ListItems/ListItems"


const data = [
    {
        "text": "Самовывоз с территории компании."
    },
    {
        "text": "Быстрая доставка по городу Чернигов."
    },
    {
        "text": "Доставка транспортной компанией."
    },
    {
        "text": "УКР почтой"
    },
]

const dataCard = [
    {
        "text": "VISA International"
    },
    {
        "text": "Mastercard Worldwide"
    }
]
const dataList = [
    {
        "text": "Банковской картой с помощью платежной системы на сайте или на кассе при получении заказа."
    },
    {
        "text": "Наличными на кассе при получении заказа"
    }
]
const TabsContentOrder = () => {
    return (
        <div className="flex flex-col gap-5">
            <Title22 title={"Доставка"}/>
            <p className="text-main-title text-base ">Мы всегда готовы доставить приобретенный Вами товар в удобное для Вас время.
            Стоимость доставки товаров определяется исходя из веса, габаритов и удаленности до места назначения. Доставка осуществляется до подъезда дома, офиса.
            Наш интернет-магазин предлагает несколько вариантов получения товара:</p>
            <ListItems data={data}/>
            <Title22 title={"Оплата"}/>
            <div className="text-main-title text-base">
                <p className="mb-1"> Оплатить свои покупки вы можете:</p>
                
                <p className="font-bold mb-1">- При заказе доставки:</p>
                <p className="font-bold mb-3">1. Банковской картой с помощью платежной системы на сайте</p>
                <ListItems data={dataCard}/>
            </div>
            <div className="text-main-title text-base">
                <p className="font-bold mb-3">2. Наличными водителю при получение заказа</p>
                <p className="font-bold mb-1">- При самовывозе:</p>
                <ListItems data={dataList}/>
            </div>
        </div>
    )
}

export default TabsContentOrder