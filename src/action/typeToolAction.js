import axios from "axios"
import { API_URL } from "../../config"
import { getAllTypeTool } from "store/adminReducer"


class TypeToolAction {
    async addTypeTool(title, id) {
        try {
            const response = await axios.post(`${API_URL}/typetool/tool/${id}`, {
                title
            })
            return response
        }  catch(e) {
            console.log(e)
        }
    }

    getTypeTool() {
        return async dispatch => {
            try {
                const response = await axios.get(`${API_URL}/typetool/all`);
                if(response.status === 200) {
                    return dispatch(getAllTypeTool(response.data))
                }
            } catch(e) {
                console.log(e)
            }
        }
    }
}

export default new TypeToolAction