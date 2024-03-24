

const LabelBlock = ({text, styles}) => {
    return (
        <div className={`inline-block rounded-md py-1.5 px-1 sm:px-2 text-[11px] sm:text-sm font-bold ${styles}`}> 
            {text}
        </div>
    )
}

export default LabelBlock