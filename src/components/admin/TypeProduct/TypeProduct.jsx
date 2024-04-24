import TypeProductAction from 'action/typeProductAction';
import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton';
import InputBlock from 'components/Forms/Input';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LabelCheckbox from "components/Forms/LabelCheckbox"
import TypeToolAction from 'action/typeToolAction';

const TypeProduct = () => {
    const [title, setTitle] = useState("");
    const [_id, setId] = useState("");
    const dispatch = useDispatch()
    const onSetTitle = (e) => setTitle(e.target.value);
    const onSetid = (id) => setId(id);



    const typeTool = useSelector(store => store.admin.typeTool);

    useEffect(() => {
        dispatch(TypeToolAction.getTypeTool())
    }, [])


    const addCategoryFunction = async (e) => {
        e.preventDefault();
        if(_id !== "" ) {
            await TypeProductAction.addTypeProduct(title, _id)
        }
        setTitle("");
    }

    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <form className='md:w-1/2 w-full flex flex-col gap-5'>
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Type product title"} name={"title"} type={"text"}/>
                <div className="flex flex-col gap-5 p-10">
                    <ul className={`flex-col mb-4 gap-4 flex`}>
                        {
                            typeTool.map((item, i) => {
                                return (
                                    <li onClick={() => onSetid(item._id)} key={i}>
                                        <LabelCheckbox type={"radio"} category={typeTool} text={item.title}/>
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

export default TypeProduct