import React from 'react'
import Text15 from '../Text15/Text15';



const InfoImageText = ({img, text}) => {
    return (
        <div className='flex items-center gap-3'>
            <img src={img} alt={text} />
            <Text15 text={text}/>
        </div>
    )
}

export default InfoImageText