import axios from "axios";

export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';

const getCountriesSuccess = countries => ({type: GET_COUNTRIES_SUCCESS, payload: countries});

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
