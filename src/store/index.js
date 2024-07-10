import { applyMiddleware, combineReducers, createStore } from "redux";
import { catalogReducer } from "./CatalogReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardReducer } from "./cardReducer";
import { thunk } from "redux-thunk";
import { adminReducer } from "./adminReducer";
import {basketReducer }from "./basketReducer"
import { orderReducer } from "./orderReducer";



const rootReducer = combineReducers({
    catalog: catalogReducer,
    card: cardReducer,
    admin: adminReducer,
    basket: basketReducer,
    userOrder: orderReducer
})






export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))