import {GET_COUNTRIES_SUCCESS} from "../actions/countriesActions";

const initialState = {
    countries: [],
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS:
            return {...state, countries: action.payload};
        default:
            return state;
    }
};

export default countriesReducer;
