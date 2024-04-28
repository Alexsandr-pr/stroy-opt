import axios from "axios"
import { API_URL, LIMIT_CATEGORY } from "../../config"
import { getCardsCategory, getManyCards, getOneCard, loadingCard } from "store/cardReducer";


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

            const response = await axios.post(`${API_URL}api/card`, formData)
           
            return response.data
        }  catch(e) {
            return alert("Error upload")
        }
    }

    getCardsOnDb() {
        return async dispatch => {
            try {
                const response =  await axios.get(`${API_URL}api/card/cards`);
                if(response.status === 200) {
                    return dispatch(getManyCards(response.data))
                }
            } catch {
                return alert("Ошибка при загрузке товаров")
            }
        }
    }

    getOneCardOnDb(id = "662bd95b7d412ae6ed509f0a") {
        return async dispatch => {
            try {
                dispatch(loadingCard())
                const response =  await axios.get(`${API_URL}api/card/one/${id}`);
                if(response.status === 200) {
                    
                    return dispatch(getOneCard(response.data))
                }
            } catch {
                return alert("Ошибка при загрузке товарa")
            }
        }
    }

    getCardsOnCategory(id) {
        return async dispatch => {  
                const response =  await axios.get(`${API_URL}api/card/category/hits/?limit=${LIMIT_CATEGORY}&id=${id}`);

                if(response.status === 200) {
                    
                    return dispatch(getCardsCategory(response.data))
                }
            
        }
    }


    async deleteCard(id) {
        try {
            const response =  await axios.delete(`${API_URL}api/card/${id}`);
            if(response.status === 200) {
                return alert(response.message)
            }
        } catch {
            return alert("Ошибка при удалении товарa")
        }
    }

}

export default new CardAction