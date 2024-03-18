import React from 'react'
import HeaderBlockTitle from '../../BlockText/HeaderBlockTitle/HeaderBlockTitle'

import BlackButton from '../../Buttons/BlackButton/BlackButton'
import BlockInfoItems from 'components/BlockInfoNumber/BlockInfoItems'




const InfoBlockContentMain = () => {
    return (
        <>
            <div className="py-8 sm:pb-9  lg:pt-16 lg:pb-20 ">
                <div className="mb-4">
                    <HeaderBlockTitle title={"О нашем магазине"}/>
                </div>
                <p className='text-main-title font-medium mb-4 md:mb-8 leading-6'>Цель и главная задача компании- создать сервис, который не ограничится продажей строительных и отделочных материалов, а будет решать задачи и трудности, с которыми сталкиваются люди во время ремонта.</p>


                <BlockInfoItems styles={" grid grid-cols-2 md:grid-cols-4  gap-y-0 gap-x-4 lg:gap-8 2xl:gap-16"}/> 

                <p className='text-main-title font-normal leading-7 mb-6'>Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом, комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь реализовать любые строительные и дизайнерские фантазии и с минимальными затратами времени и денежных средств.</p>
                <div className="">
                    <BlackButton text={"Подробнее о компании"}/>
                </div>
            </div>
        </>
    )
}

export default InfoBlockContentMain