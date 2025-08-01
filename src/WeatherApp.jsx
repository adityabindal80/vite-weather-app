import React, { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import "./WeatherApp.css";
function WeatherApp() {
    let [info,setInfo] = useState(null);
    return ( <div style={{textAlign:"center"}}>
        <h1>Weather App</h1>
        <SearchBox onsearch={setInfo}/>
        <br/>
        <InfoBox info = {info}/>
    </div> );
}

export default WeatherApp;