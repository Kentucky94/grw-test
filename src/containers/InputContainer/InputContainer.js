import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountries, getCountryData} from "../../store/actions/countriesActions";
import CountriesInput from "../../components/CountriesInput/CountriesInput";

const InputContainer = () => {
    const dispatch = useDispatch();
    const [listOptions, setListOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('Kyrgyzstan');
    const countries = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const inputChangeHandler = event => {
        setSelectedCountry(event.target.value);
        setListOptions(filterOptions(selectedCountry));
    };

    const countrySelectHandler = (countryName, countrySlug) => {
        setSelectedCountry(countryName);
        dispatch(getCountryData(countrySlug));
    };

    const filterOptions = value => countries.filter(country => country.Country.toLowerCase().includes(value.toLowerCase()));

    return (
        <div className="App">
            <CountriesInput
                onChange={inputChangeHandler}
                onSelect={countrySelectHandler}
                options={listOptions}
                selectedCountry={selectedCountry}
            />
        </div>
    );
};

export default InputContainer;
