import React from 'react'

const AdressBlock = ({customer, children}) => {
    return (
        <div className="rounded-lg  border  border-[#EDF0F2]">
            <div className="flex justify-between">
                <h2 className='text-lg font-medium text-[#121214] pl-8 py-4'>{customer?.name}</h2>
                <div className="p-5 flex items-center gap-2.5 bg-white3 text-[13px] text-blue uppercase font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                        <path opacity="0.9" d="M9.0188 19.4835C8.75303 19.4863 8.48936 19.436 8.24329 19.3356C7.99721 19.2351 7.77368 19.0865 7.5858 18.8985L3.3418 14.6555C2.35116 13.6644 1.63823 12.4304 1.27438 11.0772C0.910525 9.72393 0.908519 8.29884 1.26856 6.94457C1.6286 5.59029 2.33805 4.35434 3.3259 3.36044C4.31375 2.36654 5.54535 1.64955 6.8974 1.28125C8.24945 0.912951 9.67453 0.906255 11.03 1.26184C12.3854 1.61742 13.6237 2.3228 14.6209 3.30738C15.618 4.29195 16.339 5.52118 16.7118 6.87201C17.0845 8.22285 17.0959 9.64789 16.7448 11.0045M12.9988 19.9985L17.9988 14.9985M17.9988 14.9985V19.4985M17.9988 14.9985H13.4988M5.9988 8.99851C5.9988 9.79416 6.31487 10.5572 6.87748 11.1198C7.44009 11.6824 8.20315 11.9985 8.9988 11.9985C9.79445 11.9985 10.5575 11.6824 11.1201 11.1198C11.6827 10.5572 11.9988 9.79416 11.9988 8.99851C11.9988 8.20286 11.6827 7.4398 11.1201 6.87719C10.5575 6.31458 9.79445 5.99851 8.9988 5.99851C8.20315 5.99851 7.44009 6.31458 6.87748 6.87719C6.31487 7.4398 5.9988 8.20286 5.9988 8.99851Z" stroke="#186FD4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    адрес доставки
                </div>
            </div>
            <div className="flex justify-between px-8 pb-8 pt-3">
                
                    <p className='text-[#3B3B3E] text-[15px] font-medium max-w-80'>{customer?.address}</p>
                
                <div className="">
                    <p className='text-[#87878D] font-normal text-sm'>Телефон</p>
                    <p className='text-[#3B3B3E] text-[15px] font-medium'>{customer?.phone}</p>
                </div>
                <div className="">
                    <p className='text-[#87878D] font-normal text-sm'>Email</p>
                    <p className='text-[#3B3B3E] text-[15px] font-medium'>{customer?.email}</p>
                </div>
            </div>
            {children}
        </div>
    )
}

export default AdressBlock