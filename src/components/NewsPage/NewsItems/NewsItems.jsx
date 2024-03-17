import NewsCard from 'components/News/NewsCard/NewsCard'
import React from 'react'

const NewsItems = ({data}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6 2xl:gap-8 ">
            {
                data.map(item =>  {
                    return (
                        <NewsCard key={item.id} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default NewsItems