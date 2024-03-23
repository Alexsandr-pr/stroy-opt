import FooterBody from "./FooterBody/FooterBody"
import FooterBottom from "./FooterBottom"
import FooterInfo from "./FooterInfo/FooterInfo"
import FooterTop from "./FooterTop"


const MainFooter = () => {
    return (
        <div className="max-w-[1654px] mx-auto px-4">
            <FooterTop/>
            <FooterBody/>
            <FooterInfo/>
            <FooterBottom/>
        </div>
    )
}

export default MainFooter