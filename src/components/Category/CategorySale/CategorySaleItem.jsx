import Title22 from 'components/BlockText/Title22/Title22'
import LabelBlock from 'components/LabelsItems/LabelBlock'
import React from 'react'

const CategorySale = ({title, sale, imgSrc}) => {
    return (
        <div className='px-4 py-5  sm:py-11 sm:px-9 relative rounded-lg'>
            <div className="w-1/2 relative z-20">
                <div className="mb-2 ">
                    <Title22 title={title}/>
                </div>
                <LabelBlock text={sale} styles={" bg-button text-white"}/>
            </div>
            <div className="absolute left-0 top-0 w-full h-full z-10 object-cover">
                <img className='rounded-lg absolute left-0 top-0 w-full h-full z-10 object-cover z-10' src={imgSrc} alt="image" />
            </div>
        </div>
    )
}

export default CategorySale