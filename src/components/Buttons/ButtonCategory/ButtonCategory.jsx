
const ButtonCategory = ({title, active, children, cb}) => {
    let clazz =  `${active ? 'bg-white3 text-blue  ' : " text-grey bg-white"} gap-2.5 w-full justify-center group rounded-md hover:bg-white3 hover:text-blue items-center duration-300 transition-all text-sm flex py-4 leading-3 px-5 font-medium  border border-white2  border-solid `

    return (
        <button onClick={() => cb()} className={clazz}>
            {title}
            {children}
        </button>
    )
}

export default ButtonCategory;