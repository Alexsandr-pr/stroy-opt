
import Cardicon from 'components/Icon/CardIcon';
import HeaderIconItem from './HeaderIconItem';
import UserIcon from 'components/Icon/UserIcon';
import GiftIcon from 'components/Icon/GiftIcon';
import LikeIconHeader from 'components/Icon/LikeIconHeader';
import RaitHeaderIcon from 'components/Icon/RaitHeaderIcon';

const HeaderIconItems = () => {
    return (
        <div className='flex flex-row gap-1 sm:gap-4 xl:gap-6 items-center'>
            <div className="sm:block hidden">
                <HeaderIconItem to={"sales"} title={"Все акции"} children={<GiftIcon/>} />
            </div>
            <HeaderIconItem to={"user"} title={"Войти"} children={<UserIcon/>} />
            <HeaderIconItem to={"rait"} title={"Сравнение"} children={<RaitHeaderIcon/>} />
            <HeaderIconItem to={"likes"} title={"Избранное"} children={<LikeIconHeader/>} />
            <HeaderIconItem to={"basket"} title={"Корзина"} children={<Cardicon/>} />
        </div>
    )
}

export default HeaderIconItems