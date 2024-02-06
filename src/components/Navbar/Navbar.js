import React, { useState } from 'react';
import './Navbar.css'

function Navbar({updateInfo}) {

    const [city,setCity] = useState("");


    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";

    let getWeatherInfo = async ()=>{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max
        }
        console.log(result);
        return result;
    }


    const handleChange =(event)=>{
       setCity(event.target.value)
    }

    const handleSubmit = async(event)=>{
       event.preventDefault()
       console.log(city);
       setCity("")
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo)
    }

    return (
        <>
        <div className='navbar'>
            <div className="main">
                <form className='search'>
                    <input type="search" required onChange={handleChange} placeholder='Search Temperature here...' value={city}/>
                    <button type='submit' onClick={handleSubmit}>search</button>
                </form>
            </div>
            
           
        </div>
            
            </>
            )
}

export default Navbar
