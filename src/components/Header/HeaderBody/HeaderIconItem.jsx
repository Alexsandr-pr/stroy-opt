





const HeaderIconItem = ({
    title, 
    children
}) => {
    return (
        <button className="flex flex-col gap-1 sm:gap-3 items-center">
            {children}
            <span className="text-[#6B7076] sm:block hidden text-sm whitespace-nowrap font-normal leading-none">{title}</span>
        </button>
    )
}

export default HeaderIconItem