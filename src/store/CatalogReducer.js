const defaultState = {
    activeFilter: false,
    cardsLenght: 0,
    counterPerPage: 9,
    page: 1,
    loadingCatalog: true
}

const ADD_ACTIVE_FILTER = "ADD_ACTIVE_FILTER";
const DELETE_ACTIVE_FILTER = "DELETE_ACTIVE_FILTER";
const CARDS_LENGHT = "CARDS_LENGHT";
const CHANGE_COUNTER_PER_PAGE = "CHANGE_COUNTER_PER_PAGE";
const PAGE_NUMBER = "PAGE_NUMBER";
const LOADING_CATALOG = "LOADING_CATALOG";

export const catalogReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_ACTIVE_FILTER: 
            return {...state, activeFilter: true};
        case DELETE_ACTIVE_FILTER: 
            return {...state, activeFilter: false};
        case CARDS_LENGHT:
            return  {...state, cardsLenght: action.payload, loadingCatalog:false };
        case CHANGE_COUNTER_PER_PAGE:
            return  {...state, counterPerPage: action.payload};
        case PAGE_NUMBER:
            return  {...state, page: action.payload};
        case LOADING_CATALOG: 
            return {...state, loadingCatalog:true};
            default: 
                return state
    }
}

export const addActiveFilter  = () => ({type: ADD_ACTIVE_FILTER});
export const deleteActiveFilter  = () => ({type: DELETE_ACTIVE_FILTER});
export const getCardsLenght  = (payload) => ({type: CARDS_LENGHT, payload});
export const changeCounterPerPage  = (payload) => ({type: CHANGE_COUNTER_PER_PAGE, payload});
export const pageNumber  = (payload) => ({type: PAGE_NUMBER, payload});
export const loadingCatalog  = () => ({type: LOADING_CATALOG});