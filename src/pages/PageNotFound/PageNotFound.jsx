import TitleMain from 'components/BlockText/TitleMain/TitleMain';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';




import page404 from "../../assets/404.webp";
import page404mobile from "../../assets/404-mobile.webp";


import NavButtonsBlue from 'components/Buttons/Navbuttons/NavButtonsBlue';
import NavButtonsTransparent from 'components/Buttons/Navbuttons/NavButtonsTransparent';
import { useNavigate } from 'react-router-dom';


const PageNotFound = () => {

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='max-w-[1654px] mx-auto px-4'>
            <Breadcrumbs page={"Страница не найдена"}/>
            <div className="text-center sm:text-left">
                <TitleMain title={"Страница не найдена"}/>
            </div>
            <div className="flex justify-center flex-col items-center my-10 sm:my-12 lg:my-28">
                <div className="block mb-8 lg:mb-16">
                    <picture>
                        <source media="(min-width:767.98px )" srcSet={page404} type="image/webp" />
                        <img src={page404mobile} alt="404" />
                    </picture>
                </div>
                <p className='text-[#535557] mb-8 lg:mb-14 max-w-3xl text-center text-lg font-normal leading-relaxed'>Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен. Попробуйте воспользоваться поиском.</p>
                <div className="flex sm:flex-row flex-col w-full sm:w-[450px] gap-4"> 
                    <NavButtonsTransparent cb={goBack} text={"Вернуться назад"}/>
                    <NavButtonsBlue to="/" text={"На главную"}/>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound