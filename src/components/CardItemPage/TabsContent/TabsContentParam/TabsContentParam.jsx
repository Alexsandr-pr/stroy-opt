
const TabsContentParam = ({title, text}) => {
    return (
        <li className="text-[15px] flex justify-between items-center mb-4">
            <h3 className="text-main-title mr-1 w-fit m46:whitespace-nowrap">{title}</h3>
            <span className="relative w-full after:w-full after:border-b after:border-dashed after:border-b-[#D1D1D1] after:absolute  after:left-0 "></span>
            <p className="text-[#7D7F83] leading-relaxed w-fit whitespace-nowrap ml-4">{text}</p>
        </li>
    )
}

export default TabsContentParam