import TypeToolAction from "action/typeToolAction";
import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton";
import InputBlock from "components/Forms/Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryAction from "action/categoryAction"
import LabelCheckbox from "components/Forms/LabelCheckbox"


const TypeTool = () => {
    const [title, setTitle] = useState("");
    const [_id, setId] = useState("");
    const dispatch = useDispatch()
    const onSetTitle = (e) => setTitle(e.target.value);




    const onSetid = (id ) =>  {
        setId(id)
    }


    const category = useSelector(store => store.admin.category);

    useEffect(() => {
        dispatch(CategoryAction.getCategory())
    }, [])



    const addCategoryFunction = async (e) => {
        e.preventDefault();

        console.log(_id)
        if(_id !== "")  {
            await TypeToolAction.addTypeTool( title, _id)
        }
        setTitle("");
    }

    return (

        <div className="max-w-[1654px] mx-auto px-4">
            <form className='md:w-1/2 w-full flex flex-col gap-5'>
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Type tool title"} name={"title"} type={"text"}/>

                <div className="flex flex-col gap-5 p-10">
                    <ul className={`flex-col mb-4 gap-4 flex`}>
                        {
                            category.map((item, i) => {
                                return (
                                    <li onClick={() => onSetid(item._id)} key={i}>
                                        <LabelCheckbox type={"radio"} category={category} text={item.title}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <BigBluebutton cb={addCategoryFunction} text={"Send"}/>
            </form>
        </div>
    )
}

export default TypeTool