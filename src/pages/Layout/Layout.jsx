
import MainFooter from 'components/Footer/MainFooter'

import HeaderComponent from 'components/Header/HeaderComponent/HeaderComponent'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Suspense} from "react";

const Layout = () => {
    return (
        <>
            <HeaderComponent/>
            
            <main>
                <Suspense>

                <Outlet/>
                </Suspense>
                
            </main>

            <div className=" bg-white4">

                <MainFooter/>
            </div>
            
        </>
    )
}

export default Layout