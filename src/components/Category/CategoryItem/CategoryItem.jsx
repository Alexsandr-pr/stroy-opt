import React from 'react'
import Text15 from 'components/BlockText/Text15/Text15'
const CategoryBlock = ({text, imgSrc}) => {
    return (
            <>
                <a href='#' className="items-center flex justify-center mb-5 flex-initial  basis-full grow-0 shrink">
                    <img className='mix-blend-multiply max-w-full' src={imgSrc} alt="image" />
                </a>
                <div className="text-center">
                    <Text15 text={text}/>
                </div>
            </>
    )
}

export default CategoryBlock