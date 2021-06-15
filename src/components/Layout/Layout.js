import React from 'react';
import InputContainer from "../../containers/InputContainer/InputContainer";
import './Layout.css'
import DataContainer from "../../containers/DataContainer/DataContainer";

const Layout = () => {
    return (
        <div className="Container">
            <InputContainer />
            <DataContainer />
        </div>
    );
};

export default Layout;
