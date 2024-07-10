

const defaultState = {
    orders: [
        {
            number: '#2365341-11',
            date: '16 Августа 2023',
            status: 'Обработка',
            items: [
                { name: 'Перфоратор универсальный Wander 1450W', quantity: 1, price: 7899 },
                { name: 'Перфоратор универсальный Wander X645 1450W', quantity: 2, price: 11998 },
                { name: 'Перфоратор универсальный Wander X', quantity: 3, price: 9033 },
                { name: 'Перфоратор универсальный Wander X645-46', quantity: 1, price: 7899 }
            ],
            subtotal: 43829,
            delivery: 0,
            paymentMethod: 'Оплата картой на сайте',
            total: 43829,
            deliveryMethod: 'Самовывоз',
            customer: {
                name: 'Евгений Иванов',
                address: '056734, Москва, Россия, улица Варшавская, 37/5, кв.574',
                phone: '+7 (956) 373-46-33',
                email: 'exampleofemail@gmail.com'
            }
        },
        {
            number: '#2356576-13',
            date: '1 Августа 2023',
            status: 'Выполнен',
            items: [
                { name: 'Перфоратор универсальный Wander 1450W', quantity: 1, price: 7899 },
                { name: 'Перфоратор универсальный Wander X645 1450W', quantity: 2, price: 11998 },
                { name: 'Перфоратор универсальный Wander X', quantity: 3, price: 9033 },
                { name: 'Перфоратор универсальный Wander X645-46', quantity: 1, price: 7899 },
                { name: 'Перфоратор универсальный Wander 1450W', quantity: 1, price: 7899 },
                { name: 'Перфоратор универсальный Wander X645 1450W', quantity: 2, price: 11998 },
                { name: 'Перфоратор универсальный Wander X', quantity: 3, price: 9033 },
                { name: 'Перфоратор универсальный Wander X645-46', quantity: 1, price: 7899 }
            ],
            subtotal: 11299,
            delivery: 0,
            paymentMethod: 'Оплата картой на сайте',
            total: 11299,
            deliveryMethod: 'Самовывоз',
            customer: {
                name: 'Евгений Иванов',
                address: '056734, Москва, Россия, улица Варшавская, 37/5, кв.574',
                phone: '+7 (956) 373-46-33',
                email: 'exampleofemail@gmail.com'
            }
        },
        {
            number: '#577598-26',
            date: '17 Июля 2023',
            status: 'Отменен',
            items: [
                { name: 'Перфоратор универсальный Wander 1450W', quantity: 1, price: 7899 },
                
            ],
            subtotal: 1311,
            delivery: 0,
            paymentMethod: 'Оплата картой на сайте',
            total: 1311,
            deliveryMethod: 'Самовывоз',
            customer: {
                name: 'Евгений Иванов',
                address: '056734, Москва, Россия, улица Варшавская, 37/5, кв.574',
                phone: '+7 (956) 373-46-33',
                email: 'exampleofemail@gmail.com'
            }
        },
        {
            number: '#436879-12',
            date: '11 Января 2023',
            status: 'Обработка',
            items: [
                { name: 'Перфоратор универсальный Wander 1450W', quantity: 1, price: 7899 },
                { name: 'Перфоратор универсальный Wander X645 1450W', quantity: 2, price: 11998 },
                
            ],
            subtotal: 12889,
            delivery: 0,
            paymentMethod: 'Оплата картой на сайте',
            total: 12889,
            deliveryMethod: 'Самовывоз',
            customer: {
                name: 'Евгений Иванов',
                address: '056734, Москва, Россия, улица Варшавская, 37/5, кв.574',
                phone: '+7 (956) 373-46-33',
                email: 'exampleofemail@gmail.com'
            }
        },
        {
            number: '#2365341-11',
            date: '10 Декабря 2022',
            status: 'Обработка',
            items: [
                    { name: 'Перфоратор универсальный Wander 1450W', quantity: 1, price: 7899 },
                    { name: 'Перфоратор универсальный Wander X645 1450W', quantity: 2, price: 11998 },
                    { name: 'Перфоратор универсальный Wander X', quantity: 3, price: 9033 },
                    
            ],
            subtotal: 2829,
            delivery: 0,
            paymentMethod: 'Оплата картой на сайте',
            total: 2829,
            deliveryMethod: 'Самовывоз',
            customer: {
                name: 'Евгений Иванов',
                address: '056734, Москва, Россия, улица Варшавская, 37/5, кв.574',
                phone: '+7 (956) 373-46-33',
                email: 'exampleofemail@gmail.com'
            }
        }
    ]
    
}

export const orderReducer = (state = defaultState, action) => {
    switch(action.type) {

        case "" : 
            return {...state, cardsCategory :  action.payload};
            default: 
                return state
    }
}

