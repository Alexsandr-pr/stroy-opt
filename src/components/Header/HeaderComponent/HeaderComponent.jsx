import React from 'react'
import HeaderTop from '../HeaderTop/HeaderTop'
import HeaderBody from '../HeaderBody/HeaderBody'

const HeaderComponent = () => {
    return (
        <header className='max-w-[1654px] mx-auto px-4'>
            <HeaderTop/>
            <HeaderBody/>
        </header>
    )
}

export default HeaderComponent