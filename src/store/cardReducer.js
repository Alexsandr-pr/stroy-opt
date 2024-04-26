

const defaultState = {
    typeParam: "params",
    cards: [],
    card: {}
}

const CHANGE_PARAM = "CHANGE_PARAM";
const GET_MANY_CARDS = "GET_CARDS";
const GET_ONE_CARD = "GET_ONE_CARD";

export const cardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "CHANGE_PARAM" : 
            return {...state, typeParam : action.payload};
        case "GET_MANY_CARDS" : 
            return {...state, cards : action.payload};
        case "GET_ONE_CARD" : 
            return {...state, card :  action.payload};

            default: 
                return state
    }
}

export const changeParamTabs = (payload) => ({type:CHANGE_PARAM, payload})
export const getManyCards = (payload) => ({type:GET_MANY_CARDS, payload})
export const getOneCard = (payload) => ({type:GET_ONE_CARD, payload})