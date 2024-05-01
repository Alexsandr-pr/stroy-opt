
import InputBlock from 'components/Forms/Input'
import PromoButtonActive from './PromoButtonActive'


const Promocode = () => {
    return (
        <div className='flex gap-2 flex-col'>
            <InputBlock placeholder={"Промокод"} />
            <PromoButtonActive text={"Применить промокод"}/>
        </div>
    )
}

export default Promocode