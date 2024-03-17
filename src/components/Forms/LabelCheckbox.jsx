import React from 'react'

const LabelCheckbox = () => {
    return (
        <label className='relative checked'>


            <input type="checkbox" required/>
            <span className='checked__span'></span>
            <span className='checked__text text-checkbox font-normal leading-5 text-[13px] '>Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности</span>
        </label>
    )
}

export default LabelCheckbox