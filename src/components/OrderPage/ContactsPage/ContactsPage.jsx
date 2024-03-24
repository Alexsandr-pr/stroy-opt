import BigBluebutton from 'components/Buttons/BigBlueButton/BigBluebutton'
import FormReview from 'components/Forms/FormReview/FormReview'
import HeaderBlock from 'components/HeaderBlock/HeaderBlock'
import React from 'react'

import adress from "../../../../src/assets/icon-contacts/adress.svg"
import mail from "../../../../src/assets/icon-contacts/list.svg"
import tel from "../../../../src/assets/icon-contacts/tel.svg"
import NumberItems from './Numbers/NumberItems'
import FormQuestion from 'components/Forms/FormQuestion/FormQuestion'
import RegionsItems from './Regions/RegionsItems'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'

const ContactsPage = () => {
    return (
        <>
            <div className='max-w-[1654px]  mx-auto px-4'>
                <Breadcrumbs page={"Контакты"}/>
                <div className="mb-8">
                    <HeaderBlock title={"Контакты"}/>
                </div>
                <div className="flex flex-col mb-12 sm:flex-row sm:items-center relative">
                    <div className="min-h-[600px]  lg:mx-0 basis-[100%] lg:basis-[85%] ml-[-20px] sm:mx-0 mr-[-20px] sm:rounded-xl border border-map-border">
                        <iframe className='sm:rounded-xl min-h-[611px]  border border-map-border ' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1710867936395!5m2!1sru!2sua" width="100%" height="100%"  allowFullScreen=""  referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex relative mt-[-5%] sm:mt-0 sm:absolute sm:right-4 lg:right-0 lg:relative basis-[40%] lg:basis-[30%]  sm:ml-[-5%] flex-col p-8 bg-white rounded-md shadow-4sl">
                        <div className="flex flex-col gap-7">
                            <div className="flex gap-2.5 items-start">
                                <img src={adress} alt="adress" />
                                <div className="flex flex-col gap-3">
                                    <p className='text-[#2F3134] text-lg font-bold leading-tight'>Адрес:</p>
                                    <p className='text-[#494D52] text-base font-normal max-w-[254px]'> г. Чернигов, ул Шевченко, дом 301</p>
                                </div>
                            </div>
                            <div className="flex gap-2.5 items-start">
                                <img src={tel} alt="tel" />
                                <div className="flex flex-col gap-3">
                                    <p className='text-[#2F3134] text-lg font-bold leading-tight'>Телефон:</p>
                                    <a href="tel:0998765543" className='text-lg text-[#3B3C3F] font-madium'>0998765543</a>
                                </div>
                            </div>
                            <div className="flex gap-2.5 items-start">
                                <img src={mail} alt="mail" />
                                <div className="flex flex-col gap-3">
                                    <p className='text-[#2F3134] text-lg font-bold leading-tight'>Email адрес:</p>
                                    <a href="mailto:info@stroiopttorg.com" className='text-blue text-base font-normal'>info@stroiopttorg.com</a>
                                </div>
                            </div>
                            <div className="flex gap-2.5 items-start">
                                
                                <div className="flex ml-[37px] flex-col gap-3">
                                    <p className='text-[#2F3134] text-lg font-bold leading-tight'>Время работы:</p>
                                    <div className="text-[#494D52] text-base font-normal">
                                        <p>Ежедневно, с 8:00 до 18:00</p>
                                        <p>Без перерыва и выходных</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div className="w-full">
                                <BigBluebutton text={"Заказать звонок"}/>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row mb-12 gap-5">
                    <div className="w-full xl:w-4/5">
                        <NumberItems/>
                    </div>
                    <div className="w-full xl:w-1/5 p-5 rounded-lg bg-[#F7F9FC]">
                        <h3 className='text-base text-[#2B2E31] font-medium mb-7'>Реквизиты:</h3>
                        <p className='text-sm text-[#2C2F33]'>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН 0901051787КПП 09010154654001369000</p>
                    </div>
                </div>
                <div className="mb-20">
                    <h3 className='text-xl font-medium text-black mb-6'>Работаем по регионам:</h3>
                    <RegionsItems/>
                </div>
            </div>
            <div className="">
                <FormQuestion/>
            </div>
        </>
    )
}

export default ContactsPage