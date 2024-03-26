import { combineReducers, createStore } from "redux";
import { catalogReducer } from "./CatalogReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardReducer } from "./cardReducer";



const rootReducer = combineReducers({
    catalog: catalogReducer,
    card: cardReducer
})






export const store = createStore(rootReducer, composeWithDevTools())