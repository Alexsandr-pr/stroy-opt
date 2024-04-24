import axios from "axios"
import { API_URL } from "../../config"


class CardAction {
    async addCard(title, files, code, sale, brandId, price, categoryId, typeToolId, typeProductId, params) {
        try {
            
            const formData = new FormData();

            formData.append("code", code);
            formData.append("sale", sale);
            formData.append("brandId", brandId);
            formData.append("price", price);
            formData.append("categoryId", categoryId);
            formData.append("typeToolId", typeToolId);
            formData.append("typeProductId", typeProductId);
            formData.append("title", title);
            formData.append("params", JSON.stringify(params));
            if(Object.keys(files).length > 1) {
                files.forEach(file=> formData.append("file", file))
            } else {
                formData.append("file", files[0])
            }

            const response = await axios.post(`${API_URL}/card`, formData)

            return response
        }  catch(e) {
            console.log(e)
        }
    }
}

export default new CardAction