
const defaultState = {
    category: [],
    typeProduct: [],
    typeTool: [],
    brand: []
}

const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
const GET_TYPE_PRODUCT = "GET_TYPE_PRODUCT";
const GET_TYPE_TOOL = "GET_TYPE_TOOL";
const GET_BRAND =  "GET_BRAND";


export const adminReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ALL_CATEGORY: 
            return {...state, category: [...action.payload]};
        case GET_TYPE_PRODUCT: 
            return {...state, typeProduct: [...action.payload]};
        case GET_TYPE_TOOL: 
            return {...state, typeTool: [...action.payload]};
        case GET_BRAND: 
            return {...state, brand: [...action.payload]}
            default: 
                return state
    }
}

export const getAllCategory = (payload) => ({type: GET_ALL_CATEGORY, payload});
export const getAllTypeProduct = (payload) => ({type: GET_TYPE_PRODUCT, payload});
export const getAllTypeTool = (payload) => ({type: GET_TYPE_TOOL, payload});
export const getAllBrand = (payload) => ({type: GET_BRAND, payload});