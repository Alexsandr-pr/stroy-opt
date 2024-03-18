import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton'
import InputBlock from 'components/Forms/Input'
import LabelCheckbox from 'components/Forms/LabelCheckbox'


const Spam = () => {        
    return (
        <div className='bg-grey2 rounded-md py-5 px-4 md:py-8 md:px-6'>
            <h3 className='text-lg text-title-news text-center font-medium leading-normal mb-3'>Подпишитесь на рассылку</h3>
            <p className='text-nav-link text-sm font-normal text-center mb-3'>Регулярные скидки и спецпредложения, а так же новости компании.</p>
            <form action="#">
                <div className="flex w-full flex-col sm:flex-row gap-3 lg:gap-0 lg:flex-col">
                    <div className="basis-[70%] lg:basis-0 mb-3">
                        <InputBlock placeholder={"Email"} name={"Email"} type={"email"}/>   
                    </div>
                    <div className=" basis-[30%] lg:basis-0 mb-8">
                        <BigBluebutton text={"Подписаться"}/>
                    </div>
                </div>
                <LabelCheckbox text={"Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности"}/>
            </form>
        </div>
    )
}

export default Spam