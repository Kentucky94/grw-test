import React from 'react';
import './CountriesInput.css'

const CountriesInput = ({options, onChange, onSelect, value, isListOpen}) => {
    const countries = options.map((country, i) => {
        return (
            <li
                key={i}
                className="CountriesInput_listItem"
                onClick={() => onSelect(country)}
            >
                {country.Country}
            </li>
        )
    });

    return (
        <div className="CountriesInputWrapper">
            <input
                className={"CountiesInput"}
                value={value} type="options"
                onChange={event => onChange(event)}
            />
            <ul
                className={isListOpen ? "CountriesInput_list" : "CountriesInput_list--closed"}
            >
                {countries}
            </ul>
        </div>
    );
};

export default CountriesInput;
