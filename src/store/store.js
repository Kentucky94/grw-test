import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import countriesReducer from "./reducers/countriesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(countriesReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
