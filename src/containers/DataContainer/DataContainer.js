import React, {useEffect} from 'react';
import StatisticsBlock from "../../components/StatisticsBlock/StatisticsBlock";
import {useDispatch, useSelector} from "react-redux";
import RecoveredBlock from "../../components/RecoveredBlock/RecoveredBlock";
import './DataContainer.css'
import {getCountryData} from "../../store/actions/countriesActions";

const DataContainer = () => {
    const dispatch = useDispatch();
    const statisticsDays = useSelector(state => state.countryData);
    const countryName = useSelector(state => state.selectedCountry).Country;

    useEffect(() => {
        dispatch(getCountryData(countryName))
    }, []);

    const maxRecovered = statisticsDays ? statisticsDays.reduce((acc, day, i, array) => {
        if (i === array.length - 1) {
            return acc;
        }
        const nextDay = array[i + 1];
        return Math.max(acc, nextDay.Recovered - day.Recovered)
    }, 0) : 0;

    return (
        <div className="DataContainer">
            <StatisticsBlock data={statisticsDays}/>
            <RecoveredBlock maxRecovered={maxRecovered}/>
        </div>
    );
};

export default DataContainer;
