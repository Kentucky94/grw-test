import React from 'react';
import moment from "moment";

const StatisticsBlockItem = ({date, active, deaths, confirmed, recovered}) => {
    return (
        <div className="StatisticsBlock_item">
            <div className="StatisticsBlock_item_date">
                {moment(date).format('MMMM Do YYYY')}
            </div>
            <ul className="StatisticsBlock_item_counts">
                <li className="StatisticsBlock_item_count">Active: {active}</li>
                <li className="StatisticsBlock_item_count">Deaths: {deaths}</li>
                <li className="StatisticsBlock_item_count">Confirmed: {confirmed}</li>
                <li className="StatisticsBlock_item_count">Recovered: {recovered}</li>
            </ul>
        </div>
    );
};

export default StatisticsBlockItem;
