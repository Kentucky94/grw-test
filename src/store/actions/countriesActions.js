import axios from "axios";

export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRY_DATA_SUCCESS = "GET_COUNTRY_DATA_SUCCESS";
export const SET_SELECTED_COUNTRY_SUCCESS = 'SET_SELECTED_COUNTRY_SUCCESS';

const getCountriesSuccess = countries => ({type: GET_COUNTRIES_SUCCESS, payload: countries});
const getCountryDataSuccess = data => ({type: GET_COUNTRY_DATA_SUCCESS, payload: data});
export const setSelectedCountry = data => ({type: SET_SELECTED_COUNTRY_SUCCESS, payload: data});

export const getCountries = () => {
    return async dispatch => {
        try {
            const res = await axios.get('https://api.covid19api.com/countries');

            dispatch(getCountriesSuccess(res.data));
        } catch (error) {
            console.log(error);
        }
    }
};

export const getCountryData = countySlug => {
    return async dispatch => {
        try {
            const res = await axios.get(`https://api.covid19api.com/country/${countySlug}`);

            dispatch(getCountryDataSuccess(res.data.slice(-5)));
        } catch (error) {
            console.log(error);
        }
    }
};
