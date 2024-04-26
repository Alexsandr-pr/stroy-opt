import Text15 from "components/BlockText/Text15/Text15"
import { useSelector } from "react-redux"
import TabsContentParam from "./TabsContentParam"






const TabsContentParamBlock = () => {
    const {params} = useSelector(store => store.card.card)
    const paramsss = JSON.parse(params[0])

    return (
        <div>
            <h3 className="text-main-title font-medium text-xl mb-5">Характеристики товара «Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч»</h3>
            <div className="columns-1 lg:columns-2 mb-8 gap-24">
                {
                    paramsss.map((item, i) => {  
                        const {key, value} = item
                        const title= key;
                        return (
                            <TabsContentParam key={key} title={title} value={value}/>
                        )
                    })
                }
            </div>
            
            <Text15 text={"Производитель оставляет за собой право без уведомления продавца менять характеристики, внешний вид, комплектацию товара и место его производства. Указанная информация не является публичной офертой."}/>
        </div>
    )
}

export default TabsContentParamBlock