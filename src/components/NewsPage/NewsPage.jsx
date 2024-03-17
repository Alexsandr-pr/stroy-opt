import AsideParentPage from 'components/AsideParentPage/AsideParentPage'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import NewsPageContentLeft from './NewsPageContent/NewsPageContentLeft'
import NewsPageContentRight from './NewsPageContent/NewsPageContentRight'




const NewsPage = () => {
    return (
    
        <>
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