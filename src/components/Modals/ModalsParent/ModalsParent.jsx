import HeaderBlockTitle from "components/BlockText/HeaderBlockTitle/HeaderBlockTitle"
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton"

import LabelCheckbox from "components/Forms/LabelCheckbox"
import IconCloseModal from "components/Icon/IconCloseModal"


const ModalsParent = ({
    children,
    title,
    buttonText
}) => {

    return (
        <div className="fixed w-full h-full flex justify-center  z-[60] bg-modals  top-0 left-0  items-start sm:items-center">
            <button className="absolute right-4 sm:right-12 top-12">
                <IconCloseModal/>
            </button>
            <form className="w-full z-[100] mt-24 sm:mt-0 mx-4 opacity-100 relative sm:w-[450px] lg:w-[618px] flex flex-col gap-5 lg:gap-6 rounded-lg bg-white p-5 lg:p-10">
                <div className="text-center">
                    <HeaderBlockTitle title={title}/>
                </div>
                {children}
                <LabelCheckbox text={"Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности"}/>
                <BigBluebutton text={buttonText}/>
            </form>
        </div>
    )
}

export default ModalsParent