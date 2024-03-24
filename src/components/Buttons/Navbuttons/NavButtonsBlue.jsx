
import { Link } from 'react-router-dom'

const NavButtonsBlue = ({
    to, 
    text
}) => {
    return (
        <Link to={to} className="py-5 px-7 block w-full text-center rounded-lg text-white hover:text-blue hover:bg-white2 duration-300  font-bold  leading-tight  text-sm bg-blue">
            {text}
        </Link>
    )
}

export default NavButtonsBlue