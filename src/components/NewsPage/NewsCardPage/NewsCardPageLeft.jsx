
import LabelData from 'components/LabelsItems/LabelData'
import React from 'react'
import NewsCardPageInfo from './NewsCardPageInfo'



const NewsCardPageLeft = ({
    childrenTop,
    childrenBottom,
    dataArray
}) => {

    const {textShort, img, data} = dataArray;

    return (
        <div className="flex flex-col mb-20">
            {childrenTop}
            
            <div className="mb-7">
                <LabelData text={"статья"} data={"16 Августа 2023"}/>
            </div>

            <h3 className='text-lg text-main-title font-normal mb-7'>{textShort}</h3>

            <div className="relative mb-7">
                <img className='w-full h-full object-cover' src={img} alt="image" />
            </div>

            <NewsCardPageInfo data={data}/>

            {childrenBottom}
        </div>
    )
}

export default NewsCardPageLeft