
 
const ParentIcon = ({children}) => {
    return (
        <button className='w-10 h-10 items-center justify-center border flex hover:border-blue duration-300 transition-all border-white4 rounded-md group'>
            {children}
        </button>
    )
}

export default ParentIcon