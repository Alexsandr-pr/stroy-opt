import TitleMain from "components/BlockText/TitleMain/TitleMain"
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs"
import Pagination from "components/Pagination/Pagination"
import SalesItems from "components/Sales/SalesItems"






const Sales = () => {
    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <Breadcrumbs page={"Акции"}/>
            <TitleMain title={"Акции"}/>
            <div className="">
                <SalesItems/>
            </div>
            <div className="flex justify-center mb-14">
                <Pagination/>
            </div>
        </div>
    )
}

export default Sales