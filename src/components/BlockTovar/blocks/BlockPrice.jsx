import LabelBlock from "components/LabelsItems/LabelBlock"


const BlockPrice = ({price}) => {

    const type = {
        "sale": " text-red border-red",
        "orange": " text-orange border-orange border",
        "green": "  bg-green-label text-white"
    }

    return (
        <>
            <div className='text-price font-medium text-lg sm:text-xl leading-none flex gap-2 items-center'>
                <div className="flex flex-col items-center gap-1 sm:gap-2 flex-wrap  m46:flex-row">
                    <p className='text-grey-sale font-normal text-sm sm:text-[15px] leading-6 line-through'>15999</p> 
                    <p>{price}</p>
                </div>
                <LabelBlock text={"-15%"} styles={type.green}/>
            </div>
        </>
    )
}

export default BlockPrice