

const ButtonBlueAdd = ({
    cb,
    text
}) => {
    return (
        
        <button onClick={() => cb()}
            className='text-[15px] text-blue font-bold leading-tight'
        >
            {text}
        </button>
    )
}

export default ButtonBlueAdd