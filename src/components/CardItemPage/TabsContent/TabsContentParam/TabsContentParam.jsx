
const TabsContentParam = ({title, value}) => {
    return (
        <li className="text-[15px] flex justify-between items-center mb-4">
            <h3 className="text-main-title mr-1  ">{title}</h3>
            <span className="relative w-fit after:w-full after:border-b after:border-dashed after:border-b-[#D1D1D1] after:absolute  after:left-0 "></span>
            <p className="text-[#7D7F83] text-right whitespace-nowrap leading-relaxed  ml-4">{value}</p>
        </li>
    )
}

export default TabsContentParam