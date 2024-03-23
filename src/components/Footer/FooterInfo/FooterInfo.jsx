
import IconSend from 'components/Icon/IconSend'
import FooterSocial from './FooterSocial'
import InputBlock from 'components/Forms/Input'




const FooterInfo = () => {
    return (
        <div className='flex lg:flex-row flex-col items-center py-7 gap-6'>

            <div className="w-full lg:w-1/3 flex gap-x-8 gap-y-2 items-center">
                <p className='text-sm text-[#979DA3] font-normal'>Мы принимаем к оплате:</p>
                <FooterSocial/>
            </div>
            <div className="w-full  lg:w-2/3 flex md:flex-row flex-col text-left md:items-center gap-6">
                <p className='text-[#4C5054] text-lg font-medium'>Подпишитесь на рассылку и будьте в курсе!</p>
                <form action="" className='w-full relative'>
                    <InputBlock name={"email"} type={"email"} placeholder={"Ваш email"}/>
                    <div className="absolute right-2 top-1/3 z-50">
                        <IconSend/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FooterInfo