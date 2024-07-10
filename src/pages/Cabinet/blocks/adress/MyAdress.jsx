import { useSelector } from "react-redux"
import AdressBlock from "./AdressBlock"
import { Link } from "react-router-dom";


const MyAdress = ({
	
}) => {
    const {customer} = useSelector(store => store.customer);


    return (
      	<div className="">
            <AdressBlock customer={customer.contactInfo}>
                <div className="mt-3 inline-flex rounded-tr-lg border-t border-r border-[#F1F1F1] ">
                    <Link to={'edit'} className="flex items-center gap-2.5 px-8 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path opacity="0.9" d="M13.5 1.92852C13.7189 1.70965 13.9787 1.53603 14.2647 1.41758C14.5506 1.29913 14.8571 1.23816 15.1667 1.23816C15.4762 1.23816 15.7827 1.29913 16.0687 1.41758C16.3546 1.53603 16.6145 1.70965 16.8333 1.92852C17.0522 2.14738 17.2258 2.40722 17.3443 2.69319C17.4627 2.97916 17.5237 3.28565 17.5237 3.59518C17.5237 3.90471 17.4627 4.21121 17.3443 4.49717C17.2258 4.78314 17.0522 5.04298 16.8333 5.26185L5.58333 16.5118L1 17.7618L2.25 13.1785L13.5 1.92852Z" stroke="#A3AEBD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Редактировать
                    </Link>
                    <button className="flex items-center gap-2.5 px-8 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path opacity="0.9" d="M1.52344 4.49999H3.1901M3.1901 4.49999H16.5234M3.1901 4.49999V16.1667C3.1901 16.6087 3.3657 17.0326 3.67826 17.3452C3.99082 17.6577 4.41474 17.8333 4.85677 17.8333H13.1901C13.6321 17.8333 14.0561 17.6577 14.3686 17.3452C14.6812 17.0326 14.8568 16.6087 14.8568 16.1667V4.49999H3.1901ZM5.6901 4.49999V2.83332C5.6901 2.3913 5.8657 1.96737 6.17826 1.65481C6.49082 1.34225 6.91474 1.16666 7.35677 1.16666H10.6901C11.1321 1.16666 11.5561 1.34225 11.8686 1.65481C12.1812 1.96737 12.3568 2.3913 12.3568 2.83332V4.49999M7.35677 8.66666V13.6667M10.6901 8.66666V13.6667" stroke="#A3AEBD" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Удалить
                    </button>
                </div>
            </AdressBlock>
        </div>
    )
}

export default MyAdress