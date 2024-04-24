
import CategoryAdd from "./CategoryAdd"
import CategoryAction from "action/categoryAction"
import LabelCheckbox from "components/Forms/LabelCheckbox"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"






const Category = () => {

    const dispatch = useDispatch()
    const category = useSelector(store => store.admin.category);

    
    useEffect(() => {
        dispatch(CategoryAction.getCategory())
    }, [])



    return (
        <>
            <CategoryAdd/>

            <div className="flex flex-col gap-5 p-10">
                <ul className={`flex-col mb-4 gap-4 flex`}>
                    {
                        category.map((item, i) => {
                            return (
                                <li key={i}>
                                    <LabelCheckbox type={"radio"} category={category} text={item.title}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


        </>
        
    )
}

export default Category