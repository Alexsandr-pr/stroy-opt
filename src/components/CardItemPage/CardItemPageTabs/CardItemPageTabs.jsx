
import { useSelector } from "react-redux"
import TabsButtons from "../Tabs/TabsButtons"

import TabsContentParamBlock from "../TabsContent/TabsContentParam/TabsContentParamBlock"
import TabsContentOrder from "../TabsContent/TabsContentOrder/TabsContentOrder";
import TabsContentInfo from "../TabsContent/TabsContentInfo/TabsContentInfo";


const CardItemPageTabs = () => {

    const tabsParam = useSelector(state => state.card.typeParam);

    return (
        <div>
            <TabsButtons/>
            {
                tabsParam === "params" && <TabsContentParamBlock/>
            }
            {
                tabsParam === "info" && <TabsContentInfo/>
            }
            {
                tabsParam === "order" && <TabsContentOrder/>
            }
        </div>
    )
}

export default CardItemPageTabs