import React, {useEffect} from 'react';


import './App.css';
import {useDispatch} from "react-redux";
import {getCountries} from "./store/actions/countriesActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('hello');
        dispatch(getCountries());
    }, [dispatch]);

    return (
        <div className="App">

        </div>
    );
}

export default App;
