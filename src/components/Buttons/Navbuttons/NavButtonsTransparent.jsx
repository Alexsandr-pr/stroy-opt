


const NavButtonsTransparent = ({
    cb,
    text
}) => {
    return (
        <button onClick={() => cb()} className="py-5 px-7 block w-full text-center rounded-lg text-blue bg-white2 hover:text-white duration-300 transition-all hover:bg-blue font-bold  leading-tight  text-sm ">
            {text}
        </button>
    )
}

export default NavButtonsTransparent