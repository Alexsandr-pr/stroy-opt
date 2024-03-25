import TabsContentParam from "./TabsContentParam"



const TabsContentParamsItems = ({data}) => {
    return (
  
            <ul className="columns-1 lg:columns-2 gap-24 mb-8">
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