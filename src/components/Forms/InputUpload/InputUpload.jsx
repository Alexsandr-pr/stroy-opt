import React from 'react'


const InputUpload = () => {
    return (
        <div className="">
            <div className='mb-2.5 block text-sm font-normal text-button'>Прикрепить фото:</div>
            <label className='flex justify-center items-center flex-col placeholder:text-input-text text-brown w-full text-base font-normal py-4 px-6 rounded-lg bg-white border-dashed border border-input-border  focus:outline-blue2'>
                <input type="file" className='h-24 w-full hidden' />
                <svg className='mb-2.5' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
                    <path d="M13 6H13.01M1 14L6 9C6.928 8.107 8.072 8.107 9 9L14 14M12 12L13 11C13.928 10.107 15.072 10.107 16 11L19 14M1 4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H16C16.7956 1 17.5587 1.31607 18.1213 1.87868C18.6839 2.44129 19 3.20435 19 4V16C19 16.7956 18.6839 17.5587 18.1213 18.1213C17.5587 18.6839 16.7956 19 16 19H4C3.20435 19 2.44129 18.6839 1.87868 18.1213C1.31607 17.5587 1 16.7956 1 16V4Z" stroke="#ADB1B7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className='text-input-text text-base font-normal'>
                    Нажмите для загрузки или перетащите файл в это поле
                </span>
            </label>
        </div>  
    )
}

export default InputUpload