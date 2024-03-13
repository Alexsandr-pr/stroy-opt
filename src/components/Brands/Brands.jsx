import React from 'react'


const Brands = ({imgSrc}) => {
    return (
        <div className=' p-4 sm:px-8 sm:py-6 rounded-lg bg-white border border-white2 flex items-center justify-center mix-blend-multiply'>
            <img src={imgSrc} alt="image" />
        </div>
    )
}

export default Brands