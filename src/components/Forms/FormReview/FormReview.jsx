import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import Textarea from '../Textarea/Textarea'
import InputUpload from '../InputUpload/InputUpload'
import BlockItemsInput from '../BlockEmailAndName/BlockItemsInput'
import InputName from '../InputName/InputName'
import InputEmail from '../InputEmail/InputEmail'
import BlockSend from '../BlockSend/BlockSend'

const FormReview = () => {

    return (
        <div className='flex flex-col'>
            <HeaderBlock title={"Оставить отзыв"}/>
            <form action="#" className='mt-5 md:mt-9 flex flex-col gap-7'>
                <BlockItemsInput left={<InputName/>} right={<InputEmail/>}/>
                <Textarea label={"Текст отзыва *:"}/>
                <InputUpload/>
                <BlockSend/>
            </form>
        </div>
    )
}

export default FormReview