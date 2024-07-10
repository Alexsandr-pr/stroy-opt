import BigBluebutton from "components/Buttons/BigBlueButton/BigBluebutton";
import InputBlock from "components/Forms/Input";
import { useEffect, useState, useRef } from "react";
import cardAction from "action/cardAction";
import { useDispatch, useSelector } from "react-redux";
import CategoryAction from "action/categoryAction";
import TypeProductAction from "action/typeProductAction";
import TypeToolAction from "action/typeToolAction";
import BrandAction from "action/brandAction";
import LabelCheckbox from "components/Forms/LabelCheckbox";
import HeaderBlockTitle from "components/BlockText/HeaderBlockTitle/HeaderBlockTitle";
import Textarea from "components/Forms/Textarea/Textarea";




const Card = () => {
    const [title, setTitle] = useState("");
    const [files, setFiles] = useState([]);
    const [sale, setSale] = useState(0);
    const [brandId, setBrandId] = useState("");
    const [price, setPrice] = useState(0);
    const [categoryId, setCategoryId] = useState("");
    const [typeToolId, setTypeToolid] = useState("");
    const [typeProductId, setTypeProductId] = useState("");
    const [description, setDescription] = useState("");
    const [current, setCurrent] = useState("");

    const onSetCurrent= (e) => setCurrent(e.target.value);
    const onSetTitle = (e) => setTitle(e.target.value);
    const onSetSale = (e) => setSale(e.target.value);
    const onSetDescription = (e) => setDescription(e.target.innerText);
    const onSetBrandId = (id) => setBrandId(id);
    const onSetPrice = (e) => setPrice(e.target.value);
    const onSetCategoryId = (id) => setCategoryId(id);
    const onSetTypeToolId= (id) => setTypeToolid(id);
    const onSetProductId = (id) => setTypeProductId(id);

    const [drag, setDrag] = useState(false);
    
    function dragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
    }

    function dragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false);
    }

    async function onDropHandler(e) {
        e.preventDefault();
        const files = [...e.dataTransfer.files]; 
        setFiles(files);
        setDrag(false);
    }

    async function onAddFiles(e) {
        e.preventDefault();
        const files = [...e.target.files];
        setFiles(files);
    }

    const [count, setCount] = useState(1);
    const [formData, setFormData] = useState([{ key: '', value: '' }]); 

    
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
            await cardAction.addCard(title, files, sale, brandId, price, categoryId, typeToolId, typeProductId, formData, description);  
        }
    }


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CategoryAction.getCategory());
        dispatch(TypeProductAction.getTypeProduct());
        dispatch(TypeToolAction.getTypeTool());
        dispatch(BrandAction.getBrand());
    }, []);

    const brand = useSelector(store => store.admin.brand)
    const typeTool = useSelector(store => store.admin.typeTool);
    const typeProduct = useSelector(store => store.admin.typeProduct);
    const category = useSelector(store => store.admin.category);

    const contentEditableRef = useRef(null);


    const wrapSelectionWithTag = () => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = range.toString();
            const newElement = document.createElement('ul');
            const listItem = document.createElement('li');
            listItem.textContent = selectedText;
            newElement.appendChild(listItem);
            range.deleteContents();
            range.insertNode(newElement);
        }
    };

    const wrapSelectionWithTagStrong = (tag) => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = range.toString();
            const newElement = document.createElement(tag);
            newElement.textContent = selectedText;
            range.deleteContents();
            range.insertNode(newElement);
        }
    };

    const getContent = () => {
        if(contentEditableRef.current) {
            const contentText = contentEditableRef.current.innerText;
            const contentHtml = contentEditableRef.current.innerHTML;
            
            setDescription(contentHtml);
        }
    }


    useEffect(() => {
        getContent();
    }, [description]);


    return (
        <form className="max-w-[1654px] mx-auto px-4 flex gap-6" >
            <div className='md:w-1/2 w-full flex flex-col gap-5'>

            
            <HeaderBlockTitle  title={"Добавьте название товара  "}/>
                <InputBlock setValue={onSetTitle} value={title} placeholder={"Card title"} name={"title"} type={"text"}/>

                <HeaderBlockTitle  title={"Добавьте описание "}/>
                <div  
                    id="contentEditable"
                    ref={contentEditableRef}
                    
                    onInput={onSetDescription} 
                    contentEditable 
                    className="w-full min-h-16 h-auto p-4 border border-dashed rounded-sm outline-none">

                </div>
                <div className="flex gap-4">
                    <BigBluebutton  type={"button"} text={"UL"} cb={e => wrapSelectionWithTag("ul")}/>
                    <BigBluebutton type={"button"} text={"h3"} cb={e => wrapSelectionWithTagStrong("h3")}/>
                    <BigBluebutton type={"button"} text={"strong"} cb={e => wrapSelectionWithTagStrong("strong")}/>
                </div>
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
                <HeaderBlockTitle  title={"Укажите количество едениц товара добавляемого на склад "}/>
                <InputBlock setValue={onSetCurrent} value={current} placeholder={"Card current"} name={"current"} type={"number"}/>
                <HeaderBlockTitle  title={"Укажите цену "}/>
                <InputBlock setValue={onSetPrice} value={price} placeholder={"Card price"} name={"price"} type={"text"}/>
                <HeaderBlockTitle  title={"Укажите скидку на данный товар"}/>
                <InputBlock setValue={onSetSale} value={sale} placeholder={"Card sale"} name={"sale"} type={"text"}/>
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

                <input onInput={e => onAddFiles(e)} type={"file"} multiple className="w-full h-24 bg-price"
                
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)} >
                </input>
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
            <InputBlock value={formData.value} setValue={handleValueChange} placeholder={"Параметр"} name={"title"} type={"text"}/>
        </div>
    );
}







export default Card