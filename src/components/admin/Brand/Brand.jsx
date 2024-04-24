
import brandAction from "action/brandAction";
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton";
import InputBlock from "components/Forms/Input";
import { useState } from "react";

const Brand = () => {
    const [title, setTitle] = useState("");

    const onSetTitle = (e) => setTitle(e.target.value)

    const addBrandFunction = async (e) => {
        e.preventDefault();
        await brandAction.addBrand(title)
        setTitle("");
    }

    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <form className='md:w-1/2 w-full flex flex-col gap-5'>
                
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Brand name"} name={"title"} type={"text"}/>
                <BigBluebutton cb={addBrandFunction} text={"add brand"}/>
            </form>
        </div>
    )
}

export default Brand