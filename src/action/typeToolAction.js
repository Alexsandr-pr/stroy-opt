import axios from "axios"
import { API_URL } from "../../config"


class TypeToolAction {
    async addTypeTool(type, title, id) {
        try {
            const response = await axios.post(`${API_URL}/typetool?_id=${id}`, {
                type, title
            })
            return response
        }  catch(e) {
            console.log(e)
        }
    }
}

export default new TypeToolAction