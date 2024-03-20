import AsideParentPage from 'components/AsideParentPage/AsideParentPage'

import React from 'react'
import NewsCardPageLeft from './NewsCardPageLeft'
import SwiperNews from 'components/News/SwiperNews/SwiperNews'
import NewsPageContentRight from '../NewsPageContent/NewsPageContentRight'





const NewsCardPage = () => {
    
    return (
        <div className='max-w-[1654px] mx-auto px-4'>
            <AsideParentPage 
                left={<NewsCardPageLeft/>}
                right={<NewsPageContentRight/>}
            />
            
            <SwiperNews/>
        </div>
    )
}

export default NewsCardPage