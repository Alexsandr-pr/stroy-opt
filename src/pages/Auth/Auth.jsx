import TitleMain from "components/BlockText/TitleMain/TitleMain"
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs"
import { Outlet } from "react-router-dom"


const Auth = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4 mb-32'>
            <Breadcrumbs page={"Авторизация"}/>

            <TitleMain  title={"Авторизация "}/>   


            <div className="rounded-lg border grid grid-cols-2 border-[#EDF0F2] p-10">
                <Outlet/>
            </div> 
        </div>
    )
}

export default Auth