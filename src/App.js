import React, {useEffect, useState} from 'react';

import CountriesInput from "./components/CountriesInput/CountriesInput";

import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getCountries, getCountryData} from "./store/actions/countriesActions";

function App() {
    const dispatch = useDispatch();
    const [listOptions, setListOptions] = useState([]);
    const countries = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const inputChangeHandler = event => setListOptions(filterOptions(event.target.value));
    const filterOptions = value => countries.filter(country => country.Country.toLowerCase().includes(value.toLowerCase()));
    const countrySelectHandler = countrySlug => dispatch(getCountryData(countrySlug));

    return (
        <div className="App">
            <CountriesInput
                onChange={inputChangeHandler}
                onSelect={countrySelectHandler}
                options={listOptions}
            />
        </div>
    );
}

export default App;
