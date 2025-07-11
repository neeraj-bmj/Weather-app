import React, { useState } from 'react'
import SearchBox from './SearchBox'
import Information from './Information'

const Weather = () => {
  const [weatherInformation, setWeatherInformation] = useState({
    country : "IN",
    feels_like : 35.29,
    humidity: 37,
    name: "Delhi",
    temp: 35.88,
    temp_max: 35.88,
    temp_min: 35.88,
    weather: "clear sky",
    pressure: 1006,
    speed: 3.35
  });

  let updateInformation =(newValue)=> {
    setWeatherInformation(newValue);
  }
  
  return (
    <>
    <div className="wheatherApp flex flex-col bg-gray-500 h-full pt-10 gap-10 items-center">
        <SearchBox  updateInformation={updateInformation}/>
        <Information weatherInformation={weatherInformation}/>
    </div>
    </>
  )
}

export default Weather