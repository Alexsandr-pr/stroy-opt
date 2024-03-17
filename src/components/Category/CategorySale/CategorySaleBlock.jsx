import React from 'react'
import CategorySaleItem from "./CategorySaleItem"


import image1 from "./img/1.webp"
import image2 from "./img/2.webp"

const data = [
    {
        "title":"Метизные изделия",
        "sale":"до -15%",
        "imgSrc":image1 
    },
    {
        "title":"Лакокрасочные материалы",
        "sale":"до -30%",
        "imgSrc":image2 
    },
]


const CategorySaleBlock = () => {
    return (
        <div className='flex gap-8 flex-col sm:flex-row  lg:flex-col'>
            {
                data.map((item, i) => {
                    return(
                        <CategorySaleItem styles={" w-full sm:w-1/2 lg:w-full"} key={i} {...item}/>
                    )
                })
            }           
        </div>
    )
}

export default CategorySaleBlock