
const ButtonRed = ({text}) => {
    return (
        <button className='text-[#474B4E] text-[12px] font-bold  duration-300 transition-all hover:bg-blue2 hover:text-white border w-full sm:w-auto border-red uppercase py-4 rounded-md px-6 sm:px-8 lg:px-12'>
            {text}
        </button>
    )
}

export default ButtonRed