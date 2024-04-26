import axios from "axios";
import { API_URL } from "../../config";
import { getAllTypeProduct } from "store/adminReducer";


class TypeProductAction {
    async addTypeProduct(title, id) {
        try {
            const response = await axios.post(`${API_URL}api/typeproduct?_id=${id}`, {
                title
            })
        }  catch(e) {
            console.log(e)
        }
    }

    getTypeProduct() {
        return async dispatch => {
            try {
                const response = await axios.get(`${API_URL}api/typeproduct/product/all`);
                if(response.status === 200) {
                    return dispatch(getAllTypeProduct(response.data))
                }
            } catch(e) {
                console.log(e)
            }
        }
    }
}

export default new TypeProductAction