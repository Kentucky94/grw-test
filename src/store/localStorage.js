import {GET_COUNTRY_DATA_SUCCESS} from "./actions/countriesActions";

const actionsList = [GET_COUNTRY_DATA_SUCCESS];

const saveToLocalStorage = state => {
    try {
        const data = JSON.stringify(state);
        localStorage.setItem('state', data);
    } catch (e) {
        console.log('could not save to state');
    }
};

export const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('state');
        if (data === null) {return undefined;}
        return JSON.parse(data);
    } catch (e) {
        return undefined;
    }
};

export const localStorageMiddleware = store => next => action => {
    let result = next(action);

    if (actionsList.includes(action.type)) {
        saveToLocalStorage({
            selectedCountry: store.getState().selectedCountry,
            countryData: store.getState().countryData,
        })
    }

    return result;
};
