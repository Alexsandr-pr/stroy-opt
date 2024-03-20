import React from 'react'
import LabelCheckbox from '../LabelCheckbox'
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton'

const BlockSend = () => {
    return (
        <div className="flex flex-col sm:flex-row  gap-8">
            <div className=" w-full sm:w-2/5 xl:w-1/5">
                <BigBluebutton text={"Отправить"}/>
            </div>
            <div className="w-full sm:w-3/5 xl:w-2/5">
                <LabelCheckbox text={"Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности"}/>
            </div>
        </div>
    )
}

export default BlockSend