import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import {localStorageMiddleware, loadFromLocalStorage} from "./localStorage";
import countriesReducer from "./reducers/countriesReducer";

const middleware = [
    thunk,
    localStorageMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(countriesReducer, loadFromLocalStorage(), composeEnhancers(applyMiddleware(...middleware)));

export default store;
