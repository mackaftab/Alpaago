import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Infobox from '../Infobox/Infobox'
import User from '../User/User';
import './WeatherApp.css'


function WeatherApp() {

   const [weatherInfo,setWeatherInfo] = useState({
    city : "London",
    temp : 17,
    tempMin : 21,
    tempMax : 28,
    weather : "hazy"
   })

   const updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo)
   }

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Weather App</h1>
        <Navbar updateInfo={updateInfo}/>
     <div className="detail">
     <Infobox info={weatherInfo}/>
      <User/>
     </div>
    </div>
  )
}

export default WeatherApp
