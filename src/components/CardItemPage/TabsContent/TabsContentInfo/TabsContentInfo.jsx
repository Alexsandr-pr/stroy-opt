import Title22 from "components/BlockText/Title22/Title22"

import image from "./img/image24.jpg"
import ListItems from "components/ListItems/ListItems"

const data = [
    {
        "text": "оплата бонусами до 30% от стоимости товара для владельцев бонусных карт;"
    },
    {
        "text": "следите за регулярными акциями и распродажами при покупке онлайн!"
    }
]



const TabsContentInfo = () => {
    return (
        <div>
            <div className="mb-5">
                <Title22 title={"О товаре «Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч»"}/>
            </div>
            <p className="text-main-title mb-7"> Аккумуляторная дрель-шуруповерт <strong>Makita DF347DWE</strong> используется при сборке мебели, выполнении ремонтных и отделочных работ в зданиях и на улице. Двухскоростной редуктор упрощает ведение различных работ: первая скорость предназначена для заворачивания шурупов, вторая - для сверления. Литий-ионная технология увеличивает срок службы аппарата и позволяет заряжать аккумулятор вне зависимости от степени его разрядки. Модель работает с батареями серии G.</p>
            <div className="flex lg:flex-row flex-col items-center gap-8">
                <div className="flex flex-col gap-3 text-main-title  basis-[70%] ">
                    <p>Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч — в нашем интернет-магазине можно приобрести с дополнительной выгодой:</p>
                    <ListItems data={data}/>
                    <p>Аккумуляторный шуруповерт Makita DF 347 DWE Отличный надежный инструмент для профессионального и бытового использования. Аккумуляторы Li-ion, от которых питается инструмент, обеспечивают полную автономную и длительную работу на одной зарядке.</p>
                    <p><strong>Особенности модели:</strong> шуруповерт оснащен мощным двигателем с электронной регулировкой частоты вращения и прочным пылезащищенным редуктором с металлическими шестернями; высокий крутящий момент (30 Нм) с регулировкой величины 16 ступеней + D обеспечивает сверление с максимальным диаметром в дереве до 36 мм, в стали – до 13 мм; для быстрой установки насадки используется БЗП патрон; электроинструмент имеет функцию реверса с удобной кнопкой переключения; двигатель шуруповерта снабжен тормозом; девайс работает от 14,4 В аккумулятора типа Li-ion, с полной зарядкой батареи 1,3 Ач в течение одного часа; электронная система защиты отключает аккумулятор при перегрузке;</p>
                    <p>Оформить заказ довольно просто — положите товар в корзину или позвоните по телефону <a className="font-bold" href="tel:0987765765">0987765765</a> и наши консультанты Вам помогут!</p>
                    <p>Обратите внимание! Изображение товара, представленного на фото, может незначительно отличаться от его фактического вида.</p>
                </div>

                <div className="relative">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default TabsContentInfo