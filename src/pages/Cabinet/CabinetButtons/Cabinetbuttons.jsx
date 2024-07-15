


import { cabinetButtons } from "consts/consts";
import { Link, useLocation } from "react-router-dom"


const Cabinetbuttons = () => {
    const {pathname} = useLocation();

    return (
        <>
            {
                cabinetButtons.map((item) => {
                    const {text, state} = item;
                    const isActive = `/user/${state}` === pathname;
                    return (
                        <Link to={state} key={state}  className={`flex cursor-pointer buttons-settings-account items-center gap-2.5  transition-all duration-300 py-6 border-b border-solid px-8 ${isActive ?  " bg-button border-b-button text-white active " :"  bg-white  border-b-[#EDF0F2] text-main"}`}>
                            <div className="flex items-center gap-2.5">
                                <div className={`${isActive ? " text-white" : " text-[rgba(163, 174, 189, 1)]"}`}>
                                    <item.component/>
                                </div>
                                <p className=" text-base font-medium ">{text}</p>
                            </div>
                            {
                                state === "likes" &&  <span>7</span>
                            }
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Cabinetbuttons