import TitleMain from 'components/BlockText/TitleMain/TitleMain'
import BlackButton from 'components/Buttons/BlackButton/BlackButton'




const MainSliderHomeCard = ({title, text,imgDs, imgMb}) => {
    return (
        <div className='relative mt-8 mb-1 rounded-xl'> 
            <div className="max-w-xl relative flex flex-col  justify-end z-20 p-4 py-12 h-[451px] md:h-auto sm:py-16 md:pl-16 lg:py-32">
                <div className="mb-4 text-center md:text-left">
                    <TitleMain title={title}/>
                </div>
                <p className='mb-6 hidden md:block text-main-title font-normal text-[17px]'>{text}</p>
                <div className="flex justify-center md:justify-start">
                    <BlackButton text={"перейти к товарам"}/>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full object-cover">
                <picture>
                    <source media="(min-width:460px)" srcSet={imgDs} type="image/webp" />
                    <img className="absolute top-0 left-0 w-full h-full object-cover rounded-xl" src={imgMb} alt="image" />
                </picture>
            </div>
        </div>
    )
}

export default MainSliderHomeCard