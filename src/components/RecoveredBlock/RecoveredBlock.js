import React from 'react';
import './RecoveredBlock.css'

const RecoveredBlock = ({maxRecovered}) => {
    return (
        <div className="RecoveredBlock">
            <div className="RecoveredBlock_badge">
                <h4 className="RecoveredBlock_badge_heading">Top Recovered Cases</h4>
                <div className="RecoveredBlock_badge_body">
                    {maxRecovered}
                </div>
            </div>
        </div>
    );
};

export default RecoveredBlock;
