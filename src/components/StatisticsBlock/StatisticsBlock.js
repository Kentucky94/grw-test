import React from 'react';
import StatisticsBlockItem from "../StatisticsBlockItem/StatisticsBlockItem";
import './StatisticsBlock.css'

const StatisticsBlock = ({data}) => {
    const items = data.map(dayData => {
        return (
            <StatisticsBlockItem
                key={dayData.ID}
                date={dayData.Date}
                active={dayData.Active}
                deaths={dayData.Deaths}
                confirmed={dayData.Confirmed}
                recovered={dayData.Recovered}
            />
        )
    });

    return (
        <div className="StatisticsBlock">
            {items}
        </div>
    );
};

export default StatisticsBlock;
