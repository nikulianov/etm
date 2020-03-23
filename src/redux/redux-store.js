import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import catalogReducer from "./catalog-reducer";
import thunkMiddleware from 'redux-thunk';

let reducerAll = combineReducers({
    catalog:catalogReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducerAll, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;