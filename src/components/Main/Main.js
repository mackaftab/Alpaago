import React, { useState } from 'react'
import WeatherApp from '../WeatherApp/WeatherApp'
import User from '../User/User';

const Main = (props) => {


  return (
    <div>
      <h2>{props.name ? `Welcome - ${props.name}` : ""}</h2>
      <hr />
      <div className="detail">
      <WeatherApp/>
     
      </div>
      
    </div>
  )
}

export default Main
