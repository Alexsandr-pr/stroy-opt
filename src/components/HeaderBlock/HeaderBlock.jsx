import React from 'react'
import HeaderBlockTitle from "../BlockText/HeaderBlockTitle/HeaderBlockTitle";

const HeaderBlock = ({children, title, styles}) => {
    return (
        <div className={`flex justify-between gap-2 items-center ${styles}`}>
            <HeaderBlockTitle title={title}/>
            {children}
        </div>
    )
}

export default HeaderBlock