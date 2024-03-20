import RegionsItem from "./RegionsItem"




const data = [
    {
        "tel":"0994566786",
        "city":"Kharkov",
        "email":"info@stroiopttorg.com"
    },
    {
        "tel":"0994566786",
        "city":"Kharkov",
        "email":"info@stroiopttorg.com"
    },
    {
        "tel":"0994566786",
        "city":"Kharkov",
        "email":"info@stroiopttorg.com"
    },
    {
        "tel":"0994566786",
        "city":"Kharkov",
        "email":"info@stroiopttorg.com"
    },
    {
        "tel":"0994566786",
        "city":"Kharkov",
        "email":"info@stroiopttorg.com"
    },
    {
        "tel":"0994566786",
        "city":"Kharkov",
        "email":"info@stroiopttorg.com"
    }

]
const RegionsItems = () => {
    return (
        <div className="grid gap-5 grid-cols-1 m46:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 ">
            {
                data.map((item, i) => {
                    return (
                        <RegionsItem key={i} {...item} />
                    )
                })
            }
        </div>
    )
}

export default RegionsItems