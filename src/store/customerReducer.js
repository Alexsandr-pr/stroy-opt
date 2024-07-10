
const defaultState = {
    customer: {
        contactInfo: {
            name: 'Евгений Иванов',
            address: '056734, Москва, Россия, улица Варшавская, 37/5, кв.574',
            phone: '+7 (956) 373-46-33',
            email: 'exampleofemail@gmail.com'
        }
    },
}



export const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
        
            default: 
                return state
    }
}
