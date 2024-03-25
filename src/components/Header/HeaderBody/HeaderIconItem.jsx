import { Link } from "react-router-dom"






const HeaderIconItem = ({
    title, 
    children,
    to
}) => {
    return (
        <Link to={to} className="flex flex-col gap-1 sm:gap-3 items-center">
            {children}
            <span className="text-[#6B7076] sm:block hidden text-sm whitespace-nowrap font-normal leading-none">{title}</span>
        </Link>
    )
}

export default HeaderIconItem