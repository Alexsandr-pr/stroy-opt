import { addCardToBasket, initBasket } from "store/basketReducer"


class BasketAction {

    addCardBasket(id, quantity) {
        return async dispatch => {
            try {
                return dispatch(addCardToBasket({id, quantity}))
            }catch(e) {
                console.log(e)
            }
        }
    }
    
    onInitBasket (array) {
        return async dispatch => {
            
            try {
                return dispatch(initBasket(array))
            }catch(e) {
                console.log(e)
            }
        }
    }
} 

export default new BasketAction