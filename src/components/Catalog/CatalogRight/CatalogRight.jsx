import Pagination from "components/Pagination/Pagination"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import BlockTovarItem from "components/BlockTovar/BlockTovarItem/BlockTovarItem";
import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory";


import image1 from "./img/1.webp";
import image2 from "./img/2.webp";
import image3 from "./img/3.webp";
import image4 from "./img/4.webp";
import image5 from "./img/5.webp";
import image6 from "./img/6.webp";
import image7 from "./img/7.webp";
import image8 from "./img/8.webp";
import image9 from "./img/9.webp";
import ParentButtonRight from "./ParentButtonRight/ParentButtonRight";
import ShowToPage from "./ShowToPage/ShowToPage";

import SpollerSortFixed from "components/Spollers/SpollersSort/SpollerSortFixed";
import BurgerIcon from "components/Icon/BurgerIcon";
import { useDispatch } from "react-redux";
import { addActiveFilter } from "../../../store/CatalogReducer";
import CatalogInfoText from "./CatalogInfoText/CatalogInfoText";

const categoryFilter = [
    {
        "id": uuidv4(),
        "title":"Набор",
        "active":false,
    },
    {
        "id": uuidv4(),
        "title":"MAKITA",
        "active":false,
    },
    {
        "id": uuidv4(),
        "title":"от 3 000 до 52 500 ",
        "active":false,
    },
    {
        "id": uuidv4(),
        "title":"Очистить все",
        "active":true,
    }

]

const data = [
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image1,
        "active":true,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image2,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image3,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image4,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image5,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image6,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image7,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image8,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image9,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image1,
        "active":true,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image2,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image3,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image4,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image5,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image6,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image7,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image8,
        "active":false,
        "id":uuidv4()
    },
    {
        "article":"XJ89YHGO",
        "title":"Перфоратор универсальный Wander X645-46 GF 1450W",
        "price": "12789",
        "imgSrc":image9,
        "active":false,
        "id":uuidv4()
    }
]


const CatalogRight = () => {
    const dispatch = useDispatch()
    
    const [post, setPost] = useState(data)

    const changeActive = (id) => {
        setPost(prev  => prev.map((item) => {
            if(item.id === id) {
                return {...item, active: true}
            }
            return item
        }))
    }

    const addActiveFilters = () => {
        dispatch(addActiveFilter())
    }


    return (
        <div className="mb-20 lg:mb-28">
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
            <div className="flex gap-2.5 flex-wrap mb-8">
                {
                    categoryFilter.map((item, i) => {
                        const {active} = item
                        return (
                            <ButtonCategory key={i} {...item}>
                                {
                                    <span  className="block hover:stroke-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 9" fill="none">
                                            <path className="hover:stroke-blue" opacity="1" d="M8 1L1 8M1 1L8 8" stroke={active ? "#186FD4" : "#5B5B5C"} strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                }
                            </ButtonCategory>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 gap-4 mb-10 sm:mb-12 lg:mb-24">
                {
                    post.map((item) => {
                            const { id} = item
                            return (
                                    <BlockTovarItem 
                                        key={id}
                                        {...item} changeActive={changeActive}/>
                                
                            )
                        })
                }
            </div>
            <div className="flex justify-center mb-12 lg:mb-20">
                <Pagination/>
            </div>
            <CatalogInfoText/>
        </div>
    )
}

export default CatalogRight