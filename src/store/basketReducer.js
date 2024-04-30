
const defaultState = {
    basket: [],
}

const ADD_CARD = "ADD_CARD";
const INIT_CARD = "INIT_CARD";

export const basketReducer = (state = defaultState, action) => {
    switch(action.type) {
        case INIT_CARD : {
            return {...state, basket: action.payload}
        }
        case ADD_CARD : {
            return {...state, basket: [...state.basket, action.payload]}
        }
            default: 
                return state
    }
}

export const addCardToBasket = (payload) => ({type:ADD_CARD, payload})
export const initBasket = (payload) => ({type:INIT_CARD, payload})