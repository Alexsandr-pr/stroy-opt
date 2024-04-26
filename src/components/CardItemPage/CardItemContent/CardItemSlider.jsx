
import { useSelector } from "react-redux"
import image from "../img/dr.webp"
import { API_URL } from "../../../../config"
import { useEffect } from "react"
const CardItemSlider = () => {

    const {images} = useSelector(store => store.card.card) || []
    
    const  imagePath = `${API_URL}` + images[1];


    return (
        <div className="flex">
            <div className="w-24">
   
            </div>
            <div className="relative ">
                <img  width="544" height="544" src={imagePath} alt="" />
            </div>
        </div>
       
    )
}

export default CardItemSlider