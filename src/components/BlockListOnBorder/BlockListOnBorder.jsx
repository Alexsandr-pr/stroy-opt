

import BlockListOnBorderItem from "./BlockListOnBorderItem";




const BlockListOnBorder = ({data}) => {
    return (
        <ul className="gap-9 flex flex-col p-5 border border-[#EDF0F2] rounded-md">
            {
                data.map((item, i ) => {
                    return (
                        <BlockListOnBorderItem key={i} {...item}/>
                    )
                })
            }
        </ul>
    )
}

export default BlockListOnBorder