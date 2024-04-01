import { getCategory } from "action/categoryAction"
import CategoryAdd from "./CategoryAdd"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"



const Category = () => {
    const dispatch = useDispatch()

    const category = useSelector(state => state.admin.category) || null


    const arrayu =  useCallback(() => {
        console.log("fetching")
        dispatch(getCategory())
    }, [])
    
    useEffect(() => {
        arrayu()
    }, [])
    return (
        <>
            <CategoryAdd/>
            <div className="flex flex-col gap-4">
                {
                    category.map(({title, _id}) => {
                        return (
                            <div key={_id} className="flex gap-4">
                                <p>{title}</p>
                                <p>{_id}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default Category