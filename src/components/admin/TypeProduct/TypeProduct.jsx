import TypeProductAction from 'action/typeProductAction';
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton';
import InputBlock from 'components/Forms/Input';
import { useState } from 'react'

const TypeProduct = () => {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [_id, setId] = useState("");

    const onSetType = (e) => setType(e.target.value);
    const onSetTitle = (e) => setTitle(e.target.value);
    const onSetid = (e) => setId(e.target.value);

    const addCategoryFunction = async (e) => {
        e.preventDefault();
        await TypeProductAction.addTypeProduct(type, title, _id)
        setType("");
        setTitle("");
        setId("");
    }

    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <form className='md:w-1/2 w-full flex flex-col gap-5'>
                <InputBlock setValue={onSetType} value={type} placeholder={"type product type"} name={"type"} type={"text"}/>
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Type product title"} name={"title"} type={"text"}/>
                <InputBlock setValue={onSetid} value={_id} placeholder={"Type product id"} name={"id"} type={"text"}/>
                <BigBluebutton cb={addCategoryFunction} text={"Send"}/>
            </form>
        </div>
    )
}

export default TypeProduct