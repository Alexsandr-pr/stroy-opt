import { useState } from "react"
import SpollerSort from "../SpollersSort/SpollerSort"
import LabelCheckbox from "components/Forms/LabelCheckbox"


const SpollerSortRelative = ({data, text}) => {

    const [active, setActive] = useState(false);
    const [number, setNumber] = useState(2);
    const [activeButton , setActiveButton] = useState(true)
    const onChangeActive = () => setActive(prev => !prev)

    const onAddNumbers = () => {
        setNumber(data.lenght)
        setActiveButton(false)
    }
    
    return (
        <>
            <div className="">
                <SpollerSort active={active} cb={onChangeActive} styles={" w-full font-medium text-lg text-[#414446]"} text={text}/>
            </div>
            <div className={`${active ? "h-auto flex flex-col mb-8" : "h-0 hidden"}`}>
                <ul className={`flex-col mb-4 gap-4 flex`}>
                    {
                        data.map((item, i) => {
                            if(i  > number) return
                            return (
                                <li key={i}>
                                    <LabelCheckbox type={"checkbox"} text={item.text}/>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    activeButton && <button onClick={() => onAddNumbers()} className="text-blue2 text-sm font-bold text-left">Показать все</button>
                }
                
            </div>
        </>
    )
}

export default SpollerSortRelative