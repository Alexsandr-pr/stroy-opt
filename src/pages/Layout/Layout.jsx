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
        
        
        </>
    )
}

export default Layout