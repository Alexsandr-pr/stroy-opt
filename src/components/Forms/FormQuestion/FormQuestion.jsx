
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'
import InputName from '../InputName/InputName'
import InputTel from '../InputTel/InputTel'
import BlockItemsInput from '../BlockEmailAndName/BlockItemsInput'
import Textarea from '../Textarea/Textarea'
import BlockSend from '../BlockSend/BlockSend'

const FormQuestion = () => {
    return (
        <div className='bg-[#F9FAFB] py-16 px-4' >
            <div className="flex  justify-center mb-12">
                <HeaderBlock title={"У вас есть вопросы? С радостью ответим на них!"}/>
                
            </div>
            <div className="flex justify-center">
                <form className='flex flex-col gap-7 max-w-[736px] ' action="#">
                    <BlockItemsInput
                        left={<InputName/>}
                        right={<InputTel/>}
                    />
                    <Textarea label={"Текст сообщения *:"} />
                    <BlockSend/>
                </form>
            </div>
        </div>
    )
}

export default FormQuestion