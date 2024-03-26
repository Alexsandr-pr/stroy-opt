

const defaultState = {
    typeParam: "params"
}

const CHANGE_PARAM = "CHANGE_PARAM";

export const cardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "CHANGE_PARAM" : 
            return {...state, typeParam : action.payload}

            default: 
                return state
    }
}

export const changeParamTabs = (payload) => ({type:CHANGE_PARAM, payload})