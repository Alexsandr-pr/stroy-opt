import AsideParentPage from "components/AsideParentPage/AsideParentPage"
import HeaderBlock from "components/HeaderBlock/HeaderBlock"
import SaleBlock from "../SaleBlock"
import PaymentLeft from "./PaymentLeft"


const Payment = () => {
    return (
        <div className='max-w-[1654px] mx-auto px-4'>  
            <div className="mb-5">
                <HeaderBlock title={"Способы оплаты"}/>
            </div>
            <AsideParentPage
                left={
                    <PaymentLeft/>
                }
                right={
                    <SaleBlock/>
                }
            />
            
        </div>
    )
}

export default Payment