import cardAction from "action/cardAction"
import TitleMain from "components/BlockText/TitleMain/TitleMain"
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs"
import CatalogLeft from "components/Catalog/CatalogLeft/CatalogLeft"
import CatalogRight from "components/Catalog/CatalogRight/CatalogRight"

import { useEffect } from "react"

import {  useDispatch, useSelector } from "react-redux"
import {  useNavigate, useParams } from "react-router-dom"


const Catalog = () => {

    const {page, limit} = useParams();
    const navigate = useNavigate();
    const activeFilter = useSelector(state => state.catalog.activeFilter);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardAction.getCardsOnDb(limit, page));
    }, [limit, page])

    // useEffect(() => {
    //     navigate(`catalog/1/8`);
    // },[])

    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <Breadcrumbs page={"Электроинструмент"}/>
            <div className="mb-12">
                <TitleMain title={"Электроинструмент"}/>
            </div>
            <div className="flex gap-5"> 
                <div className={`fixed  w-full h-full top-0 lg:left-0 z-[200] lg:h-auto bg-modals lg:bg-white lg:relative lg:w-1/5 ${activeFilter ? " left-0" : " left-[-120%]" }`} >
                    <CatalogLeft/>
                </div>
                <div className="w-full lg:w-4/5">
                    <CatalogRight/>
                </div>
            </div>
        </div>
    )
}

export default Catalog