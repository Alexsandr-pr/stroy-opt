
import { Link } from 'react-router-dom'

const FooterBottom = () => {
    return (
        <div className='text-sm text-[#81868B] flex flex-col sm:flex-row  items-center text-center sm:justify-between gap-4 py-5 border-t border-t-[#DCE1E7]' >
            <p>© 2003-2023 Интернет-магазин ООО «Стройоптторг»</p>
            <Link to="politic" className='text-[#444648] underline leading-relaxed'>Политика конфиденциальности</Link>
        </div>
    )
}

export default FooterBottom