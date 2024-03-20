import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'

const NewsCardPageInfoItem = ({
    title,
    dataText,
    dataList
}) => {

    
    return (
        <div className="">
            <div className='mb-5'>
                <HeaderBlock title={title} />
            </div>
            <div className="flex flex-col gap-2.5">
                {
                    dataText.map((item, i) => {
                        return (
                            <p key={i}  className='text-[#1E1E1E] text-base font-normal' >{item.text}</p>
                        )
                    })
                }
            </div>
            <ul className="flex flex-col gap-2.5 mt-5">
                {
                    dataList && dataList.map((item, i) => {

                        return (
                            <li key={i} className='text-base text-[#1E1E1E] font-normal  pl-3  leading-7 relative after:content-[""] after:w-[5px] after:h-[5px] after:bg-black after:absolute after:rounded-full after:left-0 after:top-1/2 after:mt-[-2.5px]'>
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}

export default NewsCardPageInfoItem