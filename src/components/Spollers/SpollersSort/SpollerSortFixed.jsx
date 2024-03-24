import { useState } from "react"
import SpollerSort from "./SpollerSort"






const SpollerSortFixed = ({text}) => {

    const [active, setActive] = useState(false);
    const onChangeActive = () => setActive(prev => !prev)

    return (
        <div className="relative">
            <SpollerSort active={active} text={text} cb={onChangeActive} styles={" border border-[#DFE0E2]  relative text-sm text-[#363839] px-5 w-full sm:min-w-[242px]"}/>
            <ul className={`absolute z-[150]  ${active ? " opacity-100 visible" : "opacity-0 "}`}>
                <li className="text-sm font-normal bg-white border border-[#DFE0E2] text-[#363839] flex min-w-[242px] justify-between gap-5 py-3 px-5 items-center ">
                    Цена по убыванию
                </li>
                <li className="text-sm font-normal bg-white border border-[#DFE0E2] text-[#363839] flex min-w-[242px] justify-between gap-5 py-3 px-5 items-center ">
                    Цена по убыванию
                </li>
                <li className="text-sm font-normal rounded-b-md bg-white border border-[#DFE0E2] text-[#363839] flex min-w-[242px] justify-between gap-5 py-3 px-5 items-center ">
                    Цена по убыванию
                </li>
            </ul>
        </div>
    )
}

export default SpollerSortFixed