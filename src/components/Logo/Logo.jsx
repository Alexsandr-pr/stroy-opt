

import logoMobile from "./img/logo-mobile.svg";
import logoDesktop from "./img/logo-desktop.svg";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <picture>
                <source media="(min-width: 1024px )" srcset={logoDesktop} type="image/svg+xml" />
                <img src={logoMobile} alt="logo" />
            </picture>
        </Link>
    )
}

export default Logo