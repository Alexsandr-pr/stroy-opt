import axios from "axios";
import { API_URL } from "../../config";


class TypeProductAction {
    async addTypeProduct(type, title, id) {
        try {
            const response = await axios.post(`${API_URL}/typeproduct?_id=${id}`, {
                type, title
            })
            return response
        }  catch(e) {
            console.log(e)
        }
    }
}

export default new TypeProductAction