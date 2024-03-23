import ButtonRed from "components/Buttons/ButtonRed/ButtonRed"
import Logo from "components/Logo/Logo"


const FooterTop = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between py-10 gap-x-3 gap-y-6 border-b border-b-[#DCE1E7]">
            <div className="flex m46:flex-row flex-col justify-between  items-center gap-4 sm:gap-5 md:gap-8 lg:gap-12">
                <Logo/>
                <div className="block w-full sm:hidden">
                    <ButtonRed text={"Заказать звонок"}/>
                </div>
            </div>
            <div className="flex flex-col m46:flex-row m46:items-center justify-between gap-4 sm:gap-5 md:gap-8 lg:gap-12">
                <div className="font-medium ">
                    <p className="text-[#35383A] text-sm ">Email:</p>
                    <a className="text-blue  text-sm" href="mailto:info@stroiopttorg.com">info@stroiopttorg.com</a>
                </div>
                <div className="flex flex-col gap-1 ">
                    <a className="text-lg lg:text-xl text-black leading-none font-medium" href="tel:0993546342">099-35-76-342</a>
                    <p className="text-[#4E5760] text-sm font-normal">Ежедневно, с 8:00 до 18:00</p>
                </div>
                <div className="hidden sm:block">
                    <ButtonRed text={"Заказать звонок"}/>
                </div>
            </div>
        </div>
    )
}

export default FooterTop