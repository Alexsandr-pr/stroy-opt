import Pagination from "components/Pagination/Pagination"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import BlockTovarItem from "components/BlockTovar/BlockTovarItem/BlockTovarItem";
import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory";

import ParentButtonRight from "./ParentButtonRight/ParentButtonRight";
import ShowToPage from "./ShowToPage/ShowToPage";

import SpollerSortFixed from "components/Spollers/SpollersSort/SpollerSortFixed";
import BurgerIcon from "components/Icon/BurgerIcon";
import { useDispatch, useSelector } from "react-redux";
import { addActiveFilter } from "../../../store/CatalogReducer";
import CatalogInfoText from "./CatalogInfoText/CatalogInfoText";
import { API_URL } from "../../../../config";
import catalogAction from "action/catalogAction";
import ButtonItems from "components/Buttons/ButtonsItems/ButtonItems";
import ButtonCategoryClear from "components/Buttons/ButtonCategory/ButtonCategoryClear";
import ButtonItemsClear from "components/Buttons/ButtonsItems/ButtonItemsClear";
import { useNavigate, useParams } from "react-router-dom";

const categoryFilter = [
    {
        "id": uuidv4(),
        "title":"Набор",
    },
    {
        "id": uuidv4(),
        "title":"MAKITA",
    },
    {
        "id": uuidv4(),
        "title":"от 3 000 до 52 500 ",
    },
    {
        "id": uuidv4(),
        "title":"Очистить все",
    }

]

const CatalogRight = () => {
    const dispatch = useDispatch()
    const { page, limit } = useParams();
    // const counterPerPage = useSelector(store => store.catalog.counterPerPage);
    // const dispatch = useDispatch()

    // // const onChangeCounter = (number) => {
    // //     dispatch(CatalogAction.changeCountPerPage(number))
    // // }

    const navigate = useNavigate();

    // useEffect(() => {
    //     // Выполните здесь любые действия, необходимые при изменении page или limit
    //     console.log(`Current page: ${page}, limit: ${limit}`);
    // }, [page, limit]);

    const handlePageChange = (newPage) => {
        navigate(`/catalog/${newPage}/${limit}`);
    };
    const cards = useSelector(store => store.card.cards)
    const { cardsLenght, loadingCatalog} = useSelector(store => store.catalog)

    const catalogRef = useRef([]);

    let offTop = catalogRef.current;

    useEffect(() => {
        offTop = catalogRef.current.offsetTop;
    },[page])

    const scrollToElement = () => {
        offTop = catalogRef.current.offsetTop
        window.scrollTo({
            top: offTop - 100,
            behavior:"smooth"
        })
    }

    const addActiveFilters = () => {
        dispatch(addActiveFilter())
    }

    // const onChangePage = (number) => {
    //     dispatch(catalogAction.changePage(number))
    //     scrollToElement()
    // }

    const nextPage = () => {
        handlePageChange(+page + 1)
        scrollToElement()
    }
    const prevPage = () => {
        handlePageChange(+page - 1)
        scrollToElement()
    }

    return (
        <div  className="mb-20 lg:mb-28">
            <button onClick={() => addActiveFilters()} className="text-base mb-4 flex lg:hidden items-center gap-2.5 py-5  border-y w-full justify-center border-y-[#DFDFDF] text-main-title font-normal">
                <BurgerIcon/>
                <span>Показать фильтры</span>
            </button>
            <div className="flex justify-between  gap-5 items-center mb-8">
                <ParentButtonRight title={"Сортировка:"}>
                    <SpollerSortFixed text={"Цена по убыванию"}/>
                </ParentButtonRight>
                <div className="hidden md:block ">
                    <ParentButtonRight title={"Показывать по:"}>
                        <ShowToPage/>
                    </ParentButtonRight>
                </div>
            </div>
            <div ref={catalogRef} className=" mb-8">
                <ButtonItemsClear data={categoryFilter}/>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 gap-4 mb-10 sm:mb-12 lg:mb-24">
                {   loadingCatalog ? "Loading ...." :
                    cards.map((item) => {
                            const { _id, images} = item
                            const imagePath = `${API_URL}` + images[0]
                            return (
                                    <BlockTovarItem 
                                        key={_id}
                                        {...item} imgSrc={imagePath}/>
                                
                            )
                        })
                }
            </div>
            <div className="flex justify-center mb-12 lg:mb-20">
                <Pagination cbNext={nextPage} cbPrev={prevPage} currentPage={page} onChangePage={handlePageChange} activePage={page} postsLenght={cardsLenght} countriesPerPage={limit}/>
            </div>
            <CatalogInfoText/>
        </div>
    )
}

export default CatalogRight