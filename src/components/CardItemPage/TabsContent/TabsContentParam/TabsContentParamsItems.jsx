import TabsContentParam from "./TabsContentParam"



const TabsContentParamsItems = ({data, styles}) => {
    return (
        <ul className={`gap-24 ${ styles}`}>
            {
                data.map((item, i) => {
                    
                    if(i < 5) return
                        
                    const {key, value} = item
                    const title= key
                    return (
                        <TabsContentParam key={key} title={title} value={value}/>
                    )
                })
            }
        </ul>
    )
}

export default TabsContentParamsItems