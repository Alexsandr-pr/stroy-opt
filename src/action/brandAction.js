import axios from "axios";
import { API_URL } from "../../config";
import { getAllBrand } from "store/adminReducer";


class brandAction {
    async addBrand(title) {
        try {
            const response = await axios.post(`${API_URL}api/brand`, {
                title
            })
            return response
        }  catch(e) {
            console.log(e)
        }
    }

    getBrand() {
        return async dispatch => {
            try {
                const response = await axios.get(`${API_URL}api/brand`);
                if(response.status === 200) {
                    return dispatch(getAllBrand(response.data))
                }
            } catch(e) {
                console.log(e)
            }
        }
    }
}

export default new brandAction