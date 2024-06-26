
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton";
import InputBlock from "components/Forms/Input";
import { useState } from "react";
import CategoryAction from "action/categoryAction";


const CategoryAdd = () => {
    
    const [title, setTitle] = useState("");

    const onSetTitle = (e) => setTitle(e.target.value)

    const addCategoryFunction = async (e) => {
        e.preventDefault();
        await CategoryAction.addCategory( title);
        setTitle("");
    }

    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <form className='md:w-1/2 w-full flex flex-col gap-5'>
                
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Category title"} name={"title"} type={"text"}/>
                <BigBluebutton cb={addCategoryFunction} text={"Send"}/>
            </form>
        </div>
    )
}

export default CategoryAdd