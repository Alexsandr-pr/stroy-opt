

import { getAllCategory } from "store/adminReducer"
import { API_URL } from "../../config"
import axios from "axios"



class CategoryAction {
    async addCategory(title) {
        try {
            return await axios.post(`${API_URL}/category`, {
                title
            })  
        } catch(e) {
            console.log(e)
        }
    }

    getCategory(){
        return async dispatch => {
            try {
                
                const response = await axios.get(`${API_URL}/category/all`);
                if(response.status === 200) {
                    dispatch(getAllCategory(response.data))
                }
                
            } catch(e) {
                console.log(e)
            }
        } 
    }
}

export default new CategoryAction
