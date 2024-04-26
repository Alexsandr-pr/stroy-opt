import Title22 from "components/BlockText/Title22/Title22"


import { useSelector } from "react-redux"
import { API_URL } from "../../../../../config"





const TabsContentInfo = () => {

    const {title, images, description} = useSelector(store => store.card.card)


    const imagePath = `${API_URL}` + images[2]

    return (
        <div>
            <div className="mb-5">
                <Title22 title={title}/>
            </div>
            
            <div className="flex lg:flex-row flex-col items-center ">
                <div id="description" dangerouslySetInnerHTML={{__html:description}} className="flex flex-col  text-main-title  basis-[70%] ">
                    
                </div>

                <div className="relative">
                    <img src={imagePath} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default TabsContentInfo