import React from 'react'
import NewsCardPageInfoItem from './NewsCardPageInfoItem'

const NewsCardPageInfo = ({data}) => {
    
    return (
        <div className='flex flex-col gap-7'>
            {
                data.map((item, i) => {
                    return (
                        <NewsCardPageInfoItem key={i} {...item} />
                    )
                })
            }
        </div>
    )
}

export default NewsCardPageInfo