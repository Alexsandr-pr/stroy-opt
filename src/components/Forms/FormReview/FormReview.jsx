import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'
import InputEmail from '../InputEmail/InputEmail'
import InputName from '../InputName/InputName'
import Textarea from '../Textarea/Textarea'
import InputUpload from '../InputUpload/InputUpload'
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton'
import LabelCheckbox from '../LabelCheckbox'

const FormReview = () => {


    return (
        <div className='flex flex-col'>
            <HeaderBlock title={"Оставить отзыв"}/>
            <form action="#" className='mt-5 md:mt-9 flex flex-col gap-7'>
                <div className="gap-7 flex flex-col sm:flex-row">
                    <div className=" w-full sm:w-1/2">
                        <InputName/>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <InputEmail/>
                    </div>
                </div>
                <Textarea/>
                <InputUpload/>
                <div className="flex flex-col sm:flex-row  gap-8">
                    <div className=" w-full sm:w-2/5 xl:w-1/5">
                        <BigBluebutton text={"Отправить"}/>
                    </div>
                    <div className="w-full sm:w-3/5 xl:w-2/5">
                        <LabelCheckbox text={"Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности"}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormReview