import React, {useEffect} from 'react';
import StatisticsBlock from "../../components/StatisticsBlock/StatisticsBlock";
import {useDispatch, useSelector} from "react-redux";
import {getCountryData} from "../../store/actions/countriesActions";

const DataContainer = () => {
    const dispatch = useDispatch();
    const statisticsDays = useSelector(state => state.countryData);

    useEffect(() => {
        dispatch(getCountryData("kyrgyzstan"));
    }, [dispatch]);

    return (
        <div>
            <StatisticsBlock data={statisticsDays}/>
        </div>
    );
};

export default DataContainer;
