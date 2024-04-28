

const defaultState = {
    typeParam: "params",
    cards: [],
    card: {},
    cardsCategory: [],
    loading: true
}

const CHANGE_PARAM = "CHANGE_PARAM";
const GET_MANY_CARDS = "GET_MANY_CARDS";
const GET_ONE_CARD = "GET_ONE_CARD";
const LOADING_CARD = "LOADING_CARD";
const GET_CARDS_CATEGORY = "GET_CARDS_CATEGORY";

export const cardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_PARAM : 
            return {...state, typeParam : action.payload};
        case GET_MANY_CARDS: 
            return {...state, cards : action.payload};
        case LOADING_CARD : 
            return {...state, loading: true};
        case GET_ONE_CARD : 
            return {...state, card :  {...action.payload}, loading:false};
        case GET_CARDS_CATEGORY : 
            return {...state, cardsCategory :  action.payload};
            default: 
                return state
    }
}

export const changeParamTabs = (payload) => ({type:CHANGE_PARAM, payload});
export const getManyCards = (payload) => ({type:GET_MANY_CARDS, payload});
export const getOneCard = (payload) => ({type:GET_ONE_CARD, payload});
export const getCardsCategory = (payload) => ({type:GET_CARDS_CATEGORY, payload});
export const loadingCard = (payload) => ({type:LOADING_CARD, payload})