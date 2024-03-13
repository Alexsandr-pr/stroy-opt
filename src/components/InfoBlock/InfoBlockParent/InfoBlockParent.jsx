import React from 'react'

import imageBgDesktop from "../img/arrangement-yellow-set-repair-tools.webp";
import imageBgMobile from "../img/arrangement-yellow-set-repair-tools-mobile.webp";

const InfoBlockParent = ({children}) => {
    return (
        <div className='relative bg-grey2'>
            <div className="absolute right-0 bottom-0 max-w-full opacity-30 xl:opacity-50 2xl:opacity-100">
                <picture className='z-1 relative'>
                    <source media="(min-width: 1280px)" srcSet={imageBgDesktop} type="image/webp" />
                    <img src={imageBgMobile} alt="fon" />
                </picture>
            </div>
            <div className="max-w-[1654px] mx-auto px-4">
                <div className="relative z-2  xl:max-w-4xl">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InfoBlockParent