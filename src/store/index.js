import { combineReducers, createStore } from "redux";
import { catalogReducer } from "./CatalogReducer";
import { composeWithDevTools } from "redux-devtools-extension";



const rootReducer = combineReducers({
    catalog: catalogReducer
})






export const store = createStore(rootReducer, composeWithDevTools())