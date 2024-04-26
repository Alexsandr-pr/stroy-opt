

import IconCheck from "components/Icon/IconCheck"
import { useSelector } from "react-redux"

const YesOrNo = () => {

    const {current} = useSelector(store => store.card.card)


    if(current > 0) {
        return (
            <div className="text-[#3B4048] text-sm flex items-center gap-2.5">
                <IconCheck/>
                В наличии
            </div>
        )
    }

    return (
        <div className="text-[#3B4048] text-sm flex items-center gap-2.5">
            
            Нет в наличии
        </div>
    )
    
}

export default YesOrNo