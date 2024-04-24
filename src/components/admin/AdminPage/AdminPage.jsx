
import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"
import { useState } from "react"
import Card from "../Card/Card"
import Category from "../Category/Category"
import TypeTool from "../TypeTool/TypeTool"
import TypeProduct from "../TypeProduct/TypeProduct"
import Brand from "../Brand/Brand"

const data = [
    {
        "text":"Общая категория",
        "blockCategory": "category",
        "active": true
    },
    {
        "text":"Категория товаров",
        "blockCategory": "typetool",
        "active": false
    },
    {
        "text":"Вид товара",
        "blockCategory": "typeproduct",
        "active": false
    },
    {
        "text":"Добавление бренда",
        "blockCategory": "brand",
        "active": false
    },
    {
        "text":"Добавление товара",
        "blockCategory": "card",
        "active": false
    }
]



const AdminPage = () => {
    const [block, setBlock] = useState("card")

    const onChangeBlock = (category) => setBlock(category);
    

    return (
        <div className="my-10 max-w-[1654px] mx-auto px-4">
            
            <div className="flex lg:flex-row flex-col gap-5 mb-12">
                {
                    data.map((item) => {
                        const {text, blockCategory} = item
                        return (
                            <ButtonCategory category={blockCategory} key={blockCategory} cb={onChangeBlock} active={blockCategory === block} title={text}/>
                        )
                    })
                }
            </div>

            <div className="">
                {   block === "card" && <Card/>   }
                {   block === "category" && <Category/>   }
                {   block === "typetool" && <TypeTool/>   }
                {   block === "typeproduct" && <TypeProduct/>   }
                {   block === "brand" && <Brand/>   }
            </div>
        </div>



    )
}

export default AdminPage