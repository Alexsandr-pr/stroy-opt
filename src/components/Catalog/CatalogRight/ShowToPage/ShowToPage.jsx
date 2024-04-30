import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"
import { useDispatch, useSelector } from "react-redux"
import CatalogAction from "action/catalogAction"

const data = [
    {
        "title": 8,
    },
    {
        "title": 16,
    },
    {
        "title": 24,
    },
]

const ShowToPage = () => {
    const counterPerPage = useSelector(store => store.catalog.counterPerPage);
    const dispatch = useDispatch()
    const onChangeCounter = (number) => {
        dispatch(CatalogAction.changeCountPerPage(number))
    }
    return (
        <ul className="flex gap-2.5">
            {
                data.map(({title}) => {
                    
                    return (
                        <ButtonCategory cb={() => onChangeCounter(title)} active={title === counterPerPage} key={title} title={title}/>
                    )
                })
            }
        </ul>
    )
}

export default ShowToPage