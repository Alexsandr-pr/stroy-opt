import ButtonCategory from "components/Buttons/ButtonCategory/ButtonCategory"


const data = [
    {
        "title": 9,
        "active": true
    },
    {
        "title": 12,
        "active": false
    },
    {
        "title": 18,
        "active": false
    },
    {
        "title": 24,
        "active": false
    },
]

const ShowToPage = () => {
    return (
        <ul className="flex gap-2.5">
            {
                data.map((item, i) => {
                    return (
                        <ButtonCategory  key={i} {...item}/>
                    )
                })
            }
        </ul>
    )
}

export default ShowToPage