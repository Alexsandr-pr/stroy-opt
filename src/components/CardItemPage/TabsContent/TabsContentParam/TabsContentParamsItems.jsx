import TabsContentParam from "./TabsContentParam"



const TabsContentParamsItems = ({data, styles}) => {
    return (
        <ul className={`gap-24 ${ styles}`}>
            {
                data.map((item, i) => {
                    return (
                        <TabsContentParam key={i} {...item}/>
                    )
                })
            }
        </ul>
    )
}

export default TabsContentParamsItems