import React from 'react';
import Card from '@mui/material/Card';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
function InfoBox({info}) {
    const HOT_URL = "https://media.istockphoto.com/id/491701259/photo/blue-sky-with-sun.jpg?s=612x612&w=0&k=20&c=aB7c-e0YFezBb8cgSykiEcAh_2fXEie3inIudnsNa9g=";
    const COLD_URL = "https://media.istockphoto.com/id/521998431/photo/whiteout-conditions.jpg?s=612x612&w=0&k=20&c=9CQs7-I4uhQhQZyQoeVL9If3dDMqXll9_glqkMAMLIQ=";
    const RAINY_URL = "https://images.unsplash.com/photo-1574308107819-81503d86593e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const int_url = "https://images.unsplash.com/photo-1616474648384-9e956216d1b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    if (!info) {
        return (
          <div className='infoBox'>
            <h2>Please enter a city to get weather info.</h2>
          </div>
        );
      }
    return ( 
     
    <div className='infoBox'>
   <h2>Weather Info</h2>
   <div className='cardContainer'>
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAINY_URL : (info.temp <21 ? COLD_URL : HOT_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.name} - {info.des} {info.humidity>80? <ThunderstormIcon/> : (info.temp <21 ? <AcUnitIcon/> : <SunnyIcon/>)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p> Temp : {info.temp}&deg;C </p>
          
          <p> Humidity : {info.humidity} </p>
          <p> Max Temp : {info.maxtemp}&deg;C </p>
           <p> The weather can be described as {info.des} and feels like {info.feelslike}&deg;C </p> 
        </Typography>
       
      </CardContent>
     
    </Card>
    </div>
    </div> );
}

export default InfoBox;