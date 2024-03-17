import HeaderBlockTitle from 'components/BlockText/HeaderBlockTitle/HeaderBlockTitle'
import React from 'react'

const InfoBlockContentCompany = () => {
    return (
        <div className="py-8 sm:pb-9  lg:pt-16 lg:pb-20 ">
                <div className="mb-4">
                    <HeaderBlockTitle title={"О нашем магазине"}/>
                </div>
                <p className='text-main-title font-medium mb-4 md:mb-8 leading-6'> «Стройоптторг» - крупнейшая оптово-розничная компания по продаже строительных и отделочных материалов.</p>

                <div className='text-main-title flex gap-4 flex-col font-normal leading-7 mb-6'>
                    <p>Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом, комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь реализовать любые строительные и дизайнерские фантазии и с минимальными затратами времени и денежных средств.</p>
                    <p>Вы всегда можете прийти к нам, пройтись по нашим складским и торговым площадям, оценить, как мы храним, принимаем и продаем товары. Пообщаться с продавцами-консультантами, получить консультацию по товарам у менеджеров.</p>
                    <p>Вы также можете всегда пожаловаться нам, спросить совета или вернуть не понравившийся товар. Если же Вам что- то не понравилось, и Вы остались недовольны нашим сервисом - не стесняйтесь сообщать нам об этом. Только так мы сможем понять, что делаем что-то не так. И только так мы сможем стать еще лучше!</p>
                    <p>Все товары, представленные на сайте, гарантированно есть в наличии.</p>
                    <p>Помимо материалов, мы предлагаем своим клиентам самый большой набор услуг, которые позволяют значительно упростить процесс строительства и ремонта и сделать его легким и комфортным.</p>
                </div>
        </div>
    )
}

export default InfoBlockContentCompany