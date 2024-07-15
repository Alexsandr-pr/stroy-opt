import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"
import { useDispatch, useSelector } from "react-redux"
import CatalogAction from "action/catalogAction"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

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
    const { page, limit } = useParams();
    const counterPerPage = useSelector(store => store.catalog.counterPerPage);
    const dispatch = useDispatch()

    // const onChangeCounter = (number) => {
    //     dispatch(CatalogAction.changeCountPerPage(number))
    // }

    const navigate = useNavigate();

    useEffect(() => {
        // Выполните здесь любые действия, необходимые при изменении page или limit
        console.log(`Current page: ${page}, limit: ${limit}`);
    }, [page, limit]);

    const handlePageChange = (newPage) => {
        navigate(`/catalog/${newPage}/${limit}`);
    };

    const handleLimitChange = (newLimit) => {
        navigate(`/catalog/${page}/${newLimit}`);
    };


    return (
        <ul className="flex gap-2.5">
            {
                data.map(({title}) => {
                    
                    return (
                        <ButtonCategory cb={() => handleLimitChange(title)} active={title === counterPerPage} key={title} title={title}/>
                    )
                })
            }
        </ul>
    )
}

export default ShowToPage