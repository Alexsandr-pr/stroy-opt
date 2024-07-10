
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ButtonCategory from 'components/Buttons/ButtonCategory/ButtonCategory';
import AdressBlock from '../adress/AdressBlock';

const statusStyles = {
    'Обработка': '-status-orange',
    'Выполнен': '-status-green',
    'Отменен': '-status-red'
};

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const orders = useSelector(store => store.userOrder.orders);

    const order = orders.find(o => o.total == id);

    
    useEffect(() => {
        console.log(id);
    }, [order]);

    if (!order) {
        return <div>Заказ не найден</div>;
    }

    return (

        <>
            <div className="flex items-center justify-between gap-5 mb-8">
                <div className="">
                    <h1 className="text-xl text-[#1E1E1E] font-medium my-2.5">Заказ #{order.number}</h1>
                    <p className='text-sm font-normal text-[#646464]'>Был оформлен <strong className='text-[#141414]'>{order.date}</strong> - статус заказа  <span className={`p-2.5 border rounded-lg ml-3 text${statusStyles[order.status]}`}>{order.status}</span></p>
                </div>
                <div className="">
                <ButtonCategory cb={() => navigate(-1)}  active={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                        <path d="M5 9L1 5L5 1" stroke="#186FD4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Вернуться к заказам
                </ButtonCategory>
                </div>
            </div>
            
            <div className="rounded-lg overflow-hidden border mb-8 border-[#EDF0F2]">
                <table className="min-w-full divide-y divide-[#EDF0F2] ">
                    <thead className="bg-white">
                    <tr>
                        <th scope="col" className="p-5 text-left text-lg font-bold text-[#1F1E31]  tracking-wider">Товар</th>
                        
                        <th scope="col" className="p-5 text-right text-lg font-bold text-[#1F1E31]  tracking-wider">Итого</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EDF0F2] bg-white">

                    {order?.items?.map((item, index) => (
                        <tr key={index}>
                        <td className="px-5 py-6 text-[#1F1E31] font-[550] text-base whitespace-nowrap">{item.name}</td>
                        
                        <td className="px-5 py-6 text-right text-lg text-[#003B73] whitespace-nowrap">{item.price}</td>
                        </tr>
                    ))}
                    <tr >
                        <td className="px-5 py-6 text-[#1F1E31] text-base whitespace-nowrap">Сумма:</td>
                        <td className="px-5 py-6 text-right text-base text-[#003B73] whitespace-nowrap">{order.subtotal}</td>
                    </tr>
                    <tr >
                        <td className="px-5 py-6 text-[#1F1E31] text-base whitespace-nowrap">Доставка:</td>
                        <td className="px-5 py-6 text-right text-base text-[#003B73] whitespace-nowrap">{order.delivery}</td>
                    </tr>
                    <tr >
                        <td className="px-5 py-6 text-[#1F1E31] text-base whitespace-nowrap">Способ доставки:</td>
                        <td className="px-5 py-6 text-right text-base text-[#1F1E31]whitespace-nowrap">{order.deliveryMethod}</td>
                    </tr>
                    <tr >
                        <td className="px-5 py-6 text-[#1F1E31] text-base whitespace-nowrap">Способ оплаты:</td>
                        <td className="px-5 py-6 text-right text-base  whitespace-nowrap">{order.paymentMethod}</td>
                    </tr>
                    
                    <tr>
                        <td className="px-5 py-6 text-[#1F1E31] text-2xl whitespace-nowrap font-normal">Итого:</td>
                    
                        <td className="px-5 py-6 text-right text-[22px] text-[#003B73] whitespace-nowrap font-normal">{order.total}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <AdressBlock customer={order.customer}/>
        </>
    );
};

export default OrderDetails;
