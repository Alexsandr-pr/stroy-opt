
import ButtonCategory from './ButtonCategory'

const ButtonCategoryClear = ({title, cb, active}) => {
    return (
        <ButtonCategory title={title} cb={cb} active={active} >
            {
                <span  className="block hover:stroke-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 9" fill="none">
                        <path className="hover:stroke-blue" opacity="1" d="M8 1L1 8M1 1L8 8" stroke={active ? "#186FD4" : "#5B5B5C"} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            }
        </ButtonCategory>
    )
}

export default ButtonCategoryClear