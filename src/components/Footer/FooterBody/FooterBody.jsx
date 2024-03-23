import FooterBodyCatalog from "./FooterBodyCatalog"
import FooterBodyNav from "./FooterBodyNav"



const FooterBody = () => {
    return (
        <div className="flex sm:py-4 lg:py-10 border-b border-b-[#DCE1E7] gap-10">
            <div className="w-full md:w-2/5 lg:w-2/6 xl:w-2/5">
                
                <FooterBodyNav/>
            </div>
            <div className="w-3/5 lg:w-4/6 xl:w-3/5 hidden md:block">
                <FooterBodyCatalog/>
            </div>
        </div>
    )
}

export default FooterBody