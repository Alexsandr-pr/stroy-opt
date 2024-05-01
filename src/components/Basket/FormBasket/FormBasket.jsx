import Title28 from 'components/BlockText/Title28/Title28'
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton'
import Promocode from 'components/Promocode/Promocode'


const FormBasket = () => {
    return (
        <div className='p-6 rounded-lg flex flex-col gap-6 bg-white shadow-4sl'>
            <Title28 title={"Итого"}/>
            <ul>
                <Li text={"Скидка по промокоду"} title={"0 ₽"}/>
                <Li text={"Скидка от суммы заказа"} title={"0 ₽"}/>
                <LiBold text={"Сумма"} title={"36 829 ₽"}/>
            </ul>
            <Promocode/>

            <BigBluebutton  text={"Перейти к оформлению"}/>
        </div>
    )
}

const Li = ({text, title}) => {
    return (
        <li className="text-[15px] flex justify-between items-center mb-4">
            <h3 className="text-main-title mr-1  min-w-fit">{text}</h3>
            <span className="relative w-full after:w-full after:border-b after:border-dashed after:border-b-[#D1D1D1] after:absolute  after:left-0 "></span>
            <p className="text-[#7D7F83] text-right min-w-fit whitespace-nowrap leading-relaxed  ml-4">{title}</p>
        </li>
    )
}
const LiBold = ({text, title}) => {
    return (
        <li className="text-[15px] flex justify-between items-center mb-4">
            <h3 className="text-black  mr-1  min-w-fit">{text}</h3>
            <span className="relative w-full after:w-full after:border-b after:border-dashed after:border-b-[#D1D1D1] after:absolute  after:left-0 "></span>
            <p className="text-[#003B73] text-right min-w-fit text-xl whitespace-nowrap leading-relaxed  ml-4">{title}</p>
        </li>
    )
}

export default FormBasket