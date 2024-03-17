import React from 'react'



const NewsCard = ({imgLink, title, text,data, id}) => {
    return (
        <article className="flex flex-col">
            <a href='#' id={id} className='relative mb-3 sm:mb-5 flex' >
                <img className=' object-cover w-full h-full' src={imgLink} alt="image" />
            </a>
            <div className="flex flex-col gap-3">
                <h3 className='font-medium text-main-title text-base text-left sm:text-sm'>{title}</h3>
                <p className='text-left text-sm font-normal text-main-text'>{text}</p>
                <p className='font-normal text-[13px] text-left text-black'>{data}</p>
            </div>
        </article>
    )
}

export default NewsCard