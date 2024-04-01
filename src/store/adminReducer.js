
const defaultState = {
    category: []
}

const GET_ALL_CATEGORY = "GET_ALL_CATEGORY"

export const adminReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_CATEGORY: 
            return {...state, category: [...action.payload]}

            default: 
                return state
    }
}

export const getAllCategory = (payload) => ({type: GET_ALL_CATEGORY, payload})