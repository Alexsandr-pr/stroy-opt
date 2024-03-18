import SpollersItems from 'components/Spollers/SpollersItems'
import React from 'react'


const data = [
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Могу ли я сделать возврат материалов, не использованных в процессе строительства?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Входит ли в стоимость доставки разгрузка машины?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Продаются ли у вас в магазине товары под заказ, которые можно купить только по предоплате?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Какая минимальная сумма заказа?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Есть ли у вас бесплатная доставка?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Есть ли возможность оформить рассрочку или кредит при покупке? Если есть, то какие условия?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Возможно ли проверить инструмент или технику перед покупкой?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Какие дополнительные услуги есть у вас?"
    },
    {
        "text":"Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
        "title":"Как часто у вас проходят акции?"
    },
]


const QuestionLeft = () => {
    return (
        <SpollersItems data={data}/>
    )
}

export default QuestionLeft