import { addCategory } from "action/categoryAction";
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton";
import InputBlock from "components/Forms/Input";
import { useState } from "react";



const CategoryAdd = () => {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");

    const onSetType = (e) => setType(e.target.value)
    const onSetTitle = (e) => setTitle(e.target.value)

    const addCategoryFunction = async (e) => {
        e.preventDefault();
        await addCategory(type, title);
        setType("");
        setTitle("");
    }

    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <form className='md:w-1/2 w-full flex flex-col gap-5'>
                <InputBlock setValue={onSetType} value={type} placeholder={"Category type"} name={"type"} type={"text"}/>
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Category title"} name={"title"} type={"text"}/>
                <BigBluebutton cb={addCategoryFunction} text={"Send"}/>
            </form>
        </div>
        
    )
}

export default CategoryAdd