import React from 'react'
import HeaderBlockTitle from "../BlockText/HeaderBlockTitle/HeaderBlockTitle";

const HeaderBlock = ({children, title}) => {
    return (
        <div className='flex justify-between gap-2 items-center'>
            <HeaderBlockTitle title={title}/>
            {children}
        </div>
    )
}

export default HeaderBlock