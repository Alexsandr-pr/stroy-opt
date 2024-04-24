import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton";
import InputBlock from "components/Forms/Input";
import { useEffect, useState } from "react";
import cardAction from "action/cardAction";
import { useDispatch, useSelector } from "react-redux";
import CategoryAction from "action/categoryAction";
import TypeProductAction from "action/typeProductAction";
import TypeToolAction from "action/typeToolAction";
import BrandAction from "action/brandAction";
import LabelCheckbox from "components/Forms/LabelCheckbox";
import HeaderBlockTitle from "components/BlockText/HeaderBlockTitle/HeaderBlockTitle";


const Card = () => {
    const [title, setTitle] = useState("");
    const [files, setFiles] = useState([]);
    const [code, setCode] = useState(0);
    const [sale, setSale] = useState(0);
    const [brandId, setBrandId] = useState("")
    const [price, setPrice] = useState(0);
    const [categoryId, setCategoryId] = useState("")
    const [typeToolId, setTypeToolid] = useState("")
    const [typeProductId, setTypeProductId] = useState("")

    const onSetTitle = (e) => setTitle(e.target.value)
    const onSetCode = (e) => setCode(e.target.value)
    const onSetSale = (e) => setSale(e.target.value)

    const onSetBrandId = (id) => setBrandId(id)
    const onSetPrice = (e) => setPrice(e.target.value)
    const onSetCategoryId = (id) => setCategoryId(id)
    const onSetTypeToolId= (id) => setTypeToolid(id)
    const onSetProductId = (id) => setTypeProductId(id)

    const [drag, setDrag] = useState(false)
    
    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    async function onDropHandler(e) {
        e.preventDefault();

        const files = [...e.dataTransfer.files]; 
        setFiles(files)
        setDrag(false);
    }

    const [count, setCount] = useState(1); // Счетчик для количества блоков
    const [formData, setFormData] = useState([{ key: '', value: '' }]); // Состояние для данных формы

    
    const plusNumber = () => {
        setCount(prevCount => prevCount + 1);
        setFormData(prevFormData => [...prevFormData, { key: '', value: '' }]);
    };

    const minusNumber = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
            setFormData(prevFormData => prevFormData.slice(0, -1));
        }
    };

    
    const handleInputChange = (index, key, value) => {
        const newFormData = [...formData];
        newFormData[index] = { key, value };
        setFormData(newFormData);
    };

    const addCategoryFunction = async (e) => {
        e.preventDefault();
        if(categoryId !== "" && typeToolId !== "" && typeProductId !== "" && brandId !== ""  ) {
            await cardAction.addCard(title, files, code, sale, brandId, price, categoryId, typeToolId, typeProductId, formData);
        }
    }


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CategoryAction.getCategory())
        dispatch(TypeProductAction.getTypeProduct())
        dispatch(TypeToolAction.getTypeTool())
        dispatch(BrandAction.getBrand())
    }, [])
    const brand = useSelector(store => store.admin.brand)
    const typeTool = useSelector(store => store.admin.typeTool);
    const typeProduct = useSelector(store => store.admin.typeProduct);
    
    const category = useSelector(store => store.admin.category);

    return (
        <form className="max-w-[1654px] mx-auto px-4 flex gap-6" >
            <div className='md:w-1/2 w-full flex flex-col gap-5'>
                
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Card title"} name={"title"} type={"text"}/>

                <InputBlock setValue={onSetCode} value={code} placeholder={"Card code articul"} name={"title"} type={"text"}/>
                

                <HeaderBlockTitle  title={" Укажите бренд "}/>
                <ul className={`flex-col mb-4 gap-4 flex`}>
                        {
                            brand.map((item, i) => {
                                return (
                                    <li onClick={() => onSetBrandId(item._id)} key={i}>
                                        <LabelCheckbox type={"radio"} category={brand} text={item.title}/>
                                    </li>
                                )
                            })
                        }
                </ul>
                <InputBlock setValue={onSetPrice} value={price} placeholder={"Card price"} name={"title"} type={"text"}/>
                <InputBlock setValue={onSetSale} value={sale} placeholder={"Card category id"} name={"title"} type={"text"}/>
                <HeaderBlockTitle  title={"Выберите категорию "}/>
                <ul className={`flex-col mb-4 gap-4 flex`}>
                        {
                            category.map((item, i) => {
                                return (
                                    <li onClick={() => onSetCategoryId(item._id)} key={i}>
                                        <LabelCheckbox type={"radio"} category={category} text={item.title}/>
                                    </li>
                                )
                            })
                        }
                </ul>
                
                <HeaderBlockTitle  title={"Выберите под тип продукции "}/>
                <ul className={`flex-col mb-4 gap-4 flex`}>
                        {
                            typeTool.map((item, i) => {
                                return (
                                    <li onClick={() => onSetTypeToolId(item._id)} key={i}>
                                        <LabelCheckbox type={"radio"} category={typeTool} text={item.title}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                

                    <HeaderBlockTitle  title={"Выберите тип продукта "}/>
                    <ul className={`flex-col mb-4 gap-4 flex`}>
                        {
                            typeProduct.map((item, i) => {
                                return (
                                    <li onClick={() => onSetProductId(item._id)} key={i}>
                                        <LabelCheckbox type={"radio"} category={typeProduct} text={item.title}/>
                                    </li>
                                )
                            })
                        }
                    </ul>

                <div className="w-80 h-24 bg-price"
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)} >
                </div>
                <BigBluebutton cb={addCategoryFunction} text={"Send"}/>
            </div>



            <div>
                <div className="flex flex-col gap-3">
                {
                    [...Array(count)].map((_, index) => (
                        <InputBlocks
                            key={index}
                            index={index}
                            formData={formData[index]}
                            handleInputChange={handleInputChange}
                        />
                    ))
                }
                </div>
                <div className="mt-12 grid grid-cols-2 gap-4">
                    <BigBluebutton cb={plusNumber} text={"Добавить еще поле ввода"} />
                    <BigBluebutton cb={minusNumber} text={"Удалить поле ввода"} />
                </div>
            </div>

        </form>
    )
}


function InputBlocks({ index, formData, handleInputChange }) {
    const handleKeyChange = (event) => {
        handleInputChange(index, event.target.value, formData.value);
    };
    
    const handleValueChange = (event) => {
    handleInputChange(index, formData.key, event.target.value);
    };

    return (
        <div className="grid grid-cols-2 gap-4 ">

            <InputBlock value={formData.key} setValue={handleKeyChange} placeholder={"Характеристика"} name={"title"} type={"text"}/>
            <InputBlock value={formData.value} setValue={handleValueChange} placeholder={"Характеристика"} name={"title"} type={"text"}/>
        </div>
    );
}


export default Card