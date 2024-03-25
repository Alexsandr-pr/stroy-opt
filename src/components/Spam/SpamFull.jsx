import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton"
import InputBlock from "components/Forms/Input"
import InputEmail from "components/Forms/InputEmail/InputEmail"
import LabelCheckbox from "components/Forms/LabelCheckbox"


const SpamFull = () => {
    return ( 
        <div className='bg-grey2 mb-20 lg:mb-28 flex lg:flex-row flex-col rounded-md items-center xl:items-end gap-8 py-5 px-4 md:py-8 md:px-6'>
            <div className="flex flex-col lg:w-1/4 text-center lg:text-left">
                <h3 className='text-lg text-title-news font-medium  leading-normal '>Подпишитесь на рассылку</h3>
                <p className='text-nav-link text-sm  font-normal '>Регулярные скидки и спецпредложения, а так же новости компании.</p>
            </div>
            <form action="#" className="flex lg:flex-row flex-col gap-8 items-center xl:items-end ">
                <div className="flex w-full flex-col sm:flex-row lg:flex-col xl:flex-row items-end gap-4">
                    <div className="w-full">
                        <InputEmail/>
                    </div>
                    <div className=" w-full sm:w-auto lg:w-full xl:w-auto">
                        <BigBluebutton text={"Подписаться"}/>
                    </div>
                </div>
                <div className="">
                    <LabelCheckbox text={"Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности"}/>
                </div>
            </form>
        </div>
    )
}

export default SpamFull