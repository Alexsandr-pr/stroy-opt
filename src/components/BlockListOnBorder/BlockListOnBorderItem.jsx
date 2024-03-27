

const BlockListOnBorderItem = ({image, text}) => {
    return (
        <li className="flex gap-2.5 items-center"> 
            <img className="block" src={image} alt="image" />
            <p className="text-[#515257] text-sm ">{text}</p>
        </li>
    )
}

export default BlockListOnBorderItem