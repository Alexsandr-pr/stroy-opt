import ParentIcon from "components/Icon/ParentIcon"


const ButtonFavorites = ({text, children}) => {
    return (
        <div className="text-sm text-main-title flex items-center gap-2.5">
            <ParentIcon>
                {children}
            </ParentIcon>
            {text}
        </div>
    )
}

export default ButtonFavorites