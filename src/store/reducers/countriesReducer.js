import {GET_COUNTRIES_SUCCESS, GET_COUNTRY_DATA_SUCCESS} from "../actions/countriesActions";

const initialState = {
    countries: [],
    countryData: {}
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS:
            return {...state, countries: action.payload};
        case GET_COUNTRY_DATA_SUCCESS:
            return {...state, countryData: action.payload};
        default:
            return state;
    }
};

export default countriesReducer;
