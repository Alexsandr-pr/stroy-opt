import { getAllCategory } from "store/adminReducer"
import { API_URL } from "../../config"
import axios from "axios"

export const addCategory = async (type, title) => {

    try {
        return await axios.post(`${API_URL}/category`, {
            type, title
        })
        
    } catch(e) {
        console.log(e)
    }
}

export const getCategory = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/category/all`);
            console.log(response.data)
            return dispatch(getAllCategory(response.data))
            
        } catch(e) {
            console.log(e)
        }
    }
    
}