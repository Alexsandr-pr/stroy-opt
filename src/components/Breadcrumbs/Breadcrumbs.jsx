
import { Link } from 'react-router-dom'

const Breadcrumbs = ({page}) => {
    return (
        <ul className='flex text-[15px] py-5 gap-2'>
            <li className='text-main-title '>
                <Link>Стройоптторг /</Link>
            </li>
            <li className='text-[#91969D] '>
                {page}
            </li>
        </ul>
    )
}

export default Breadcrumbs