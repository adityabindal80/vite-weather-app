import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

function SearchBox({onsearch}) {
  const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${GEO_API_URL}?q=${city}&appid=${API_KEY}`);
      const jsonResponse = await response.json();

      if (!jsonResponse.length) {
        setError("City not found.");
        console.error("City not found");
        return;
      }

      const { lat, lon } = jsonResponse[0];

      const weatherRes = await fetch(
        `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const weatherData = await weatherRes.json();

     
      let result = {
        name:weatherData.name,
        temp: weatherData.main.temp ,
        mintemp:weatherData.main.temp_min,
        maxtemp:weatherData.main.temp_max,
        humidity: weatherData.main.humidity ,
        des:weatherData.weather[0].description,
        feelslike:weatherData.main.feels_like,
      }
      if (!result.name) {
        setError(true);
        onsearch(null);
        return;
      }
      onsearch(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try{
       evt.preventDefault();
    await getWeatherInfo();
    }
    catch(err){
      setError(true)
    }
   
    
  };

  return (
    <div className='searchbox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">Search</Button>
      </form>
      {error && <p className="error">No such place exist..</p>}
    </div>
  );
}

export default SearchBox;
