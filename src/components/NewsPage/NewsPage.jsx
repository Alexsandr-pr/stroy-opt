import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import NewsPageContentLeft from './NewsPageContent/NewsPageContentLeft'
import NewsPageContentRight from './NewsPageContent/NewsPageContentRight'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'




const NewsPage = () => {
    return (
    
        <>
            <Breadcrumbs page={"Новости"}/>
            <div className='mb-8'>
                <HeaderBlock title={"Новости"}/>
            </div>
            <AsideParentPage
                left={
                    <NewsPageContentLeft/>
                }
                right={
                    <NewsPageContentRight/>
                }
            />

        </>
        
    )
}

export default NewsPage