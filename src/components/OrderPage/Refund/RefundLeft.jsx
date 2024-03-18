import React from 'react'
import Text from '../ui/Text'
import Title from '../ui/Title'
import SpollersItems from 'components/Spollers/SpollersItems'
import ListItems from 'components/ListItems/ListItems'

const dataSpoller = [
    {
        "title":"Куда обращаться в случае поломки в течении гарантийного срока?",
        "text":"Проводится платная диагностика и ремонт товара"
    },
    {
        "title":"Куда обращаться в случае поломки в течении гарантийного срока?",
        "text":"Проводится платная диагностика и ремонт товара"
    },
    {
        "title":"Есть ли гарантийный ремонт?",
        "text":"Проводится платная диагностика и ремонт товара"
    },
    {
        "title":"Какой срок действия гарантии?",
        "text":"Проводится платная диагностика и ремонт товара"
    },
]



const data1 = [
	
    {
        "text":"подтверждающих покупку и оплату товара;",
    },
    {
        "text":"документа подтверждающего личность.",
    },
   
]
const RefundLeft = () => {
    return (
        <div>
            <Text text={"Возврат или обмен товара надлежащего качества, возможен в течение 14 дней с момента покупки в соответствие со ст.26.1 Закона «О защите прав потребителей», сохранивший товарный вид и потребительские свойства при наличии документов:"}/>


            <div className="mb-5">
            <ListItems data={data1}/>
            </div>

            <Text text={"Для этого достаточно приехать в часы работы наших складов и ТЦ и оформить возврат."}/>
            <Text text={"Возврат товара возможен без упаковки, но при условии сохранения всей комплектации и потребительских свойств товара."}/>
            <Text text={"Возврат денежных средств за товар оплаченных банковской картой, осуществляется на ту же карту."}/>
            <Text text={"При заказе товара с доставкой вы можете отказаться от заказа до его передачи. Если же машина с вашим заказом уже выехала на адрес, мы вернем вам стоимость товара за исключением расходов на доставку."}/>
            <Text text={"Ограничения по возврату товара"}/>
            <Text text={"Мы не принимаем на возврат товары, имеющие индивидуально-определенные свойства, если указанный товар может быть использован исключительно потребителем, который купил его."}/>
            <Text text={"Например, товары под заказ, колерованная краска, строительные и отделочные материала отпускаемые на метраж, уцененный товар, а так же все виды заказного материала."}/>

           
           <div className="mt-5">
           <Title title={"Обращение по гарантии"}/>
           </div>
            <SpollersItems data={dataSpoller}/>
        </div>
    )
}

export default RefundLeft