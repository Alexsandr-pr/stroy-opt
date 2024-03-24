import IconShevronBottom from "components/Icon/IconShevronBottom"



const SpollerSort = ({text, styles, cb, active}) => {
    return (
        <button
        onClick={() => cb()} 
        className={`flex  justify-between gap-5 py-3 items-center duration-300 transition-all  relative ${styles} ${active ? "rounded-t-md" : "rounded-md"}`}>
            <span >{text}</span>
            <span className={`duration-300 transition-all ${active ? "rotate-180" : "rotate-0"}`}>
                <IconShevronBottom/>
            </span>
        </button>
    )
}

export default SpollerSort