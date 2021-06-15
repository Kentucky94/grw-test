import React from 'react';
import './CountriesInput.css'

const CountriesInput = ({options, onChange, onSelect, selectedCountry}) => {
    const countries = options.map((country, i) => {
        return (
            <li
                key={i}
                className="CountriesInput_listItem"
                onClick={() => onSelect(country.Country, country.Slug)}
            >
                {country.Country}
            </li>
        )
    });

    return (
        <div className="CountriesInputWrapper">
            <input className="CountiesInput" value={selectedCountry} type="options" onChange={event => onChange(event)}/>
            <ul className="CountriesInput_list">
                {countries}
            </ul>
        </div>
    );
};

export default CountriesInput;
