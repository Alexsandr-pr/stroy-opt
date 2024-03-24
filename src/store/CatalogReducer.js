const defaultState = {
    activeFilter: false
}

const ADD_ACTIVE_FILTER = "ADD_ACTIVE_FILTER";
const DELETE_ACTIVE_FILTER = "DELETE_ACTIVE_FILTER"

export const catalogReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_ACTIVE_FILTER" : 
            return {...state, activeFilter: true};
        case "DELETE_ACTIVE_FILTER" : 
            return {...state, activeFilter: false}
            default: 
                return state
    }
}

export const addActiveFilter  = () => ({type: ADD_ACTIVE_FILTER})
export const deleteActiveFilter  = () => ({type: DELETE_ACTIVE_FILTER})