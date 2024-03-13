

const LabelBlock = ({text, styles}) => {
    return (
        <div className={`inline-block rounded-md py-1.5 px-2 text-sm font-bold ${styles}`}> 
            {text}
        </div>
    )
}

export default LabelBlock