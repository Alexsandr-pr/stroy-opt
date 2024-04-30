import { applyMiddleware, combineReducers, createStore } from "redux";
import { catalogReducer } from "./CatalogReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardReducer } from "./cardReducer";
import { thunk } from "redux-thunk";
import { adminReducer } from "./adminReducer";
import {basketReducer }from "./basketReducer"



const rootReducer = combineReducers({
    catalog: catalogReducer,
    card: cardReducer,
    admin: adminReducer,
    basket: basketReducer

})






export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))