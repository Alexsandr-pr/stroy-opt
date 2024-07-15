import { cabinetButtons } from 'consts/consts';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const MyProfile = () => {
    const {pathname} = useLocation();
    return (
        <div className='grid items-center grid-cols-7  gap-4'>
            
            {
                cabinetButtons.map((item) => {
                    const {text, state} = item;
                    const isActive = `/user/${state}` === pathname;
                    return (
                        <Link to={`/user/${state}`} key={state}  className={`flex justify-center text-center h-[133px] gap-4 items-center p-3 rounded-md border ${isActive ? " bg-blue text-white border-blue" : "border-[#EFF1F3]  bg-white"} `}>
                            <div className="flex  flex-col items-center gap-2.5">
                                <div  className={`${isActive ? " text-white" : " text-[rgba(163, 174, 189, 1)]"} w-8 h-8`}>
                                    <item.component/>
                                </div>
                                <p className=" text-[13px] font-medium ">{text}</p>
                            </div>
                            
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default MyProfile