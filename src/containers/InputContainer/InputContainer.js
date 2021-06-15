import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountries, getCountryData, setSelectedCountry} from "../../store/actions/countriesActions";
import CountriesInput from "../../components/CountriesInput/CountriesInput";

const InputContainer = () => {
    const dispatch = useDispatch();
    const selectedCountryData = useSelector(state => state.selectedCountry);
    const countries = useSelector(state => state.countries);

    const [inputValue, setInputValue] = useState(selectedCountryData.Country || "Kyrgyzstan");
    const [listOptions, setListOptions] = useState([]);
    const [listOpen, setListOpen] = useState(false);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const inputChangeHandler = event => {
        const inputText = event.target.value;

        setInputValue(inputText);
        setListOptions(filterOptions(inputValue));
        setListOpen(true);
    };

    const countrySelectHandler = countryData => {
        dispatch(setSelectedCountry(countryData));
        dispatch(getCountryData(countryData.Slug));
        setInputValue(countryData.Country);
        setListOpen(false);
    };

    const filterOptions = value => countries.filter(country => country.Country.toLowerCase().includes(value.toLowerCase()));

    return (
        <div className="App">
            <CountriesInput
                onChange={inputChangeHandler}
                onSelect={countrySelectHandler}
                options={listOptions}
                value={inputValue}
                isListOpen={listOpen}
            />
        </div>
    );
};

export default InputContainer;
