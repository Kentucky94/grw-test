import {
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRY_DATA_SUCCESS,
    SET_SELECTED_COUNTRY_SUCCESS
} from "../actions/countriesActions";

const initialState = {
    countries: [],
    countryData: [],
    selectedCountry: {
        Country: "Kyrgyzstan",
        Slug: "kyrgyzstan",
        ISO2: "KG"
    },
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS:
            return {...state, countries: action.payload};
        case GET_COUNTRY_DATA_SUCCESS:
            return {...state, countryData: action.payload};
        case SET_SELECTED_COUNTRY_SUCCESS:
            return {...state, selectedCountry: action.payload};
        default:
            return state;
    }
};

export default countriesReducer;
