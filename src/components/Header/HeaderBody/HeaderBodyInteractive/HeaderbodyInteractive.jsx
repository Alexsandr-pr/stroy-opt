import ButtonHeader from 'components/Buttons/ButtonHeader/ButtonHeader'
import HeaderSearch from 'components/Header/HeaderSearch/HeaderSearch'


const HeaderbodyInteractive = () => {
    return (
        <div className='flex w-full flex-row gap-3 xl:gap-10 items-center'>
            <ButtonHeader/>
            <HeaderSearch/>
        </div>
    )
}

export default HeaderbodyInteractive