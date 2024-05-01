

const PromoButtonActive = ({text}) => {
    return (
        <button className='disabled:opacity-30 py-5 px-7 w-full rounded-lg text-blue hover:bg-blue transition-all duration-300 hover:text-white font-bold items-center leading-tight  text-sm bg-[#F6F8FB] '>
            {text}
        </button>
    )
}

export default PromoButtonActive