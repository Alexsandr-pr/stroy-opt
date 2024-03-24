import Logo from 'components/Logo/Logo'

import HeaderIconItems from './HeaderIconItems'

import HeaderbodyInteractive from './HeaderBodyInteractive/HeaderbodyInteractive'
import useMediaQuery from 'hooks/useMediaQuery'

const HeaderBody = () => {

    const query = useMediaQuery('(max-width:1024px)');

    if(query) {
        return (
            <div className='flex flex-col lg:flex-row py-4 lg:py-7 gap-5  xl:gap-10 justify-between items-center'>
                <div className=" flex gap-4 justify-between w-full items-center">
                    <Logo/>
                    <HeaderIconItems/>
                </div>
                <HeaderbodyInteractive/>
            </div>
        )
    } else {
        return (
            <div className='flex py-7 gap-5  xl:gap-10 justify-between items-center'>
                <Logo/>
                <HeaderbodyInteractive/>
                <HeaderIconItems/>
            </div>
        )
    }


    
}

export default HeaderBody