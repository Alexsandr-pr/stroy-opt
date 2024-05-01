


const BlackButton = ({text}) => {
    return (
        <button className='inline-flex  items-center p-5 lg:py-6 lg:px-7 rounded-lg hover:bg-blue duration-300 transition-all gap-4 whitespace-nowrap bg-button font-bold text-white text-sm uppercase'>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    )
}

export default BlackButton