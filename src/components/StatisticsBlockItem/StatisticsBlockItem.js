import React from 'react';
import moment from "moment";

const StatisticsBlockItem = ({date, active, deaths, confirmed, recovered}) => {
    return (
        <div className="StatisticsBlock_item">
            <div className="StatisticsBlock_item_date">
                <b>{moment(date).format('MMMM Do YYYY')}</b>
            </div>
            <ul className="StatisticsBlock_item_counts">
                <li className="StatisticsBlock_item_count"><b>Active:</b> {active}</li>
                <li className="StatisticsBlock_item_count"><b>Deaths:</b> {deaths}</li>
                <li className="StatisticsBlock_item_count"><b>Confirmed:</b> {confirmed}</li>
                <li className="StatisticsBlock_item_count"><b>Recovered:</b> {recovered}</li>
            </ul>
        </div>
    );
};

export default StatisticsBlockItem;
