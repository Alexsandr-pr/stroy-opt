

const LabelCheckbox = ({text}) => {
    return (
        <label className='relative checked hover:cursor-pointer duration-300 transition-all'>
            <input type="checkbox" required/>
            <span className='checked__span'></span>
            <span className='checked__text text-checkbox font-normal leading-5 text-[13px] '>{text}</span>
        </label>
    )
}

export default LabelCheckbox