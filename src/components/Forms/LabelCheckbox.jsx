

const LabelCheckbox = ({text, type, category}) => {
    return (
        <label className='relative checked hover:cursor-pointer duration-300 transition-all'>
            <input name={category} type={type} required/>
            <span className='checked__span'></span>
            <span className='checked__text text-checkbox font-normal leading-5 text-[13px] '>{text}</span>
        </label>
    )
}

export default LabelCheckbox