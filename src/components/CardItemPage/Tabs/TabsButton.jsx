

const TabsButton = ({
    text,
    type,
    onChangeParam,
    param
}) => {


    return (
        <button onClick={() => onChangeParam(type)} className={`py-4 lg:py-6 px-4 font-medium text-base lg:text-xl z-40 relative  ${type == param ? "after:absolute after:w-full after:bottom-0 after:z-50 after:h-[1px] after:bg-red after:left-0 text-main-title" : " text-[#96999E]"}`}>
            {text}
        </button>
    )
}

export default TabsButton