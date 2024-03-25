import TitleMain from "components/BlockText/TitleMain/TitleMain"
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs"
import Pagination from "components/Pagination/Pagination"
import SalesItems from "components/Sales/SalesItems"
import SpamFull from "components/Spam/SpamFull"






const Sales = () => {
    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <Breadcrumbs page={"Акции"}/>
            <div className="mb-5">
                <TitleMain title={"Акции"}/>
            </div>
            <SalesItems/>
            <div className="flex justify-center mb-14">
                <Pagination/>
            </div>
            <SpamFull/>
        </div>
    )
}

export default Sales