

const ParentButtonRight = ({title, children}) => {
    return (
        <div className="flex w-full sm:w-auto m46:flex-row flex-col gap-2.5 m46:items-center">
            <p className="text-[#414446] text-left text-[15px] font-normal">{title}</p>
            {children}
        </div>
    )
}

export default ParentButtonRight