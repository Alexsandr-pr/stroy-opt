import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const statusStyles = {
    'Обработка': '-status-orange',
    'Выполнен': '-status-green',
    'Отменен': '-status-red'
};

const MyOrder = () => {
    const orders = useSelector(store => store.userOrder.orders)
    
    return (
        
        
        <div className="rounded-lg overflow-hidden border border-[#EDF0F2]">
        <table className="min-w-full divide-y divide-[#EDF0F2]">
            <thead className="bg-white">
                <tr>
                    <th scope="col" className="p-5 text-left text-sm font-bold text-[#45484A] uppercase tracking-wider">Номер</th>
                    <th scope="col" className="p-5 text-left text-sm font-bold text-[#45484A] uppercase tracking-wider">Дата</th>
                    <th scope="col" className="p-5 text-left text-sm font-bold text-[#45484A] uppercase tracking-wider">Статус</th>
                    <th scope="col" className="p-5 text-left text-sm font-bold text-[#45484A] tracking-wider">Итого</th>
                    <th scope="col" className="p-5 text-left text-sm font-bold text-[#45484A] tracking-wider"></th>
                </tr>
            </thead>
          <tbody className="divide-y divide-[#EDF0F2] bg-white">
            {orders.map((order, index) => (
              
              <tr key={index}>
                <td className="px-5 py-6 text-main-title whitespace-nowrap">{order.number}</td>
                <td className="px-5 py-6 text-main-title whitespace-nowrap">{order.date}</td>
                <td className="px-5 py-6 text-main-title whitespace-nowrap">
                  <span className={`p-2.5 border rounded-lg text${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-6 text-main-title whitespace-nowrap">{order.total}</td>
                <td className="px-5 py-6 text-main-title whitespace-nowrap text-right pr-5">
                  <Link to={`${order.total}`} className="inline-flex justify-center items-center w-12 h-12 rounded-lg bg-[#F6F8FB]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                      <path d="M4.85355 4.35355C5.04882 4.15829 5.04882 3.84171 4.85355 3.64645L1.67157 0.464466C1.47631 0.269204 1.15973 0.269204 0.964466 0.464466C0.769204 0.659728 0.769204 0.976311 0.964466 1.17157L3.79289 4L0.964466 6.82843C0.769204 7.02369 0.769204 7.34027 0.964466 7.53553C1.15973 7.7308 1.47631 7.7308 1.67157 7.53553L4.85355 4.35355ZM3.5 4.5H4.5V3.5H3.5V4.5Z" fill="#186FD4"/>
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    )
}

export default MyOrder