import axios from "axios"
import { API_URL } from "../../config"
import { getManyCards, getOneCard } from "store/cardReducer";


class CardAction {
    async addCard( title, files, sale, brandId, price, categoryId, typeToolId, typeProductId, params, description,current) {
        try {
            
            const formData = new FormData();

            formData.append("sale", sale);
            formData.append("brandId", brandId);
            formData.append("price", price);
            formData.append("categoryId", categoryId);
            formData.append("typeToolId", typeToolId);
            formData.append("typeProductId", typeProductId);
            formData.append("title", title);
            formData.append("params", JSON.stringify(params));
            formData.append("description", description);
            formData.append("current", current);

            if(Object.keys(files).length > 1) {
                files.forEach(file=> formData.append("file", file))
            } else {
                formData.append("file", files[0])
            }

            const response = await axios.post(`${API_URL}/card`, formData)
           
            return response.data
        }  catch(e) {
            return alert("Error upload")
        }
    }

    getCardsOnDb() {
        return async dispatch => {
            try {
                const response =  await axios.get(`${API_URL}/card`);
                if(response.status === 200) {
                    return dispatch(getManyCards(response.data))
                }
            } catch {
                return alert("Ошибка при загрузке товаров")
            }
        }
    }

    getOneCardOnDb(id) {
        return async dispatch => {
            try {
                const response =  await axios.get(`${API_URL}/card/${id}`);
                if(response.status === 200) {
                    return dispatch(getOneCard(response.data))
                }
            } catch {
                return alert("Ошибка при загрузке товарa")
            }
        }
    }

    async deleteCard(id) {
        try {
            const response =  await axios.delete(`${API_URL}/card/${id}`);
            if(response.status === 200) {
                return alert(response.message)
            }
        } catch {
            return alert("Ошибка при удалении товарa")
        }
    }

}

export default new CardAction