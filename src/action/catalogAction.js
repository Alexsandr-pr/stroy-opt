import { changeCounterPerPage, onPageNumberMinus, onPageNumberPlus, pageNumber } from "store/CatalogReducer"

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

    onNextPage() {
        return async dispatch => {
            try {
                return dispatch(onPageNumberPlus())
            }catch(e){
                console.log(e)
            }
        }
    }
    
    onPrevPage() {
        return async dispatch => {
            try {
                return dispatch(onPageNumberMinus())
            }catch(e){
                console.log(e)
            }
        }
    }
}


export default new CatalogAction