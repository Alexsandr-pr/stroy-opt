import React from 'react'

import image from "../img/Rectangle4.svg"

import Article from 'components/BlockTovar/blocks/Article'
import Counter from 'components/Counter/Counter'
import useMediaQuery from 'hooks/useMediaQuery'

const BasketItem = () => {

    const query = useMediaQuery('(min-width:1024px)');
    if(query) {
        return (
            <div className="flex gap-4 py-4 px-5 items-center border-b md:border-t  border-[#EDF0F2]">
                <div className='flex gap-4 items-center basis-[48%]' >
                    <img width={90} height={90} className='rounded-lg' src={image} alt="" />
                    <div className="fle flex-col gap-1.5">
                        <h3 className='text-black   text-base   font-medium leading-normal'>1Аккумуляторная дрель-шуруповерт Dnipro-M CD-218</h3>
                        <Article article={"7547546754"}/>
                    </div>
                </div>
                <div className="flex flex-col  basis-[16%]">
                    <p className='text-price font-medium text-lg sm:text-xl leading-none flex  items-center'>3000000</p>
                    <p className='text-grey-sale font-normal text-sm sm:text-[15px] leading-none line-through'>3000</p> 
                </div>
                <div className="basis-[22%] flex  align-center">
                    <Counter current={10}/>
                </div>
                <div className="flex items-center justify-end md:justify-between gap-6 basis-[14%]">
                    <span className='text-price font-medium text-lg sm:text-xl leading-none hidden md:flex  items-center'>7800</span>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14" stroke="#ADADAD" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    
    } else {
        return (
            <div className="flex gap-4 flex-col py-4 sm:px-5  border-b md:border-t  border-[#EDF0F2]">
                <div className='flex gap-4 items-center basis-[48%]' >
                    <img width={90} height={90} className='rounded-lg' src={image} alt="" />
                    <div className="fle flex-col gap-1.5">
                        <h3 className='text-black   text-base   font-medium leading-normal'>1Аккумуляторная дрель-шуруповерт Dnipro-M CD-218</h3>
                        <Article article={"7547546754"}/>
                    </div>
                </div>
                <div className="flex justify-end gap-4 sm:gap-5 items-center">
                        <div className="flex flex-col  ">
                            <p className='text-price font-medium text-lg sm:text-xl leading-none flex  items-center'>3000000</p>
                            <p className='text-grey-sale font-normal text-sm sm:text-[15px] leading-none line-through'>3000</p> 
                        </div>
                        <div className=" flex  align-center">
                            <Counter current={10}/>
                        </div>
                        <div className="flex items-center justify-end md:justify-between gap-6 ">
                            <span className='text-price font-medium text-lg sm:text-xl leading-none hidden md:flex  items-center'>7800</span>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                    <path d="M1 5H17M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5M7 10L11 14M11 10L7 14" stroke="#ADADAD" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                </div>
            </div>
        )
    }
   
}

export default BasketItem;