import { changeCounterPerPage, pageNumber } from "store/CatalogReducer"

class CatalogAction {

    changeCountPerPage(number){
        return async dispatch => {
            try {
                return dispatch(changeCounterPerPage(number))
            }catch(e){
                console.log(e)
            }
        }
    }
    
    changePage(number) {
        return async dispatch => {
            try {
                return dispatch(pageNumber(number))
            }catch(e){
                console.log(e)
            }
        }
    }
}


export default new CatalogAction