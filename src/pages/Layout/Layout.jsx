
import MainFooter from 'components/Footer/MainFooter'

import HeaderComponent from 'components/Header/HeaderComponent/HeaderComponent'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <HeaderComponent/>
            
            <main>
                <Outlet/>
            </main>

            <div className=" bg-white4">

                <MainFooter/>
            </div>
            
        </>
    )
}

export default Layout