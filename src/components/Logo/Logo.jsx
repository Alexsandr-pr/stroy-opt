

import logoMobile from "./img/logo-mb.webp";
import logoDesktop from "./img/logo-ds.webp";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="flex w-[159px] lg:w-[216px]">
            <picture>
                <source media="(min-width:1024px)" srcSet={logoDesktop} type="image/webp" />
                <img width={159} className="w-full " height={45} src={logoMobile} alt="logo" />
            </picture>
        </Link>
    )
}

export default Logo